using Microsoft.IdentityModel.Tokens;
using Survey.API;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using Terrasoft.Core;
using Terrasoft.Core.Configuration;
using Terrasoft.Core.Factories;

namespace Survey
{

	/// <summary>
	/// Default implementation of  IJwtToken interface
	/// </summary>
	
	[DefaultBinding(typeof(IJwtToken))]
	partial class JwtToken : IJwtToken
	{
		private readonly UserConnection _userConnection;
		private const string _sysSettingName = "SurveySecret";

		/// <summary>
		/// User connection is required to read SysSettingValue from creatio db
		/// </summary>
		/// <param name="userConnection"></param>
		/// <example>
		/// Default binding is used to register implementation with DI Container
		/// <code>
		/// ConstructorArgument ca = new ConstructorArgument("userConnection", UserConnection);
		/// IJwtToken jwt = Factories.ClassFactory.Get<IJwtToken>(ca);
		/// </code>
		/// </example>
		public JwtToken(UserConnection userConnection)
		{
			_userConnection = userConnection;
		}

		private string Secret { 
			get 
			{
				SysSettings.TryGetValue(_userConnection, _sysSettingName, out object secret);
				if(secret != null)
				{
					string secretString = (string)secret;
					return secretString;
				}
				return "";
			}
		}

		/// <inheritdoc cref="IJwtToken.GenerateToken(Guid, Guid, Guid, Guid)"/>
		public string GenerateToken(Guid sid, Guid cid, Guid uid, Guid rid)
		{
			// Create Security key using private key:
			// not that latest version of JWT using Microsoft namespace instead of System
			// new Microsoft.IdentityModel.Tokens.SymmetricSecurityKey
			SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Secret));

			// Also note that securityKey length should be >256b
			// so you have to make sure that your private key has a proper length
			SigningCredentials credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

			JwtHeader header = new JwtHeader(credentials);

			DateTime Expiry = DateTime.UtcNow.AddMinutes(20);
			int ts = (int)(Expiry - new DateTime(1970, 1, 1)).TotalSeconds;

			var payload = new JwtPayload
			{
				{ "aud", "Creatio"},
				{ "iss", "Creatio"},
				{ "sid", sid },				//[Guid]SurveyId
				{ "cid", cid },				//[Guid]ContactId - Id of the contact who will be filing a survey
				{ "uid", uid },				//[Guid]EntitySchemaUID	- related entity where survey results to be attached
				{ "rid", rid }				//[Guid]RecordId Record id in EntitySchemaUID
			};

			var secToken = new JwtSecurityToken(header, payload);
			var handler = new JwtSecurityTokenHandler();
						 
			// Token to String so you can use it in your client
			return handler.WriteToken(secToken);
		}

		/// <inheritdoc cref="IJwtToken.ValidateToken(string)"/>
		public IClaims ValidateToken(string token)
		{
			SymmetricSecurityKey securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Secret));
			TokenValidationParameters tvp = new TokenValidationParameters()
			{
				ValidIssuers = new string[] { "Creatio" },
				ValidateIssuer = true,

				ValidAudience = "Creatio",
				ValidateAudience = true,

				ValidateIssuerSigningKey = true,
				ValidateLifetime = false,
				IssuerSigningKey = securityKey
			};

			try
			{
				JwtSecurityTokenHandler handler = new JwtSecurityTokenHandler();
				handler.ValidateToken(token, tvp, out SecurityToken validatedToken);

				JwtSecurityToken jwt = (JwtSecurityToken)validatedToken;
				var id = validatedToken.Id;
				var claims = jwt.Claims;

				List<Claim> lClaim = claims.ToList();
				Guid sid = Guid.Parse(lClaim.Where(c => c.Type == "sid").First().Value);
				Guid cid = Guid.Parse(lClaim.Where(c => c.Type == "cid").First().Value);
				Guid uid = Guid.Parse(lClaim.Where(c => c.Type == "uid").First().Value);
				Guid rid = Guid.Parse(lClaim.Where(c => c.Type == "rid").First().Value);

				return new Claims(sid, cid, uid, rid);
			}
			catch (Exception)
			{

				return null;
			}

		}
	}
}
