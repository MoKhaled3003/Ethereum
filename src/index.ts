import express from 'express';
import { loadControllers } from "awilix-express";
import { loadContainer } from "./container";

const app: express.Application = express();

app.use(express.json());

loadContainer(app);

app.use(loadControllers(
'controllers/*.ts',
{ cwd: __dirname }
));


app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})
