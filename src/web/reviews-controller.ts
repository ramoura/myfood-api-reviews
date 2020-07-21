import * as express from 'express';
import {controller, httpGet, httpPost, interfaces, request, response} from "inversify-express-utils";
import {Review} from "../domain/reviews/model/review";
import {inject} from "inversify";
import {GetReviews} from "../domain/reviews/get-reviews";
import {PostReviews} from "../domain/reviews/post-reviews";

@controller("/reviews")
export class ReviewsController implements interfaces.Controller {

  constructor(
      @inject("GetReviews") private getReviews: GetReviews,
      @inject("PostReviews") private postReviews: PostReviews,
  ) {
  }


  @httpPost("/:restaurant_id")
  public async saveReviews(@request() req: express.Request, @response() res: express.Response) {
    try {
      var {order_id, costumer_id, rate} = req.body;
      var reviewMessage: Review = {restaurant_id: req.params.restaurant_id, order_id, costumer_id, rating: rate};
      const posts = await this.postReviews.saveReview(reviewMessage);
      res.status(201).json(posts);
    } catch (error) {
      res.status(400).json(error);
    }
  }

  @httpGet("/:id")
  public async retrieveReviews(@request() req: express.Request, @response() res: express.Response) {
    try {
      const posts = await this.getReviews.retrieveReviews(req.params.id);
      res.status(200).json(posts);
    } catch (error) {
      res.status(400).json(error);
    }
  }


}
