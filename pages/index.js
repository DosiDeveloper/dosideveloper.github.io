import Head from "next/head";
import PresentationSection from "../components/presentationSection";
import TechnnologySection from "../components/technologySection";
import ProjectSection from "../components/projectSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <PresentationSection />
      <TechnnologySection />
      <ProjectSection />
    </>
  );
}
