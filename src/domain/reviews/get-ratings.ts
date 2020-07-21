import {inject, injectable} from "inversify";
import {RatingsRepository} from "./ports/ratings-repository";
import {Rating} from "./model/rating";



export interface IGetRatings {
  getRatings(restaurantId: String): Rating;
}

@injectable()
export class GetRatings implements IGetRatings {

  constructor(
      @inject("RatingsRepository") public ratingsRepository: RatingsRepository
  ) {
  }

  getRatings(restaurantId: String): Rating {
    return this.ratingsRepository.getRating(restaurantId);
  }

}
