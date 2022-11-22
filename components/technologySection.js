import Image from "next/image";
import PythonIcon from "../public/python_icon.png";
import JavascriptIcon from "../public/javascript_icon.png";
import HTMLIcon from "../public/html_icon.png";
import CSSIcon from "../public/css_icon.png";
import { motion } from "framer-motion";

const technnology = [
  {
    title: "Python",
    image: PythonIcon,
  },
  {
    title: "Javascript",
    image: JavascriptIcon,
  },
  {
    title: "HTML",
    image: HTMLIcon,
  },
  {
    title: "CSS",
    image: CSSIcon,
  },
];

export default function TechnnologySection() {
  return (
    <>
      <motion.div
        className="grid place-items-center content-center bg-slate-600 h-screen w-4/5"
        style={{
          borderRadius: "70% 30% 56% 44% / 32% 68% 32% 68%  ",
        }}
        id="technology"
      >
        <motion.div
          className="p-5 bg-red-600 shadow-md m-5"
          style={{
            borderRadius: "61% 39% 72% 28% / 26% 72% 28% 74% ",
          }}
          transition={{
            duration: 0.8,
          }}
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl font-bold">Technnology</h1>
        </motion.div>
        <motion.div className="flex place-items-center justify-center content-center p-1">
          <ul
            layout
            className="grid gap-2 grid-cols-2 place-items-center justify-center content-center"
          >
            {technnology.map(({ title, image }, index) => {
              return (
                <motion.li
                  key={index}
                  className="p-4 m-1 text-center bg-slate-800 rounded-2xl h-32 w-32 shadow-md"
                  transition={{
                    duration: 0.8,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <h1 className="font-bold">{title}</h1>
                  <Image alt={title} src={image} className="h-16 w-16 m-auto" />
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
