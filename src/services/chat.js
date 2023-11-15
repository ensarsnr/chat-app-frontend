import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001",
});

const sendMessage = async (conversationId, sender, content) => {
  try {
    const response = await axios.post(`/chat/conversations/${conversationId}`, {
      sender,
      content,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getConversationMessages = async (conversationId) => {
  try {
    const response = await api.get(`/chat/get-conversations/${conversationId}`);
    return response;
  } catch (error) {
    console.error("Error fetching messages:", error);
  }
};

const chatServices = { getConversationMessages, sendMessage };
export default chatServices;
