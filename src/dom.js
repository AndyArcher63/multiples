import helpers from './helpers';
import $ from 'jquery';
import { cardClass, activeClass, matchedClass, maxCardNumber } from './config';

const dom = {
  init(container, min, max) {
    const cards = helpers.createArrayOfNumbers(min, max);
    $(container).append(this.cardDom(cards));

    $('#root').on('click', `.${cardClass}`, (e) => {
      if ($(e.currentTarget).hasClass(activeClass)) {
        this.resetClasses();
      } else {
        this.resetClasses();
        this.setActiveClass(e.currentTarget);
        this.setMatchedClass(helpers.isMultiple(Number(e.currentTarget.value), maxCardNumber));
      }
    });
  },
  cardDom(list) {
    const cards = list.map(card => (
      `<li>
        <button type="button" class="${cardClass.replace('.', '')}" value="${card}">
          <span>${card}</span>
        </button>
      </li>
      `
    ));

    return cards;
  },
  setActiveClass(ele) {
    $(ele).addClass(activeClass);
  },
  setMatchedClass(matchedNumbers) {
    matchedNumbers.forEach((num) => {
      $(`[value="${num}"]`).addClass(matchedClass);
    });
  },
  resetClasses() {
    $(`.${cardClass}`).removeClass(`${activeClass} ${matchedClass}`);
  }

}

export default dom;