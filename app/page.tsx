import Hero from "@/components/home/Hero";
import WorkPreview from "@/components/home/WorkPreview";
import WhyChoose from "@/components/home/WhyChoose";
import Testimonials from "@/components/home/Testimonials";
import FaqSection from "@/components/home/FaqSection";
import SitesMarquee from "@/components/home/SitesMarquee";
import ContactBlock from "@/components/ContactBlock";

export default function Home() {
  return (
    <main>
      <Hero />
      <WorkPreview />
      <WhyChoose />
      <Testimonials />
      <FaqSection />
      <SitesMarquee />
      <ContactBlock />
    </main>
  );
}
