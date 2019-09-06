// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const Card = article => {
  // select parent element
  const parentCardElement = document.querySelector('.cards-container')
  // create element <div className="card"></div>
  const divCard = document.createElement('div')
  divCard.classList.add('card')
  parentCardElement.appendChild(divCard)

  // create element <div className="headline"></div>
  const divHeadline = document.createElement('div')
  divHeadline.classList.add('headline')
  divHeadline.textContent = article.headline
  divCard.appendChild(divHeadline)

  // create element <div className="author"></div>
  const divAuthor = document.createElement('div')
  divAuthor.classList.add('author')
  divCard.appendChild(divAuthor)

  // create element <div className="img-container"></div>
  const imageContainer = document.createElement('div')
  imageContainer.classList.add('img-container')
  divAuthor.appendChild(imageContainer)

  // create image tag
  const image = document.createElement('img')
  image.src = article.authorPhoto
  imageContainer.appendChild(image)

  // create span tag for authors name
  const span = document.createElement('span')
  span.textContent = article.authorName
  divAuthor.appendChild(span)

  return divCard
}

axios
  .get('https://lambda-times-backend.herokuapp.com/articles')
  .then(res => {
    const articlesObject = res.data.articles
    const articlesArray = Object.values(articlesObject)

    articlesArray.forEach(subArticleArray => {
      subArticleArray.forEach(article => {
        // console.log(article);
        Card(article)
        // debugger;
      })
    })
  })
  .catch(err => console.log(err))
