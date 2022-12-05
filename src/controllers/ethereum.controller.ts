import { GET, route } from "awilix-express";
import { Request, Response } from "express";
import { EthereumService } from "../services/ethereum.service";
import { validate } from "../validator/validate";
@route('/ethereum')
export class EthereumController {

    constructor(private readonly ethereumService: EthereumService) { }

    @GET()
    async getTotalBalance(req: Request, res: Response) {
        try {
            //check if addresses only up to 100
            if (req.query.address !== undefined && req.query.address.toString() !== "") {
                const addresses = validate(req.query.address.toString());
                if (addresses) {
                    const balances = await this.ethereumService.getTotalBalance(addresses)
                    console.log("addresses and their balance and total balance", balances)
                    return res.json(balances);
                } else {
                    return res.json({ mssg: 'you have excceded addresses limit of 100' });
                }
            }
            return res.status(400).json({ mssg: 'please enter addresses' });
        } catch (error) {
            console.log("error msg", error)
            return res.status(500).json({ mssg: 'internal server error' });
        }
    }
}
