import styled from "styled-components";
import Typography from "../../utils/typography";
import Button from "../button";
import Flex from "../../utils/flex/flex";
import Link from "next/link";
import { useRouter } from "next/router";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const NavContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 13rem;

  ${mediaQueries.phone} {
    padding: 2.5rem 6rem;
  }

  ${mediaQueries.smallerphone} {
    padding: 3rem;
  }

  .logo {
    font-family: "Anurati";
    font-size: 3rem;

    ${mediaQueries.smallerphone} {
      font-size: 2.5rem;
    }
  }
`;

const Navigation = () => {
  const router = useRouter();
  return (
    <NavContainer>
      <Typography font="h3" as="h3" className="logo">
        VERIFACE
      </Typography>
      {router.asPath === "/" && (
        <Link href="/select-option">
          <Button>Launch App</Button>
        </Link>
      )}
    </NavContainer>
  );
};

export default Navigation;
