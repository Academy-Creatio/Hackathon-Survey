using Survey.API;
using Terrasoft.Core;
using Terrasoft.Core.Factories;

namespace Survey
{
	[DefaultBinding(typeof(IConfToSurvey))]
	public class ConfToSurvey : IConfToSurvey
	{
		public void PostMessage(UserConnection userConnection, string senderName, string messageText)
		{
			Terrasoft.Configuration.MsgChannelUtilities.PostMessage(userConnection, senderName, messageText);
		}

		public void PostMessageToAll(string senderName, string messageText)
		{
			Terrasoft.Configuration.MsgChannelUtilities.PostMessageToAll(senderName, messageText);
		}
	}
} 