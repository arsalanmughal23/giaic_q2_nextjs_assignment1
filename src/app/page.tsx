import { Fragment } from "react";
import HeroSection from "./components/HeroSection";
import ServicesPage from "./services/page";

export default function HomePage() {
  return (
    <Fragment>
      <HeroSection />
      <ServicesPage/>
    </Fragment>
  );
}
