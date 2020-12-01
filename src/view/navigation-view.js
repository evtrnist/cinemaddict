import {createElement} from '../util';

export const FilterType = {
  ALL: `All movies`,
  WATCHLIST: `Watchlist`,
  HISTORY: `History`,
  FAVORITES: `Favorites`,
};

const createFilterTemplate = (filter) => {
  const {name, count} = filter;
  const filterClass = name === `all` ? `main-navigation__item--active` : ``;

  return `<a href="#${name}" class="main-navigation__item ${filterClass}">
      ${FilterType[name]}
      <span class="main-navigation__item-count">
        ${count}
      </span>
    </a>
  `;
};

const createFiltersTemplate = (filters) => {
  return filters.map((filter) => createFilterTemplate(filter)).join(``);
};

const createNavigationTemplate = (filters) => {
  const filtersTemplate = createFiltersTemplate(filters);
  return `<nav class="main-navigation">
      <div class="main-navigation__items">
        ${filtersTemplate}
      </div>
      <a href="#stats" class="main-navigation__additional">Stats</a>
    </nav>
  `;
};

export default class NavigationView {
  constructor(filters) {
    this._element = null;
    this._filters = filters;
  }

  getTemplate() {
    return createNavigationTemplate(this._filters);
  }

  getElement() {
    if (!this._element) {
      this._element = createElement(this.getTemplate());
    }

    return this._element;
  }

  removeElement() {
    this._element = null;
  }
}
