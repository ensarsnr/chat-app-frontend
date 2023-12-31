"use client";
import services from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Register() {
  //hooks
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await services.register(
      name,
      surname,
      username,
      email,
      pass
    );
    console.log("Response register:", response);
    router.push(
      `/chat?username=${response.data.user.username}&userId=${response.data.userId.userId}`
    );
    setName("");
    setSurname("");
    setUsername("");
    setEmail("");
    setPass("");
  };

  return (
    <div className="flex text-black col-span-4  flex-col justify-evenly   bg-white rounded-r-lg">
      <h1 className=" text-center font-bold text-transparent  p-10 text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Sign Up
      </h1>
      <form onSubmit={handleSubmit} className="w-3/4 m-auto">
        <div className="justify-between mb-4 relative z-0 w-full group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            htmlFor="floating_email"
          >
            Name
          </label>
        </div>
        <div className="justify-between mb-4 relative z-0 w-full group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6  scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Surname
          </label>
        </div>
        <div className="mb-4 relative z-0 w-full group">
          <input
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Username
          </label>
        </div>
        <div className="mb-4 relative z-0 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="mb-4 relative z-0 w-full group">
          <input
            type="password"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            required
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="mt-2 text-center">
          <button
            type="submit"
            className="font-extrabold hover:duration-500 duration-500 py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white w-2/3 "
          >
            Sign Up
          </button>
        </div>
        <div className="text-center mb-4">
          if you have an account
          <Link className="text-red-500" href="/login">
            {" "}
            click here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Register;
