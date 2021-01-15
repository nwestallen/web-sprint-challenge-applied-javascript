/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  //Crete elements
  let cardDiv = document.createElement('div');
  let headlineDiv = document.createElement('div');
  let authorDiv = document.createElement('div');
  let imgDiv = document.createElement('div');
  let imgTag = document.createElement('img');
  let authorSpan = document.createElement('span');

  //Create structure
  cardDiv.appendChild(headlineDiv);
  cardDiv.appendChild(authorDiv);
  authorDiv.appendChild(imgDiv);
  authorDiv.appendChild(authorSpan);
  imgDiv.appendChild(imgTag);

  //Add classes
  cardDiv.classList.add('card');
  headlineDiv.classList.add('headline');
  authorDiv.classList.add('author');
  imgDiv.classList.add('img-container');

  //Add content
  headlineDiv.textContent = article.headline;
  imgTag.src = article.authorPhoto;
  authorSpan.textContent = article.authorName;

  //Return card
  return cardDiv;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let element = document.querySelector(selector);
  axios
    .get('https://lambda-times-api.herokuapp.com/articles')
    .then((res) => {
      for (let property in res.data.articles) {
        res.data.articles[property].forEach((article) => element.appendChild(Card(article)));
      }
    })
    .catch((err) => {debugger});
}

export { Card, cardAppender }
