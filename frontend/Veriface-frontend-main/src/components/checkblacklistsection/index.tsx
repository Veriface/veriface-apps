import { useState } from "react";
import styled from "styled-components";
import Flex from "../../utils/flex/flex";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typography from "../../utils/typography";
import Navigation from "../navigation";
import { BsSearch } from "react-icons/bs";
import { mediaQueries } from "../../utils/themes/mediaQueries";
import connectContract from "../../connectContract";

const PageContainer = styled.div`
  background: #0b0b0f;
  color: ${({ theme }) => theme.colors.white};
  height: 100vh;
  overflow-y: scroll;
`;

const PageContent = styled.div`
  padding: 3rem 20%;

  ${mediaQueries.tabport} {
    padding: 3rem 10%;
  }

  .title {
    color: ${({ theme }) => theme.colors.purple};
  }

  .col-1 {
    flex-direction: column;
    gap: 3rem;
    margin-bottom: 3rem;
  }

  .col-1 > * {
    text-align: center;
  }

  .searchFieldWrapper {
    position: relative;
    margin: 0 auto;
    max-width: 80rem;
    width: 100%;
  }

  .searchInput {
    background: none;
    border: 1px solid #b982ff;
    border-radius: 5px;
    width: 100%;
    padding: 1.6rem;
    padding-right: 5.8rem;
    height: 100%;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
  }

  .searchInput::placeholder {
    color: ${({ theme }) => theme.colors.grey};
  }

  .searchIcon {
    position: absolute;
    right: 1.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  .blacklist-card {
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    color: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 3rem 0;
    max-width: 80rem;
    margin-top: 3rem;

    ${mediaQueries.phone} {
      padding: 5rem 0;
    }
  }

  .loader {
    background: ${({ theme }) => theme.colors.purple};
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 0;
    max-width: 80rem;
    margin-top: 3rem;

    & > div {
      width: 16px;
      height: 16px;
      margin: 3px 6px;
      border-radius: 50%;
      background-color: #fff;
      opacity: 1;
      animation: bouncing-loader 0.6s infinite alternate;
    }

    @keyframes bouncing-loader {
      to {
        opacity: 0.1;
        transform: translateY(-16px);
      }
    }

    .bouncing-loader > div:nth-child(2) {
      animation-delay: 0.2s;
    }

    .bouncing-loader > div:nth-child(3) {
      animation-delay: 0.4s;
    }
  }

  .blacklistText {
    color: red;
  }

  .whitelistText {
    color: #56f156;
  }
`;

const CheckBlackListPage = () => {
  const [address, setAddress] = useState("");
  const [status, setStatus] = useState(false);
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(event.target.value);
    setChecked(false);
    setSearchValue(event.target.value);
  };

  const blacklistContract = connectContract();

  const handleCheck = async (e: any) => {
    e.preventDefault();
    setSearchValue("");
    setLoading(true);
    try {
      if (blacklistContract) {
        const result = await blacklistContract.retrieveAddressStatus(address);
        console.log(result);
        if (result === true) {
          setStatus(true);
        } else {
          setStatus(false);
        }
        setLoading(false);
        setChecked(true);
      }
    } catch (error) {
      setLoading(false);
      toast.error("Please ensure the user address is correct.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const handleEnterKey = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleCheck(e);
    }
  };

  return (
    <PageContainer>
      <Navigation />
      <PageContent>
        <Flex className="col-1">
          <Typography font="h2" as="h3" className="title">
            BLACKLIST CHECKER
          </Typography>
          <Typography font="bodyText" as="h3">
            The Veriface Blacklist Checker allows you to check any address that
            has been blacklisted by our protocol. Enter the address to get
            started.
          </Typography>
        </Flex>
        <div className="searchFieldWrapper">
          <input
            type="text"
            value={searchValue}
            onChange={handleChange}
            className="searchInput"
            placeholder="Search User Address"
            onKeyDown={handleEnterKey}
          />
          <BsSearch
            size="2rem"
            color="#b982ff"
            className="searchIcon"
            onClick={handleCheck}
          />
        </div>

        {checked && (
          <div className="blacklist-card">
            <Typography font="bodyText" as="h3">
              Address: {address}
            </Typography>
            <Typography font="bodyText" as="h3">
              Status:{" "}
              {status === true ? (
                <span className="blacklistText">BLACKLISTED!</span>
              ) : (
                <span className="whitelistText">CLEAN</span>
              )}
            </Typography>
          </div>
        )}

        {loading && (
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <ToastContainer />
      </PageContent>
    </PageContainer>
  );
};

export default CheckBlackListPage;
