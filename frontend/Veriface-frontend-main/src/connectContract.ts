import { ethers } from "ethers";

const connectContract = () => {
  const contractAddress = "0xb3C64A8D69E5C9A2A610329A5a4A7faA82c64BFD";
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
