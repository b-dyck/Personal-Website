import Intro from "@/components/intro";
import Skills from "@/components/skills";
import About from "@/components/about";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Skills />
    </main>
  );
}
