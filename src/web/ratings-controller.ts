import {controller, httpGet, interfaces, request, response} from "inversify-express-utils";
import {inject} from "inversify";
import {GetRatings} from "../domain/reviews/get-ratings";
import * as express from "express";


@controller("/ratings")
export class RatingsController implements interfaces.Controller {

  constructor(
      @inject("Ratings") private ratings: GetRatings
  ) {
  }

  @httpGet("/:id")
  public async getRatings(@request() req: express.Request, @response() res: express.Response) {
    try {
      const posts = await this.ratings.getRatings(req.params.id);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json(error);
    }
  }
}
