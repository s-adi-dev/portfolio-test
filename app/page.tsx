import { About, Footer, Header, Hero, Skills } from "@/components/sections";
import Experience from "@/components/sections/experience";
import FooterMarquee from "@/components/sections/footer-marquee";
import Project from "@/components/sections/projects";
import Socials from "@/components/sections/socials";
import { GridLines } from "@/components/ui/grid-utils";
import { PreLoader } from "@/components/ui/preloader";
import SmoothScrolling from "@/components/ui/smoothScrolling";

export default function Main() {
  return (
    <>
      <PreLoader />
      <SmoothScrolling>
        <Header />
        <main className="w-full container-main relative">
          <GridLines />
          <Hero />
          <About />
          <Skills />
          <Project />
          <Experience />
          <Socials />
        </main>
        <FooterMarquee />
        <Footer />
      </SmoothScrolling>
    </>
  );
}
