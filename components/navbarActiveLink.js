import { motion } from "framer-motion";

export default function NavbarActiveLink({ children, href }) {

  const handleClick = (e) => {
    e.preventDefault();
    window.location.href = href;
  };

  return (
    <motion.li
      className="p-2"
      animate={{
        duration: 0.4,
      }}
      whileHover={{
        backgroundColor: "#DC2626",
        borderRadius: "0.5rem",
      }}
      whileTap={{
        backgroundColor: "#DC2626",
        scale: [0.8, 0.6, 0.4, 0.2],
        rotate: [0, 70, 0, 0],
        borderRadius: ["20%", "20%", "50%", "50%", "20%"],
      }}
    >
      <a onClick={handleClick} className="font-bold hover:cursor-pointer">
        {children}
      </a>
    </motion.li>
  );
}
