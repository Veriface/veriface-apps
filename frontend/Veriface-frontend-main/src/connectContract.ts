import { ethers } from "ethers";

const connectContract = () => {
  const contractAddress = "0x94D0F59E3cf56537C32D6e2BD4Ba860F5A76659E";
  const contractABI = require("../src/ABI.json");

  const provider = new ethers.providers.JsonRpcProvider(
    "https://polygon-mumbai.g.alchemy.com/v2/Mm0Lzxa6i2fwV1eu3p_EC4D_rS5Ob9uj"
  );

  let blacklistContract;
  try {
    blacklistContract = new ethers.Contract(
      contractAddress,
      contractABI,
      provider
    );
  } catch (error) {
    console.log("ERROR:", error);
  }
  return blacklistContract;
};

export default connectContract;
