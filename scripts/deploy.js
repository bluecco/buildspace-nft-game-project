const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["Average Stormtrooper", "Holy Murky"],
    ["https://i.imgur.com/0aMcFDX.jpeg", "https://i.imgur.com/YMZG8WM.jpeg"],
    [100, 250], // HP values
    [10, 75] // Attack damage values
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

  let txn;
  txn = await gameContract.mint(0);
  await txn.wait();
  console.log("Minted NFT #1");

  txn = await gameContract.mint(1);
  await txn.wait();
  console.log("Minted NFT #2");

  console.log("Done deploying and minting!");
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
