import Link from "next/link";
import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import Typography from "../../utils/typography";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const FooterSectionContainer = styled.div`
  color: grey;
  margin: 5rem 0;
`;

const FooterTopSection = styled(Flex)`
  justify-content: space-between;
  padding: 0 3.5%;

  .col-1 {
    flex-direction: column;
    width: 50%;
    align-items: flex-start;
    gap: 2rem;

    ${mediaQueries.phone} {
      width: 70%;
      gap: 1rem;
    }
  }

  .col-2 {
    gap: 3rem;
    ${mediaQueries.phone} {
      flex-direction: column;
      align-items: flex-end;
    }
  }
`;

const FooterBottomSection = styled(Flex)`
  border-top: 0.2rem solid grey;
  max-width: 93%;
  margin: 5rem auto;
  padding: 3rem 1.5rem;
  justify-content: space-between;
`;

const Footer = () => {
  return (
    <FooterSectionContainer>
      <FooterTopSection>
        <Flex className="col-1">
          <Typography font="h3" as="h3">
            VERIFACE
          </Typography>
          <Typography font="bodyText" as="h3">
            Veriface, the world’s leading crypto blacklist app, is a
            verification interface you can implement into your smart contract to
            limit interactions with bad actors.
          </Typography>
        </Flex>
        <Flex className="col-2">
          <Link href="#features">
            <Typography font="bodyText" as="h3">
              Features
            </Typography>
          </Link>
          <Link href="https://veriface.gitbook.io/veriface/" target="_blank">
            <Typography font="bodyText" as="h3">
              Documentation
            </Typography>
          </Link>
        </Flex>
      </FooterTopSection>
      <FooterBottomSection>
        <AiOutlineCopyrightCircle size="2rem" />
        <Typography font="bodyText" as="h3">
          2022 Veriface
        </Typography>
        <CiTwitter size="2rem" />
      </FooterBottomSection>
    </FooterSectionContainer>
  );
};

export default Footer;
