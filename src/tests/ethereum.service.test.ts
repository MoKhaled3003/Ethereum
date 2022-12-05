import "jest"
import { EthereumService } from "../services/ethereum.service"
describe("etherem service to coonect to ether scan", () => {
    const ethereumService = new EthereumService();
    const addresses = "0xa65760c16a47bb1c7d5373d9d18736084e2d3f66,0xa65760c16a47bb1c7d5373d9d18736084e2d3f66,0x39fe7a6512c0b70d734515ddbdea9410ae7c26d0";

    it("it should resolve and get excuted successfully", () => {
        ethereumService.getTotalBalance(addresses);
        expect(ethereumService.getTotalBalance(addresses)).resolves;
    })
})