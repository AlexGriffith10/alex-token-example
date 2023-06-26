import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyUint } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

import { TEST_DESCRIPTION, TEST_IMAGE_URL, TEST_TITLE} from './constants/constants'

describe("AlexPOAP contract", function () {
    let contract

    async function deployAlexPOAP() {
        const AlexPOAP = await ethers.getContractFactory("AlexPOAP");
        const alexPOAP = await AlexPOAP.deploy();

        contract = await ethers.getContractAt('AlexPOAP', alexPOAP.address)

        return { alexPOAP };
    }

        it("Should emit an event on create", async function () {
            const { alexPOAP } = await loadFixture(deployAlexPOAP);

            await expect(alexPOAP.create(TEST_TITLE, TEST_DESCRIPTION, TEST_IMAGE_URL))
                .to.emit(alexPOAP, "CreatedAlexPOAP")
                .withArgs(anyUint, TEST_TITLE);
        });
});
