using Terrasoft.Core;

namespace Survey.API
{
	/// <summary>
	/// Exposes Terrasoft Configuration Features through Class Factory
	/// </summary>
	public interface IConfToSurvey
	{
		/// <summary>
		/// Post web socket message to a users
		/// </summary>
		/// <param name="userConnection">UserConnection of a user to whom the message will be sent</param>
		/// <param name="senderName">Sender Name</param>
		/// <param name="messageText">Message in JSON format</param>
		/// <remarks>
		/// To subscribe to a websocket message see <see href="https://academy.creatio.com/docs/developer/front-end_development/websocket_message_sending_mechanism/the_client-side_websocket_message_handler#reference-1757">academy article</see>
		/// </remarks>
		void PostMessage(UserConnection userConnection, string senderName, string messageText);

		/// <summary>
		/// Post web socket message to all users
		/// </summary>
		/// <param name="senderName">Sender Name</param>
		/// <param name="messageText">Message in JSON format</param>
		/// <remarks>
		/// To subscribe to a websocket message see <see href="https://academy.creatio.com/docs/developer/front-end_development/websocket_message_sending_mechanism/the_client-side_websocket_message_handler#reference-1757">academy article</see>
		/// </remarks>
		void PostMessageToAll(string senderName, string messageText);
	}
}
