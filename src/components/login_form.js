import services from "@/services/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function LoginForm() {
  // hooks
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const router = useRouter();

  // functions
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await services.login(email, pass);
    console.log(response);
    if (response && response.data) {
      console.log(response.data.message);
      console.log("Username:", response.data.user.userId);
      router.push({
        pathname: "/chat",
        query: {
          username: response.data.user.username,
          userId: response.data.userId.userId,
        },
      });
    } else {
      console.error("Response or response.data is undefined.");
    }
    setEmail("");
    setPass("");
  };

  return (
    <div className="flex text-black col-span-4  flex-col justify-evenly   bg-white rounded-r-lg">
      <h1 className=" text-center font-bold text-transparent  p-10 text-6xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Sign In
      </h1>
      <form onSubmit={handleSubmit} className="w-3/4 m-auto">
        <div className="mb-10 relative z-0 w-full group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="mb-10 relative z-0 w-full group">
          <input
            type="password"
            name="floating_email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-400 dark:focus:border-pink-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-pink-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="mt-10 text-center">
          <button
            type="submit"
            className="font-extrabold hover:duration-500 duration-500 py-2 px-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white w-2/3 "
          >
            Sign In
          </button>
        </div>
        <div className="text-center mt-5">
          If you do not have an account
          <Link className="text-red-500" href="/">
            {" "}
            click here
          </Link>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
