const cardContainer = document.getElementById('card-container');
const loadMoreBtn = document.getElementById('load-more-btn');

// Function to add more cards
function addMoreCards() {
  // Create new card elements
  const newCard1 = document.createElement('div');
  newCard1.className = 'col-xl-4';
  newCard1.innerHTML = `<div class="card" >
  <div class="image">
    <img src="./assets/images/home-page-section-5-img-1.jpg" class="card-img-top" alt="home-page-section-5-img-1">
    <div class="date">
      <h6>07</h6>
      <p>May</p>
    </div>
  </div>
  <div class="card-body">

    <div class="icon d-flex justify-content-between">
    <ul>
      <li> <a href="#"> <i class="fa-solid fa-user"></i> by admin</a></li>
    </ul>
    <ul class="d-flex  ">
      <li> <a href="#"> <i class="fa-regular fa-message"></i>(15)</a></li>
      <li> <a href="#"> <i class="fa-regular fa-heart"></i>(225)</a></li>
    </ul>
  </div>
    <h5 class="card-title">powerful admin panel</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisic
      ing elit, sed do eiusmodte porincididunvt....</p>
    <a href="#" class="btn btn-primary">continue reading</a>
  </div>
</div>`;

  const newCard2 = document.createElement('div');
  newCard2.className = 'col-xl-4';
  newCard2.innerHTML = `<div class="card" >
  <div class="image">
    <img src="./assets/images/home-page-section-5-img-2.jpg" class="card-img-top" alt="home-page-section-5-img-2">
    <div class="date">
      <h6>05</h6>
      <p>May</p>
    </div>
  </div>
  <div class="card-body">

    <div class="icon d-flex justify-content-between">
    <ul>
      <li> <a href="#"> <i class="fa-solid fa-user"></i> by admin</a></li>
    </ul>
    <ul class="d-flex  ">
      <li> <a href="#"> <i class="fa-regular fa-message"></i>(15)</a></li>
      <li> <a href="#"> <i class="fa-regular fa-heart"></i>(225)</a></li>
    </ul>
  </div>
    <h5 class="card-title">Lifetime Customer Support</h5>
    <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisic
      ing elit, sed do eiusmodte porincididunvt....</p>
    <a href="#" class="btn btn-primary">continue reading</a>
  </div>
</div>`;


const newCard3 = document.createElement('div');
newCard3.className = 'col-xl-4';
newCard3.innerHTML = `<div class="card" >
<div class="image">
  <img src="./assets/images/home-page-section-5-img-3.jpg" class="card-img-top" alt="home-page-section-5-img-3">
  <div class="date">
    <h6>21</h6>
    <p>March</p>
  </div>
</div>
<div class="card-body">

  <div class="icon d-flex justify-content-between">
  <ul>
    <li> <a href="#"> <i class="fa-solid fa-user"></i> by admin</a></li>
  </ul>
  <ul class="d-flex  ">
    <li> <a href="#"> <i class="fa-regular fa-message"></i>(15)</a></li>
    <li> <a href="#"> <i class="fa-regular fa-heart"></i>(225)</a></li>
  </ul>
</div>
  <h5 class="card-title">Drag and Drop Feature here</h5>
  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisic
    ing elit, sed do eiusmodte porincididunvt....</p>
  <a href="#" class="btn btn-primary">continue reading</a>
</div>
</div>`;

  // Append new card elements to the card container
  cardContainer.appendChild(newCard1);
  cardContainer.appendChild(newCard2);
  cardContainer.appendChild(newCard3);
}

// Event listener for the load more button
loadMoreBtn.addEventListener('click', addMoreCards);