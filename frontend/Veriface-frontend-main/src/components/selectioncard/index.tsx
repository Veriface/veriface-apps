import styled from "styled-components";
import Link from "next/link";
import Button from "../button";
import Typography from "../../utils/typography";
import { SelectCardType } from "../../types/types";

const CardContainer = styled.div`
  background: ${({ theme }) => theme.colors.lighterGrey};
  border-radius: 2.5rem;
  padding: 5rem 2.5rem;
  display: grid;
  place-items: center;
  gap: 3rem;
  align-self: stretch;

  .title {
    text-align: center;
  }

  .btn {
    background: none;
    border: 1px solid #b982ff;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

const SelectionCard = ({ Icon, btnText, content, href }: SelectCardType) => {
  return (
    <CardContainer>
      <Icon size="8rem" color="#B982FF" />
      <Typography font="bodyText" as="p" className="title">
        {content}
      </Typography>
      <Link href={href}>
        <Button className="btn">{btnText}</Button>
      </Link>
    </CardContainer>
  );
};

export default SelectionCard;
