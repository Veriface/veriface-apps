import Link from "next/link";
import styled from "styled-components";
import Typography from "../../utils/typography";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FeatureCardType } from "../../types/types";

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.lighterGrey};
  border-radius: 2.5rem;
  padding: 3rem 2rem;
  display: grid;
  place-items: center;
  gap: 2rem;
  align-self: stretch;

  .title {
    color: #fff;
    text-align: center;
  }

  .subtitle {
    color: #898ca9;
    text-align: center;
  }

  .linkText {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const FeatureCard = ({ Icon, content, title }: FeatureCardType) => {
  return (
    <CardContainer>
      <Icon size="5rem" color="#B982FF" />
      <Typography font="h3" as="p" className="title">
        {title}
      </Typography>
      <Typography font="bodyText" as="p" className="subtitle">
        {content}
      </Typography>
      <Link href="/" className="linkText">
        <Typography font="bodyText" as="p">
          Get Started
        </Typography>
        <AiOutlineArrowRight size="2rem" />
      </Link>
    </CardContainer>
  );
};

export default FeatureCard;
