import styled from "styled-components";
import AboutSection from "../aboutsection";
import FeaturesSection from "../features";
import Footer from "../footer";
import HomeSection from "../homesection";

const HomeContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const LandingSection = () => {
  return (
    <HomeContainer>
      <HomeSection />
      <FeaturesSection />
      <AboutSection />
      <Footer/>
    </HomeContainer>
  );
};

export default LandingSection;
