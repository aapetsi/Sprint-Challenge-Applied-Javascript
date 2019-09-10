// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

const Header = () => {
  // select parent element
  const parentElement = document.querySelector('.header-container')

  // create elements
  const header = document.createElement('div')
  header.classList.add('header')
  parentElement.appendChild(header)

  // create span element - date
  const date = document.createElement('span')
  date.classList.add('date')
  date.textContent = 'MARCH 28, 2019'
  header.appendChild(date)

  // create h1 element
  const h1 = document.createElement('h1')
  h1.textContent = 'Lambda Times'
  header.appendChild(h1)

  // create span element - temp
  const temp = document.createElement('span')
  temp.classList.add('temp')
  temp.textContent = '98°'

  return header
}

Header()
