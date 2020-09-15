import { Hero } from "../components/Hero";
import { Nav } from "../components/Nav";

function AboutMe() {
  console.log(process.env.NEXT_PUBLIC_MAPS_KEY);
  return (
    <>
      <Nav />
      <Hero h1="About Patrick McLennan" />
    </>
  );
}

export default AboutMe;
