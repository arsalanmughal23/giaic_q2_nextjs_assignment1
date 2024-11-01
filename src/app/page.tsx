import { Fragment } from "react";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./services/page";
import AboutPage from "./about/page";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <AboutPage/>
      <ServicesPage/>
    </Fragment>
  );
}
