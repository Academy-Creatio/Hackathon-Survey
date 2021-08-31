using System;
using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Survey.DTO
{
	[DataContract]
	public class SubmitSurveyData
	{
		[DataMember(Name = "answers")]
		public IEnumerable<Answer> Answers { get; set; }

		[DataMember(Name = "token")]
		public string Token { get; set; }
	}


	[DataContract]
	public class Answer
	{
		[DataMember(Name = "score")]
		public int Score { get; set; }
		
		[DataMember(Name = "comment")]
		public string Comment { get; set; }

		[DataMember(Name = "questionId", IsRequired = true)]
		public Guid QuestionId { get; set; }
	}
}
