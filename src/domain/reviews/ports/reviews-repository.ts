import {Review} from "../model/review";

export interface ReviewsRepository {
  retrieve(restaurantId: string):  Promise<Review[]>;
  save(review: Review): void;

}

