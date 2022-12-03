import { useState } from "react"; 
import Navigation from "../navigation";
import Button from "../button";
import FormInput from "../forminput";
import styled from "styled-components";
import { mediaQueries } from "../../utils/themes/mediaQueries";

const PageContainer = styled.div`
  background: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  overflow-y: scroll;
`;

const PageContent = styled.div`
  .proposal-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    max-width: 70%;
    margin: 1rem auto;
    background: ${({ theme }) => theme.colors.lighterGrey};
    border-radius: 1rem;
    padding: 3rem 5rem;

    ${mediaQueries.phone} {
      max-width: 85%;
      gap: 4rem;
      margin: 8rem auto;
    }
  }

  .btn {
    align-self: center;
    margin-top: 1rem;
  }
`;

const defaultFormFields = {
  name: "",
  txnId1: "",
  txnId2: "",
  reason1: "",
  reason2: "",
};

const ProposalSection = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { name, txnId1, txnId2, reason1, reason2 } = formFields;
  
   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = event.target;

     setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  
  return (
    <PageContainer>
      <Navigation />
      <PageContent>
        <form className="proposal-form" onSubmit={handleSubmit}>
          <FormInput
            label="Name"
            htmlFor="name"
            type="text"
            value={name}
            name="name"
            onChange={handleChange}
          />
          <FormInput
            label="Transaction ID"
            htmlFor="name"
            type="text"
            name="txnId1"
            value={txnId1}
            onChange={handleChange}
          />
          <FormInput
            label="Reason"
            htmlFor="reason"
            type="text"
            name="reason1"
            value={reason1}
            onChange={handleChange}
          />
          <FormInput
            label="Transaction ID"
            htmlFor="name"
            type="text"
            name="txnId2"
            value={txnId2}
            onChange={handleChange}
          />
          <FormInput
            label="Reason"
            htmlFor="reason"
            type="text"
            name="reason2"
            value={reason2}
            onChange={handleChange}
          />
          <Button type="submit" className="btn">
            Submit Proposal
          </Button>
        </form>
      </PageContent>
    </PageContainer>
  );
};

export default ProposalSection;
