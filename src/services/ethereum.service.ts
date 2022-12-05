import axios from "axios"
export class EthereumService {
    async getTotalBalance(addresses: string) {
        const result: any[] = [];
        let totalBalance = 0;
        const response = await axios.get("https://api-goerli.etherscan.io/api", {
            params: {
                module: "account",
                action: "balancemulti",
                address: addresses,
                tag: "latest",
                apiKey: "RFIUIUSN68SGG42DTG4SPGWUB5UYCV1P7Y"
            },
            headers: {
                'Accept-Encoding': 'application/json',
            }
        })
        if (response.data.result.length > 0) {
            response.data.result.forEach((address: { account: string; balance: string; }) => {
                result.push(Object.assign({}, {
                    address: address.account,
                    balance: address.balance
                }))
                totalBalance += parseFloat(address.balance)
            });
            return {
                addresses: result,
                totalBalance
            }
        }
    }
}
