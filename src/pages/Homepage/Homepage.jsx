import React from "react";
import Hero from "./Hero";
import HeroCard from "./HeroCard";
import Numbers from "./Numbers";
import Mission from "./Mission";
import { homepage } from "../../constants";
import Card from "./Card";
import ContactCard from "./ContactCard";
import { GiCardDiscard } from "react-icons/gi";
import GaisCard from "./GaisCard";

const Homepage = () => {
  return (
    <>
      <Hero/>
      <HeroCard/>
      <Numbers/>
      <Mission/>
      <Card img={homepage.card1} lists={homepage.card1list} order={""}/>
      <Card img={homepage.card2} lists={homepage.card2list} order={"2"}/>
      <Card img={homepage.card3} lists={homepage.card3list} order={""}/>
      <ContactCard/>
      <GaisCard/>
    </>
  );
};

export default Homepage;
