using Survey.API;
using System;

namespace Survey
{

	/// <summary>
	/// <inheritdoc cref="IClaims"/>
	/// </summary>
	public class Claims : IClaims
	{
		public Claims(Guid sid, Guid cid, Guid uid, Guid rid)
		{
			SurveyId = sid;
			ContactId = cid;
			EntitySchemaUID = uid;
			RecordId = rid;
			//TODO: consider adding ISS, EXP, NBF values
		}

		public Guid SurveyId { get; private set; }
		public Guid ContactId { get; private set; }
		public Guid EntitySchemaUID { get; private set; }
		public Guid RecordId { get; private set; }
	}
}
