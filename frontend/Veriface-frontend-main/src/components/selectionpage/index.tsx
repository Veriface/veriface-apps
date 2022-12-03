import styled from "styled-components";
import Navigation from "../navigation";
import SelectionCard from "../selectioncard";
import { MdOutlineCreateNewFolder, MdPersonSearch } from "react-icons/md";
import { mediaQueries } from "../../utils/themes/mediaQueries";


const PageContainer = styled.div`
  background: #0b0b0f;
  color: white;
  height: 100vh;
  overflow-y: scroll;

  .cards {
    display: flex;
    gap: 10rem;
    padding: 8rem 20rem;

    ${mediaQueries.tabport} {
      padding: 8rem;
    }

    ${mediaQueries.phone} {
      padding: 8rem 5rem;
      gap: 4rem;
    }

    ${mediaQueries.smallerphone} {
      flex-direction: column;
    }
  }
`;
const SelectionPage = () => {
  return (
    <PageContainer>
      <Navigation />
      <div className="cards">
        <SelectionCard
          Icon={MdOutlineCreateNewFolder}
          btnText="Create Proposal"
          content="Get rid of bad actors in the crypto ecosystem by submitting a proposal to get them blacklisted."
          href="https://veriface-alert.netlify.app/"
        />
        <SelectionCard
          Icon={MdPersonSearch}
          btnText="Search Address"
          content=" Input any account's address and get feedback on the address health within the ecosystem."
          href="/check"
        />
      </div>
    </PageContainer>
  );
};

export default SelectionPage;
