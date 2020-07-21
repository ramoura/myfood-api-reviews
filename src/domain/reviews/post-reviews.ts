import {inject, injectable} from "inversify";
import {Review} from "./model/review";
import {ReviewsRepository} from "./ports/reviews-repository";
import {SaveRating} from "./save-rating";

export interface IPostReviews {
  saveReview(review: Review): void
}


@injectable()
export class PostReviews implements IPostReviews {
  constructor(
      @inject("ReviewsRepository") public reviewsRepository: ReviewsRepository,
      @inject("SaveRating") public saveRating: SaveRating,
  ) {
  }

  saveReview(review: Review): void {
    this.saveRating.saveNewRating(review.restaurant_id, review.rating);
    return this.reviewsRepository.save(review);
  }
}
