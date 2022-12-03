import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Link from "next/link";
import BackgroundImage from "../../../src/assets/bg-img.png";
import { Button as ConnectButton } from "../../utils/button/button";
import Typography from "../../utils/typography";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const AboutSectionContainer = styled(Flex)<{ img?: any }>`
  background-image: url(${BackgroundImage.src});
  background-size: contain;
  background-position: right;
  background-repeat: no-repeat;
  padding: 8rem 20rem 12rem;
  flex-direction: column;

  ${mediaQueries.tabport} {
    padding: 8rem 10rem 12rem;
  }

  ${mediaQueries.phone} {
    padding: 8rem 5rem 12rem;
  }

  ${mediaQueries.smallerphone} {
    padding: 15rem 2.5rem;
  }

  .title {
    text-align: center;
  }

  .subtitle {
    color: #898ca9;
    text-align: center;
    margin-top: 3rem;
  }
`;

const Button = styled(ConnectButton)`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 100%;
  color: #ffffff;
  margin: auto;
  margin-top: 3rem;
  background: linear-gradient(225deg, #18c8ff 14.89%, #933ffe 85.85%);
`;

const AboutSection = () => {
  return (
    <AboutSectionContainer id="about">
      <Typography font="h2" as="h2" className="title">
        A truly decentralized DAO
      </Typography>
      <Typography font="bodyText" as="p" className="subtitle">
        Veriface is run by a DAO, so anyone can become a part of us once
        they are digitally verified. Our blacklist and whitelist processes are transparent and can be
        adequately relied on by third-party contracts and end-users.
      </Typography>
      <Link href="/select-option">
        <Button>Launch App</Button>
      </Link>
    </AboutSectionContainer>
  );
}

export default AboutSection