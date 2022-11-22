import Image from "next/image";
import myImage from "../public/logo.png";
import { motion } from "framer-motion";

export default function PresentationSection() {
  return (
    <motion.header
      className="grid gap-5 place-items-center content-center h-screen my-6 lg:mt-32 lg:mb-8"
      id="presentation"
    >
      <motion.div
        className="flex flex-col place-items-center justify-center content-center text-white p-10 bg-slate-800 rounded-2xl shadow-md"
        style={{
          borderRadius: "76% 31% 29% 35% / 66% 71% 48% 80% ",
        }}
        transition={{
          duration: 0.8,
        }}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-center self-center font-bold text-4xl lg:text-6xl m-1">
          Hello world!
        </h1>
        <h2 className="text-center self-center break-words text-md md:text-lg p-1">
          I&apos;m Douglas. Welcome to my website
        </h2>
      </motion.div>
      <motion.div
        className="lg:mx-4 bg-slate-600 grid content-center place-items-center shadow-lg p-1"
        style={{
          borderRadius: "76% 31% 29% 35% / 66% 71% 48% 80% ",
        }}
        transition={{
          duration: 0.8,
        }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
      >
        <Image
          alt="my_photo"
          src={myImage}
          className="w-[30%] shadow-sm"
          style={{
            borderRadius: "56% 44% 70% 30% / 40% 73% 27% 60% ",
          }}
        />
      </motion.div>
    </motion.header>
  );
}
