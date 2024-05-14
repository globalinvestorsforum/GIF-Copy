import React from "react";
import Hero from "./Hero";
import HeroCard from "./HeroCard";
import Numbers from "./Numbers";
import Mission from "./Mission";
import { homepage } from "../../constants";
import Card from "./Card";
import ContactCard from "./ContactCard";
import GaisCard from "./GaisCard";
import OddCard from "./OddCard";

const Homepage = () => {
  return (
    <>
      <Hero />
      <HeroCard />
      <Numbers />
      <Mission />
      <Card order={"none"} img={homepage.card1} lists={homepage.card1list} />
      <OddCard  img={homepage.card2} lists={homepage.card2list} />
      <Card order={"none"} img={homepage.card3} lists={homepage.card3list} />
      <ContactCard />
      <GaisCard />
    </>
  );
};

export default Homepage;
