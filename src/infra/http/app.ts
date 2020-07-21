import "reflect-metadata";
import * as bodyParser from 'body-parser';
import container from "../config/inversify.config";
import {InversifyExpressServer} from "inversify-express-utils";

import '../../web/reviews-controller'

let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});


export default server
