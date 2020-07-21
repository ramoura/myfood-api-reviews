import {RatingsRepository} from "../../domain/reviews/ports/ratings-repository";
import {Rating} from "../../domain/reviews/model/rating";
import {injectable} from "inversify";

@injectable()
export class RatingsInMemory implements RatingsRepository {
  array: Rating = {amountRatings: 0, sumRatings: 0, avgRatings: 0};

  constructor() {}

  calculeNewRating(restaurantId: String, rating: number): void {
    this.array.amountRatings += 1;
    this.array.sumRatings += rating;
    this.array.avgRatings = this.array.sumRatings / this.array.amountRatings;
  }

  getRating(restaurantId: String): Rating {
    return this.array;
  }
}
