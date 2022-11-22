/* eslint-disable @next/next/no-html-link-for-pages */
import { useState } from "react";
import { motion } from "framer-motion";
import NavbarActiveLink from "./navbarActiveLink";

const variants = {
  open: {
    y: -48,
  },
  close: {
    y: 0,
  },
};

export default function Navbar() {
  const [isShow, setShow] = useState(true);
  const handleShow = () => {
    setShow(!isShow);
  };

  return (
    <motion.nav
      className="flex flex-wrap w-screen items-center justify-center bg-slate-800 text-white rounded-b-lg fixed mt-[-10px]"
      variants={variants}
      transition={{
        duration: 0.4,
      }}
      animate={isShow ? "open" : "close"}
    >
      <ol className="flex flex-row items-center justify-center gap-2 my-1">
        <NavbarActiveLink href="/#presentation">
          <p>Home</p>
        </NavbarActiveLink>
        <NavbarActiveLink href="/#technology">
          <p>Technology</p>
        </NavbarActiveLink>
        <NavbarActiveLink href="/#project">
          <p>Project</p>
        </NavbarActiveLink>
      </ol>
      <button
        className="w-full flex justify-center content-center"
        onClick={handleShow}
      >
        <motion.div
          transition={{ duration: 0.4 }}
          className="navbar-button bg-red-600 before:bg-slate-200 before:hover:bg-white"
          whileHover={{
            className: "bg-red-500",
          }}
        />
      </button>
    </motion.nav>
  );
}
