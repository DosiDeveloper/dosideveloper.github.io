import Head from "next/head";
import PresentationSection from "../components/presentationSection";
import TechnnologySection from "../components/technologySection";
import ProjectSection from "../components/projectSection";
import supabase from "../utils/init_supabase";

export default function Home({ project }) {
  return (
    <>
      <Head>
        <title>Home page</title>
      </Head>
      <PresentationSection />
      <TechnnologySection />
      <ProjectSection project={project}/>
    </>
  );
}

export async function getStaticProps() {
  let { data: project_listing, error } = await supabase
    .from("project")
    .select("*");

  return {
    props: {
      project: { project_listing, error },
    },
  };
}
