import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

export default function Layouts({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <motion.main
          className="grid min-h-screen place-items-center content-center text-white bg-slate-700 bg-center-center bg-[url('/home_background.svg')] bg-no-repeat bg-cover pt-[70px] mt-[10px]"
          variants={variants}
          initial="hidden"
          animate="enter" 
          exit="exit"
          transition={{ type: "linear" }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
