import { asClass, createContainer } from "awilix";
import { scopePerRequest } from "awilix-express";
import { Application } from "express";
import { EthereumService } from "./services/ethereum.service";
export const loadContainer = (app: Application) => {
    const Container = createContainer({
        injectionMode: 'CLASSIC'
    })
    Container.register({
        ethereumService: asClass(EthereumService).scoped()
    })
    app.use(scopePerRequest(Container));
}
