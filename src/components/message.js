import React, { useEffect, useRef, useState } from "react";
import { IoSend } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import userServices from "@/services/user";
import Avatar from "./avatar";
import chatServices from "@/services/chat";
import NoMessage from "./no_message";
import useWindowSize from "@/hooks/useWindowSize";
import Start from "./start";

function Message({ openSettings, userId, selectedUser }) {
  //Hooks
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [pic, setPic] = useState("");
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [userConversations, setUserConversations] = useState([]);
  const [open, setOpen] = useState(false);
  const { width, height } = useWindowSize();
  const messagesContainerRef = useRef(null);

  const maxContainerHeight = height >= 959 ? 670 : 400;

  const containerStyle = {
    overflowY: "auto",
    maxHeight: `${maxContainerHeight}px`,
  };

  // Functions
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop =
        messagesContainerRef.current.scrollHeight;
    }
  };

  const getUser = async (userId) => {
    try {
      const response = await userServices.getName(userId);
      setName(response.data.name);
      setSurname(response.data.surname);
      setPic(response.data.pic);
      setUserConversations(response.data.conversation);
      if (response.data.conversation.length > 0) {
        setOpen(true);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const sendMessage = async (e) => {
    e.preventDefault();

    try {
      console.log("Sending message...");
      const selectedConversationId = userConversations[0];
      const response = await chatServices.sendMessage(selectedConversationId, {
        sender: userId,
        content: newMessage,
      });
      setNewMessage("");
      getMessage(userConversations);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  const getMessage = async (conversationId) => {
    try {
      const response = await chatServices.getConversationMessages(
        conversationId
      );
      setMessages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser(selectedUser);
  }, [selectedUser]);

  useEffect(() => {
    getMessage(userConversations);
  }, [userConversations]);

  useEffect(() => {
    scrollToBottom();
  }, [messagesContainerRef, messages]);

  return (
    <div className="col-span-5 bg-gray-100 rounded-r-lg text-black py-3 px-4 relative">
      {open && (
        <div>
          <div className="flex justify-between w-full bg-slate-200 rounded-lg h-14">
            <div className="ml-10 flex justify-center items-center">
              <Avatar pic={pic} />
              <span className="ml-2">
                {name} {surname}
              </span>
            </div>
            <div className="mr-10 flex justify-center items-center">
              <div className="mr-5 rounded-full bg-slate-300 p-2">
                <FaPhoneAlt size={13} color="blue" />
              </div>
              <div className="rounded-full bg-slate-300 p-2">
                <BsThreeDots color="blue" />
              </div>
            </div>
          </div>
          <div ref={messagesContainerRef} style={containerStyle}>
            {messages.length > 0 ? (
              messages.map((message) => (
                <div
                  key={message._id}
                  className={
                    message.sender === userId
                      ? "m-3 flex justify-end items-center"
                      : "m-3 flex justify-start items-center"
                  }
                >
                  {message.sender !== userId && (
                    <div className="rounded-full  h-10 w-10 mr-2">
                      <img
                        className="rounded-full w-full h-full object-cover"
                        src={pic}
                      />
                    </div>
                  )}
                  <div
                    className={
                      message.sender === userId
                        ? "shadow-md bg-blue-600 text-white p-3 rounded-full"
                        : "shadow-md bg-white p-3 rounded-full"
                    }
                  >
                    <span>{message.content}</span>
                  </div>
                </div>
              ))
            ) : (
              <NoMessage />
            )}
          </div>
          <form
            onSubmit={sendMessage}
            className="absolute inset-x-0 bottom-0 p-3"
          >
            <input
              type="text"
              value={newMessage}
              onChange={handleInputChange}
              className="shadow-xl block w-full p-3 ps-10 text-sm text-gray-900 border border-white rounded-2xl bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-white dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Type a message"
              required
            />
            <span
              type="submit"
              aria-label="smile"
              className="p-2 rounded-full bg-blue-600 cursor-pointer absolute right-7 bottom-5"
            >
              <IoSend color="white" />
            </span>
          </form>
        </div>
      )}
      {open === false && <Start openSettings={openSettings} />}
    </div>
  );
}

export default Message;
