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

const variants = {
  onShowLeft: {
    opacity: 0,
    x: -200,
  },
  onShowRight: {
    opacity: 0,
    x: 200,
  },
};

export default function TechnnologySection() {
  return (
    <>
      <motion.div
        className="grid place-items-center content-center bg-slate-600 h-screen w-4/5 lg:w-4/6"
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
          <h1 className="text-3xl md:text-5xl font-bold">Technnology</h1>
        </motion.div>
        <motion.div className="p-1">
          <ul className="grid gap-3 grid-cols-2 place-items-center justify-center content-center">
            {technnology.map(({ title, image }, index) => {
              return (
                <motion.li
                  key={index}
                  className="flex flex-col place-items-center justify-center content-center p-7 md:p-10 text-center bg-slate-800 rounded-2xl h-24 w-24 md:h-40 md:w-40 shadow-md"
                  transition={{
                    duration: 0.8,
                  }}
                  viewport={{ once: true }}
                  variants={variants}
                  initial={index % 2 === 0 ? "onShowLeft" : "onShowRight"}
                  whileInView= {{ opacity: 1, x: 0}}
                >
                  <h1 className="font-bold text-md md:text-3xl m-2">{title}</h1>
                  <Image
                    alt={title}
                    src={image}
                    className="object-cover h-[60px] md:h-28"
                  />
                </motion.li>
              );
            })}
          </ul>
        </motion.div>
      </motion.div>
    </>
  );
}
