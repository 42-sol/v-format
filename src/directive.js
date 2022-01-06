// eslint-disable-next-line import/no-extraneous-dependencies
import Cleave from 'cleave.js';

const defaults = {
  selector: 'input'
};

const queryInputElementInside = (el, selector) => (
  el instanceof HTMLInputElement
    ? el
    : el.querySelector(selector)
);

const parseOptions = (value) => {
  let options = value || {};

  if (typeof value === 'string') {
    switch (value) {
      case 'numeral':
        options = {
          numeral: true,
          numeralDecimalMark: '.',
          delimiter: ' '
        };
        break;

      case 'creditCard':
        options = {
          creditCard: true
        };
        break;

      default:
        break;
    }
  }

  return Object.assign(options, defaults);
};

export default {

  inserted(element, binding) {
    const el = element;
    const options = parseOptions(binding.value);

    el.$inputElement = queryInputElementInside(el, options.selector);

    if (!el.$inputElement) {
      throw new Error('Input element not found');
    }

    el.$inputElement.cleave = new Cleave(el.$inputElement, options);
  },

  update(el) {
    if (!el.$inputElement) {
      return;
    }

    const event = new Event('input', { bubbles: true });

    setTimeout(() => {
      el.$inputElement.dispatchEvent(event);
    }, 100);
  },

  unbind(element) {
    const el = element;

    if (el.$inputElement.cleave) {
      el.$inputElement.cleave.destroy();
      delete el.$inputElement.cleave;
    }
  }
};
