/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable import/extensions */
import 'regenerator-runtime';
import '../styles/main.css';
import './component/search-bar.js';
import Posts from '../public/data/DATA';
import DataSource from '../public/data/data-source';

const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('#drawer');

menu.addEventListener('click', (event) => {
  drawer.classList.toggle('open');
  event.stopPropagation();
});

hero.addEventListener('click', () => {
  drawer.classList.remove('open');
});

main.addEventListener('click', () => {
  drawer.classList.remove('open');
});

const postsList = document.querySelector('.posts');
postsList.innerHTML = '';

Posts.restaurants.forEach((post) => {
  const {
    pictureId, name, city, rating, description,
  } = post;
  postsList.innerHTML += `
  <article class="post-item">
  <img class="post-item-thumbnail" src="${pictureId}" alt="" />
  <div class="post-item-content">
  <h1 class="post-name">
  <a href="#">${name}</a>
  </h1>
  <p class="post-city">
  ${city} City, Rating ${rating}/5
  </p>
  <p class="post-description">
  ${description}
 </p>
  </div>
</article>    
  `;
});

const buttonSearchElement = document.querySelector('search-bar');

const onButtonSearchClicked = () => {
  DataSource.searchPost(buttonSearchElement.value).then(renderResult).catch(fallbackResult);
};

const renderResult = (Posts) => {
  postsList.innerHTML = '';
  Posts.forEach((post) => {
    const {
      pictureId, name, city, rating, description,
    } = post;
    postsList.innerHTML += `
    <article class="post-item">
    <img class="post-item-thumbnail" src="${pictureId}" alt="" />
    <div class="post-item-content">
    <h1 class="post-name">
    <a href="#">${name}</a>
    </h1>
    <p class="post-city">
    ${city} City, Rating ${rating}/5
    </p>
    <p class="post-description">
    ${description}
    </p>
      </div>
    </article>    
  `;
  });
};

const fallbackResult = (message) => {
  postsList.innerHTML = '';
  postsList.innerHTML += `<h2 class="message">${message}</h2>`;
};

buttonSearchElement.clickEvent = onButtonSearchClicked;
