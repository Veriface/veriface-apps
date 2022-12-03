import styled from "styled-components";
import Link from "next/link";
import Typography from "../../utils/typography";
import Button from "../button";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const HeroSectionContainer = styled.div`
  padding: 8rem 5rem;

  ${mediaQueries.phone} {
    padding: 15rem 4rem;
  }

  ${mediaQueries.smallerphone} {
    padding: 15rem 2rem;
  }

  .title {
    text-align: center;
    background: linear-gradient(
      90deg,
      #ff75c3 0%,
      #ffa647 20%,
      #ffe83f 40%,
      #9fff5b 60%,
      #70e2ff 80%,
      #cd93ff 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  .subtext {
    margin: 1.6rem auto 0rem;
    color: #898ca9;
    text-align: center;
    width: 40%;

    ${mediaQueries.tabport} {
      width: 50%;
    }

    ${mediaQueries.phone} {
      margin-top: 3rem;
    }

    ${mediaQueries.smallerphone} {
      width: 60%;
      margin: 3rem auto 0rem;
    }
  }

  .btn {
    margin: auto;
    margin-top: 3rem;
  }

  ${mediaQueries.phone} {
    margin-top: 4rem;
    padding: 2rem;
  }
`;

const HeroSection = () => {
  return (
    <HeroSectionContainer>
      <Typography font="title" as="h1" className="title">
        We make web3 <br />
        more secure
      </Typography>
      <Typography font="bodyText" as="p" className="subtext">
        Veriface is a verification interface that helps you limit interactions with bad actors
        in your smart contract.
      </Typography>
      <Link href="/select-option">
        <Button className="btn">Launch App</Button>
      </Link>
    </HeroSectionContainer>
  );
};

export default HeroSection;
