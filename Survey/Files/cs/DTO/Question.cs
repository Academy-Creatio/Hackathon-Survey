using System;
using System.Runtime.Serialization;

namespace Survey.DTO
{

	[DataContract]
	public class Question
	{
		[DataMember(Name = "longQuestion")]
		public string LongQuestion { get; set; }

		[DataMember(Name = "isCommentRequired")]
		public bool IsCommentRequired { get; set; }

		[DataMember(Name = "isScoreRequired")]
		public bool IsScoreRequired { get; set; }
		
		[DataMember(Name = "questionId")]
		public Guid QuestionId { get; set; }

		[DataMember(Name = "placeHolder")]
		public string PlaceHolder { get; set; }
	}
}