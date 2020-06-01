import dom from './dom';
import {
  cardContainer,
  minCardNumber,
  maxCardNumber,
} from './config';

const app = () => {
  dom.init(cardContainer, minCardNumber, maxCardNumber);
};

export default app;
