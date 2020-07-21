import {Rating} from "../model/rating";

export interface RatingsRepository {
  getRating(restaurantId: String): Rating;
  calculeNewRating(restaurantId: String, rating: number): void;
}
