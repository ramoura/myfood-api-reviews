import {Rating} from "./model/rating";
import {inject, injectable} from "inversify";
import {RatingsRepository} from "./ports/ratings-repository";

export interface ISaveRating {
  saveNewRating(restaurantId: String, rating: number): void;
}

@injectable()
export class SaveRating implements ISaveRating {

  constructor(
      @inject("RatingsRepository") public ratingsRepository: RatingsRepository
  ) {
  }

  saveNewRating(restaurantId: String, rating: number): void {
    this.ratingsRepository.calculeNewRating(restaurantId, rating);
  }

}
