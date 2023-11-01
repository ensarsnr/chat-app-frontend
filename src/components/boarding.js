import Image from "next/image";
import chatpng from "../assets/images/chat.png";

function Boarding({ text }) {
  return (
    <div className="items-center rounded-l-lg flex flex-col justify-around col-span-3 bg-gradient-to-b from-teal-500 via-violet-700 to-violet-900">
      <div>
        <Image alt="chat" src={chatpng} width={150} height={150} />
        <h1 className="text-3xl font-extrabold">ChatApp</h1>
      </div>
      <div>
        <h2 className="font-medium">{text}</h2>
      </div>
      <div>
        <h1 className="text-3xl font-extrabold">Have Fun...</h1>
      </div>
    </div>
  );
}

export default Boarding;
