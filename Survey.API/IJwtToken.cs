using System;

namespace Survey.API
{
	/// <summary>
	/// Offers basic token operations
	/// </summary>
	public interface IJwtToken
	{
		/// <summary>
		/// Generates JWT token
		/// </summary>
		/// <param name="sid">Survey Id</param>
		/// <param name="cid">Contact Id</param>
		/// <param name="uid">EntitySchema UID</param>
		/// <param name="rid">Record Id</param>
		/// <returns>JWT Token</returns>
		string GenerateToken(Guid sid, Guid cid, Guid uid, Guid rid);

		/// <summary>
		/// Validates <paramref name="token"/>. If success returns a collection of claims, otherwise returns null
		/// </summary>
		/// <param name="token">Token to validate</param>
		/// <returns>Collection of claims or null</returns>
		/// <remarks>
		/// See <see cref="IClaims" /> for details
		/// </remarks>
		IClaims ValidateToken(string token);
	}

	/// <summary>
	/// JwtToen Claims
	/// </summary>
	public interface IClaims
	{
		/// <summary>
		/// Survey Id, unique identifier of the survey
		/// </summary>
		Guid SurveyId { get; }

		/// <summary>
		/// ContactId who is completing the survey
		/// </summary>
		Guid ContactId { get; }

		/// <summary>
		/// EntitySchemaUID for which the survey is related
		/// </summary>
		Guid EntitySchemaUID { get; }

		/// <summary>
		/// RecordId of EntitySchemaUIDs
		/// </summary>
		Guid RecordId { get; }
	}
}
