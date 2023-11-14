import React, { useState } from "react";
import "../app/globals.css";
import Persons from "../components/persons";
import Message from "@/components/message";
import { useRouter } from "next/router";

function Chat() {
  // router'dan gelen yani login veya register sayfasından gelen username bilgisini bu şekilde alıyorum
  const router = useRouter();
  const { username, userId } = router.query;
  const [selectedUser, setSelectedUser] = useState("");

  const personClick = (userId) => {
    setSelectedUser(userId);
  };

  return (
    <div className="flex h-screen ">
      <div className="grid grid-cols-7 shadow-lg m-auto w-9/12 rounded-md bg-white h-5/6">
        <Persons
          onPersonClick={personClick}
          userId={userId}
          username={username}
        />
        <Message selectedUser={selectedUser} />
      </div>
    </div>
  );
}

export default Chat;
