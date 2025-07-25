import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AntiEtch from "@/components/AntiEtch";

export default function Home() {
  return (
      <Layout>
          <Nav/>
          <Hero/>
          <Services/>
          <AntiEtch/>
      </Layout>
  );
}

