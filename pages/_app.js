import Layouts from "../components/layouts";
import "../styles/global.css";
import "animate.css";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }) {
  return (
    <Layouts>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layouts>
  );
}

export default MyApp;
