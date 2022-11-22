import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Placeholder from "../public/400x400.svg";

const project = [
  {
    title: "Chat in realtime",
    image: Placeholder,
    url: "https://react-chat-socketio-dosidev.herokuapp.com/",
  },
  {
    title: "Other project with other tech",
    image: Placeholder,
    url: "https://www.w3schools.com/",
  },
];

export default function ProjectSection() {
  return (
    <>
      <div
        className="grid min-h-screen place-items-center content-center text-white my-20"
        id="project"
      >
        <motion.div
          className="p-4 bg-red-600 rounded-lg shadow-md"
          style={{
            borderRadius: "39% 61% 31% 69% / 68% 31% 69% 32% ",
          }}
          transition={{ duration: 0.8 }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold">Project</h1>
        </motion.div>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 place-items-center justify-center content-center">
          {project.map(({ title, image, url, description }, index) => {
            return (
              <motion.article
                className="p-3"
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col bg-slate-800 overflow-hidden shadow-md rounded-md">
                  <header className="p-3">
                    <Image src={image} alt={title} />
                    <h2 className="my-1 text-2xl font-bold">{title}</h2>
                  </header>
                    <p className="text-md text-justify p-2 border-b-2 border-red-600">
                      {description ? description : "Description not available"}
                    </p>
                  <div className="flex  m-1">

                    <a
                      href={url}
                      className="text-center m-2 p-1 bg-red-600 rounded-lg hover:bg-red-500"
                    >
                      <span>Go to the project</span>
                    </a>
                    <Link
                      href=""
                      className="text-center m-2 p-1 bg-blue-900 rounded-lg hover:bg-blue-800"
                    >
                      More Information
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </>
  );
}
