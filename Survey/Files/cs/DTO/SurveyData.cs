using System.Collections.Generic;
using System.Runtime.Serialization;

namespace Survey.DTO
{
	[DataContract]
	public class SurveyData
	{
		[DataMember(Name = "name")]
		public string Name { get; set; }

		[DataMember(Name = "notes")]
		public string Notes { get; set; }

		[DataMember(Name = "questions")]
		public IEnumerable<SurveyQuestion> Questions { get; set; }
	}
}
