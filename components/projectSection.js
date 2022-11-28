import Image from "next/image";
import { motion } from "framer-motion";
import Placeholder from "../public/400x400.svg";

export default function ProjectSection({ project }) {
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

        <motion.div className="grid grid-cols-2 md:grid-cols-1 place-items-center justify-center content-center">
          {project.project_listing ? (
            project.project_listing.map(
              ({ name, url, Image: image, description }, index) => {
                return (
                  <motion.article
                    className="p-3"
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex flex-col bg-slate-800 overflow-hidden shadow-md rounded-md">
                      <Image
                        src={image ? image : Placeholder}
                        alt={name}
                        height={500}
                        width={500}
                      />

                      <h2 className="m-1 text-2xl font-bold">{name}</h2>
                      <p className="text-md text-justify p-2 border-b-2 border-red-600">
                        {description
                          ? description
                          : "Description not available"}
                      </p>
                      <div className="flex m-1">
                        <a
                          href={url}
                          className="text-center m-2 p-1 bg-red-600 rounded-lg hover:bg-red-500"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <span>Go to the project</span>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                );
              }
            )
          ) : (
            <div>Error</div>
          )}
        </motion.div>
      </div>
    </>
  );
}
