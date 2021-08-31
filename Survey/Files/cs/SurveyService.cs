using Survey.API;
using Survey.DTO;
using System;
using System.Collections.Generic;
using System.ServiceModel;
using System.ServiceModel.Activation;
using System.ServiceModel.Web;
using System.Threading.Tasks;
using System.Web;
using Terrasoft.Core;
using Terrasoft.Core.Entities;

namespace Survey
{
	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public partial class SurveyService
	{
		#region Constructor
		public SurveyService()
		{

		}
		#endregion

		#region Properties: Protected

		private HttpContextBase _httpContext;
		protected virtual HttpContextBase CurrentHttpContext
		{
			get { return _httpContext ?? (_httpContext = new HttpContextWrapper(HttpContext.Current)); }
		}

		private UserConnection _userConnection;
		protected UserConnection UserConnection
		{
			get
			{
				if (_userConnection != null)
				{
					return _userConnection;
				}
				_userConnection = CurrentHttpContext.Session["UserConnection"] as UserConnection;
				if (_userConnection != null)
				{
					return _userConnection;
				}
				var appConnection = (AppConnection)CurrentHttpContext.Application["AppConnection"];
				_userConnection = appConnection.SystemUserConnection;
				return _userConnection;
			}
		}
		#endregion

		#region Methods: Private

		private void SetOptionsCORS()
		{
			CurrentHttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
			CurrentHttpContext.Response.AddHeader("Access-Control-Allow-Methods", "GET, POST");
			CurrentHttpContext.Response.AddHeader("Access-Control-Allow-Headers", "Content-Type, Accept");
		}

		private void SetHeaderCORS()
		{
			CurrentHttpContext.Response.AddHeader("Access-Control-Allow-Origin", "*");
		}

		#endregion

		#region Methods: Public
		/// <summary>
		///  Set CORS Options
		/// <remarks>
		/// See more about CORS preflight <see href="https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request"> request</see>
		/// </remarks>
		/// </summary>
		[OperationContract]
		[WebInvoke(Method = "OPTIONS", UriTemplate = "*")]
		public void GetWebRequestOptions()
		{
			SetOptionsCORS();
		}

		/// <summary>
		/// Get survey data from db based on token parameters
		/// </summary>
		/// <param name="h">Token header</param>
		/// <param name="b">Token Body</param>
		/// <param name="s">Token Signature</param>
		/// <returns>Filled Survey Data Model</returns>
		/// <remarks>
		/// To learn more about Custom web services see academy 
		/// <see href="https://academy.creatio.com/docs/developer/back-end_development/configuration_web_service/configuration_web_service"> article</see>
		/// </remarks>
		[OperationContract]
		[WebInvoke(Method = "GET", BodyStyle = WebMessageBodyStyle.Bare,
			ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
		public SurveyData GetSurveyData(string h, string b, string s)
		{
			string token = $"{h}.{b}.{s}";

			SetHeaderCORS();
			if (token != string.Empty)
			{
				IJwtToken jwt = new JwtToken(UserConnection);
				IClaims claims = jwt.ValidateToken(token);

				if (claims != null)
				{
					return GetSurveyData(claims);
				}
			}
			return null;
		}


		/// <summary>
		/// Saves submitted data to db
		/// </summary>
		/// <param name="results"></param>
		/// <returns>Always true</returns>
		/// <remarks>
		/// To learn more about <b>Custom web services</b> see academy
		/// <see href="https://academy.creatio.com/docs/developer/back-end_development/configuration_web_service/configuration_web_service"> article</see>
		/// </remarks>
		[OperationContract]
		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Bare, UriTemplate = "SubmitSurveyData",
			ResponseFormat = WebMessageFormat.Json, RequestFormat = WebMessageFormat.Json)]
		public bool SubmitSurveyData(SubmitSurveyData results)
		{
			IJwtToken jwt = new JwtToken(UserConnection);
			IClaims claims = jwt.ValidateToken(results.Token);

			//Claims will be null if validation fails;
			if (claims == null) return false;

			//I don't want to wait for the db to finish inserting records, return true immediately
			Task.Run(() => {
				SaveResponse(results, claims);
			}).ConfigureAwait(false);
		
			SetHeaderCORS();
			return true;
		}
		#endregion

		#region Private
		private SurveyData GetSurveyData(IClaims claims)
		{
			var surveyDescription = GetSurveyDescription(claims.SurveyId);
			//List<SurveyQuestion> questions = GetQuestions(claims.SurveyId);

			return  new SurveyData
			{
				Name = surveyDescription.Name,
				Notes = surveyDescription.Notes	,
				Questions = GetQuestions(claims.SurveyId)
			};
		}

		/// <summary>
		/// Gets Survey descriptor
		/// </summary>
		/// <param name="sid">Survey Id</param>
		/// <returns>Name and Notes for a given Survey</returns>
		/// <remarks>
		/// See <b>Data access through ORM</b> <see href="https://academy.creatio.com/docs/developer/back-end_development/working_with_database/working_with_database">academy article</see>
		/// </remarks>
		private (string Name, string Notes) GetSurveyDescription(Guid sid)
		{
			const string entitySchemaName = "Survey";
			EntitySchema surveySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			Entity survey = surveySchema.CreateEntity(UserConnection);
			survey.FetchFromDB(sid);
			string name = survey.GetTypedColumnValue<string>("Name");
			string notes = survey.GetTypedColumnValue<string>("Notes");

			(string Name, string Notes) result = (name, notes);
			return result;

		}

		/// <summary>
		/// Gets collection of survey questions for a given SurveyId
		/// </summary>
		/// <param name="surveyId"></param>
		/// <returns></returns>
		private List<SurveyQuestion> GetQuestions(Guid surveyId)
		{
			const string entitySchemaName = "SurveyQuestions";
			EntitySchemaQuery esqResult = new EntitySchemaQuery(UserConnection.EntitySchemaManager, entitySchemaName);
			esqResult.PrimaryQueryColumn.IsVisible = true;
			esqResult.AddColumn("Name");
			esqResult.AddColumn("Order");
			esqResult.AddColumn("Question");

			IEntitySchemaQueryFilterItem filterBySid = esqResult.CreateFilterWithParameters(
			  FilterComparisonType.Equal, "Survey", surveyId);
			esqResult.Filters.Add(filterBySid);

			EntityCollection surveyQuestions = esqResult.GetEntityCollection(_userConnection);
			List<SurveyQuestion> result = new List<SurveyQuestion>(surveyQuestions.Count);

			foreach (var item in surveyQuestions)
			{
				const string questionEntitySchemaName = "Question";
				EntitySchema questoinSchema = UserConnection.EntitySchemaManager.GetInstanceByName(questionEntitySchemaName);
				Entity question = questoinSchema.CreateEntity(UserConnection);

				Guid questionId = item.GetTypedColumnValue<Guid>("QuestionId");
				question.FetchFromDB(questionId);

				result.Add(
					new SurveyQuestion
					{
						Name = item.GetTypedColumnValue<string>("Name"),
						Order = item.GetTypedColumnValue<int>("Order"),
						Question = new Question
							{
								QuestionId = questionId,
								LongQuestion = question.GetTypedColumnValue<string>("LongQuestion"),
								IsCommentRequired = question.GetTypedColumnValue<bool>("IsCommentRequired"),
								IsScoreRequired = question.GetTypedColumnValue<bool>("IsScoreRequired")	,
								PlaceHolder = question.GetTypedColumnValue<string>("PlaceHolder")
						}
					}
				);
			}
			return result;
		}


		/// <summary>
		/// Saves results of the response into db
		/// </summary>
		/// <param name="results">answers collected by the webForm</param>
		/// <param name="claims">parameters from the token</param>
		private void SaveResponse(SubmitSurveyData results, IClaims claims)
		{

			// TODO: Check if survey already exists, and do not insert duplicate


			//Need Parent Id first
			Guid surveyResponseId = SaveSurveyResponse(claims);
			
			//Insert children
			SaveAnswers(results, surveyResponseId);

			// We can send message to the UI layer with webSocket
			// Default implementation is provided in Terrasoft.Configuration.MsgChannelUtilities static Class
			// Because we don't have access to Terrasoft.Configuration we use ClassFactory to request implementation that sends a message
			// TODO: Create message model to include record Id and other info for UI
			IConfToSurvey conf = Terrasoft.Core.Factories.ClassFactory.Get<IConfToSurvey>();
			string message = "{\"event\":\"A new survey response has been added\"}";
			conf.PostMessageToAll(GetType().Name, message );
		}

		private Guid SaveSurveyResponse(IClaims claims)
		{
			const string surveyResponseEntitySchemaName = "SurveyResponse";
			EntitySchema surveyResponseSchema = UserConnection.EntitySchemaManager.GetInstanceByName(surveyResponseEntitySchemaName);
			Entity surveyResponse = surveyResponseSchema.CreateEntity(UserConnection);

			surveyResponse.SetDefColumnValues();

			//Save method only returns bool, thus we have to create Id ourselves if we need to return it
			Guid id = Guid.NewGuid(); // Generate new Record Id
			surveyResponse.SetColumnValue("Id", id);

			surveyResponse.SetColumnValue("Name", "Survey Response");
			surveyResponse.SetColumnValue("SurveyId", claims.SurveyId);
			surveyResponse.SetColumnValue("ContactId", claims.ContactId);
			surveyResponse.SetColumnValue("RecordId", claims.RecordId);


			//Claims includes EntitySchemaUID, however we need an Id
			//we can look it up by queering VwSysSchemaInfo
			const string entitySchemaName = "VwSysSchemaInfo";
			EntitySchema entitySchema = UserConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			Entity entity = entitySchema.CreateEntity(UserConnection);
			entity.FetchFromDB("UId", claims.EntitySchemaUID, new string[] { "Id" });
			surveyResponse.SetColumnValue("ObjectId", entity.PrimaryColumnValue);


			if (surveyResponse.Save())
			{
				return id;
			}
			return Guid.Empty;
		}

		/// <summary>
		/// Inserts individual answer into db
		/// </summary>
		/// <param name="results">Collection of answers</param>
		/// <param name="surveyResponseId">Id of the parent record</param>
		private void SaveAnswers(SubmitSurveyData results, Guid surveyResponseId)
		{
			const string surveyQuestionResponseEntitySchemaName = "SurveyQuestionResponse";
			EntitySchema surveyQuestionResponseSchema = UserConnection.EntitySchemaManager.GetInstanceByName(surveyQuestionResponseEntitySchemaName);

			foreach (Answer answer in results.Answers)
			{
				Entity surveyQuestionResponse = surveyQuestionResponseSchema.CreateEntity(UserConnection);
				surveyQuestionResponse.SetDefColumnValues();
				surveyQuestionResponse.SetColumnValue("Comment", answer.Comment);
				surveyQuestionResponse.SetColumnValue("Name", GetQuestionName(answer.QuestionId));
				surveyQuestionResponse.SetColumnValue("QuestionId", answer.QuestionId);
				surveyQuestionResponse.SetColumnValue("Score", answer.Score);
				surveyQuestionResponse.SetColumnValue("SurveyResponseId", surveyResponseId); //Id of the parent record
				surveyQuestionResponse.Save();
			}
		}

		private string GetQuestionName(Guid questionId)
		{
			const string questionEntitySchemaName = "Question";
			EntitySchema questionSchema = UserConnection.EntitySchemaManager.GetInstanceByName(questionEntitySchemaName);
			Entity question = questionSchema.CreateEntity(UserConnection);
			question.FetchFromDB("Id", questionId, new string[] { "Name" });

			return question.GetTypedColumnValue<string>("Name");
		}
		#endregion
	}
}