import {inject, injectable} from "inversify";
import {Review} from "./model/review";
import {ReviewsRepository} from "./ports/reviews-repository";

export interface IGetReviews {
  retrieveReviews(restaurant_id: string): Promise<Review[]>;
}


@injectable()
export class GetReviews implements IGetReviews {
  constructor(
      @inject("ReviewsRepository") public reviewsRepository: ReviewsRepository,
  ) {
  }

  async retrieveReviews(restaurant_id: string): Promise<Review[]> {
    return await this.reviewsRepository.retrieve(restaurant_id);
  }

}
