using System.Runtime.Serialization;

namespace Survey.DTO
{
	[DataContract]
	public class SurveyQuestion
	{
		[DataMember(Name = "name")]
		public string Name { get; set; }

		[DataMember(Name = "order")]
		public int Order { get; set; }

		[DataMember(Name = "question")]
		public Question Question{ get; set; }
	}
}
