import {Container} from 'inversify';

import {GetReviews, IGetReviews} from "../../domain/reviews/get-reviews";
import {ReviewsRepository} from "../../domain/reviews/ports/reviews-repository";
import {ReviewsInMemory} from "../database/reviews-in-memory";
import {GetRatings, IGetRatings} from "../../domain/reviews/get-ratings";
import {RatingsRepository} from "../../domain/reviews/ports/ratings-repository";
import {RatingsInMemory} from "../database/ratings-in-memory";
import {IPostReviews, PostReviews} from "../../domain/reviews/post-reviews";
import {ISaveRating, SaveRating} from "../../domain/reviews/save-rating";


import "../../web/reviews-controller";
import "../../web/ratings-controller";

const container = new Container();

container.bind<ReviewsRepository>('ReviewsRepository').to(ReviewsInMemory).inSingletonScope();
container.bind<RatingsRepository>('RatingsRepository').to(RatingsInMemory).inSingletonScope();


container.bind<IGetReviews>('GetReviews').to(GetReviews);
container.bind<IPostReviews>('PostReviews').to(PostReviews);
container.bind<IGetRatings>('Ratings').to(GetRatings);
container.bind<ISaveRating>('SaveRating').to(SaveRating);

export default container;
