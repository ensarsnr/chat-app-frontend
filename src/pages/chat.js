import React from "react";
import "../app/globals.css";
import Persons from "./persons";
import Message from "@/components/message";

function Chat() {
  return (
    <div className="flex h-screen ">
      <div className="grid grid-cols-7 shadow-lg m-auto w-9/12 rounded-md bg-white h-5/6">
        <Persons />
        <Message />
      </div>
    </div>
  );
}

export default Chat;
