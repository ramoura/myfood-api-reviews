import {ReviewsRepository} from "../../domain/reviews/ports/reviews-repository";
import {injectable} from "inversify";
import {Review} from "../../domain/reviews/model/review";


@injectable()
export class ReviewsInMemory implements ReviewsRepository {
  array: Review[] = [];

  constructor() {
  }


  retrieve(restaurantId: string): Promise<Review[]> {
    console.log(this.array);
    return Promise.resolve(this.array);
  }

  save(review: Review): void {
    this.array.push(review);
  }

}
