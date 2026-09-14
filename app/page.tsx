import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { ResearchInterests } from "@/components/ResearchInterests";
import { Certificates } from "@/components/Certificates";
import { Achievements } from "@/components/Achievements";
import { Profiles } from "@/components/Profiles";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { publicFileExists } from "@/lib/files";
import { siteConfig } from "@/config/site";

export default function Home() {
  // Checked at render time so a missing photo or CV never breaks the
  // page — Hero renders an appropriate fallback instead.
  const hasProfileImage = publicFileExists(siteConfig.profileImage);
  const hasCV = publicFileExists(siteConfig.cvPath);

  return (
    <>
      <Navbar />
      <main id="main">
        <Hero hasProfileImage={hasProfileImage} hasCV={hasCV} />
        <About />
        <Education />
        <Skills />
        <Experience />
        <Projects />
        <ResearchInterests />
        <Certificates />
        <Achievements />
        <Profiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
