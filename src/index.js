import api from './api';
import $ from 'jquery';

import 'normalize.css';
import './index.css';

import store from './store';
import shoppingList from './shopping-list';


const main = function () {
  // fetch('https://thinkful-list-api.herokuapp.com/ei-student/items')
  // .then(res => res.json())
  // .then(data => console.log(data));

  api.getItems()
  .then((items) => {
    items.forEach((item) => store.addItem(item));
    shoppingList.render();
    
    });

  shoppingList.bindEventListeners();
  shoppingList.render();
  // api.createItem('pears')
  // .then(res => res.json())
  // then((newItem) => {
  // return api.getItems();
  // })
  // .then(res => res.json())
  // .then((items) => {
  //   console.log(items);
  // });
  // .then(res => console.log(res));
  // console.log(api.BASE_URL);
};

$(main);
