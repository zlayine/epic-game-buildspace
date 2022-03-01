const { expect } = require("chai");
const { ethers } = require("hardhat");
describe("MyEpicGame", function () {
  let gameContract;
  before(async () => {
    const gameContractFactory = await ethers.getContractFactory("MyEpicGame");
    gameContract = await gameContractFactory.deploy(
      ["Leo", "Aang", "Pikachu"],
      [
        "<https://i.imgur.com/pKd5Sdk.png>",
        "<https://i.imgur.com/xVu4vFL.png>",
        "<https://i.imgur.com/WMB6g9u.png>",
      ],
      [100, 200, 300],
      [100, 50, 25],
      "Elon Musk",
      "<https://i.imgur.com/AksR0tt.png>",
      10000,
      50
    );
    await gameContract.deployed();
  });
  it("Should have 3 default characters", async () => {
    let characters = await gameContract.getAllDefaultCharacters();
    expect(characters.length).to.equal(3);
  });
  it("Should have a boss", async () => {
		let boss = await gameContract.getBigBoss();
		expect(boss.name).to.equal("Elon Musk");
	});
});