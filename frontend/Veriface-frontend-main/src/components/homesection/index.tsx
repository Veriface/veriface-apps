import styled from "styled-components";
import BackgroundImage from "../../../src/assets/bg.png";
import Navigation from "../navigation";
import HeroSection from "../herosection";


const HomeContainer = styled.div<{ img?: any }>`
  background-image: url(${BackgroundImage.src});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding-bottom: 10rem;
`;

const HomeSection = () => {
  return (
    <HomeContainer>
      <Navigation />
      <HeroSection />
    </HomeContainer>
  );
};

export default HomeSection;
