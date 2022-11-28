import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";
import { AnimatePresence, motion } from "framer-motion";

export default function Layouts({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="./favicon.png" />
      </Head>
      <Navbar />
      <AnimatePresence>
        <motion.main
          className="grid min-h-screen place-items-center justify-center content-center text-white bg-slate-700 bg-center-center bg-[url('/home_background.svg')] bg-no-repeat bg-cover pt-[70px] mt-[10px] overflow-auto"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
