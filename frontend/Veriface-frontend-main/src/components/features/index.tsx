import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import FeatureCard from "../featurecard";
import { FaWallet } from "react-icons/fa";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const Features = [
  {
    id: 1,
    Icon: FaWallet,
    title: "Implement the Interface",
    content:
      "Implement the Veriface Interface in your contracts to check if an address is blacklisted by our protocol.",
  },
  {
    id: 2,
    Icon: FaWallet,
    title: "Verify Address",
    content:
      "Verify any account's address and get feedback on the address health within the ecosystem.",
  },
  {
    id: 3,
    Icon: FaWallet,
    title: "Propose a Blacklist",
    content:
      "Propose a blacklist of a bad actor. Our blacklist and whitelist processes are transparent and decentralized.",
  },
];

const SectionContainer = styled(Flex)`
  padding: 15rem 10rem;
  gap: 3rem;

  ${mediaQueries.tabport} {
    padding: 15rem 3rem;
  }

  ${mediaQueries.phone} {
    flex-direction: column;
    padding: 10rem;
    gap: 5rem;
  }

  ${mediaQueries.smallerphone} {
    padding: 8rem 3rem;
  }
`;

const FeaturesSection = () => {
  return (
    <SectionContainer id="features">
      {Features.map((item) => (
        <FeatureCard key={item.id} {...item} />
      ))}
    </SectionContainer>
  );
};

export default FeaturesSection;
