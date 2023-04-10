// Function for populating on initial load
$(async function () {
  let data = await fetch("./items.json").then((response) => response.json());

  console.log(data);

  let count = data.length;
  let cards = ``;

  for (let i = 0; i < count; i++) {
    cards += `<div class="col-3 mb-4 card-item">
    <div class="card" style="width: 18rem;">
        <img src="beach.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data[i].title}</h5>
          <h6 class="card-title">Price: ${data[i].price}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary">Click Me</a>
        </div>
      </div>
</div>`;
  }
  $("#card-content-row").html(cards);
});

// Function for list View
$("#list-btn").click(function () {
  $(".card-item").each(function (i) {
    $(this).removeClass("col-3");
    $(this).addClass("col-6");
    if (i % 2 == 0) {
      $(this).addClass("d-flex justify-content-end");
    } else {
      $(this).addClass("d-flex justify-content-start");
    }
  });
});

// Function for grid View
$("#grid-btn").click(function () {
  $(".card-item").each(function () {
    $(this).removeClass("col-6");
    $(this).addClass("col-3");
  });
});

//filter 1
$("#filter-1").click(async function () {
  let data = await fetch("./items.json").then((response) => response.json());

  const result = data.filter((card) => card.price < 100);
  let count = result.length;
  let cards = ``;

  updateCardsBody(count, cards, result);
});

//filter 2
$("#filter-2").click(async function () {
  let data = await fetch("./items.json").then((response) => response.json());

  const result = data.filter((card) => card.price >= 100 && card.price < 200);
  let count = result.length;
  let cards = ``;

  updateCardsBody(count, cards, result);
});

//filter 3
$("#filter-3").click(async function () {
  let data = await fetch("./items.json").then((response) => response.json());

  const result = data.filter((card) => card.price >= 200);
  let count = result.length;
  let cards = ``;

  updateCardsBody(count, cards, result);
});

//Common function for populating filtered cards
function updateCardsBody(count, cards, result) {
  for (let i = 0; i < count; i++) {
    cards += `<div class="col-3 mb-4 card-item">
        <div class="card" style="width: 18rem;">
            <img src="beach.jpg" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${result[i].title}</h5>
              <h6 class="card-title">Price: ${result[i].price}</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" class="btn btn-primary">Click Me</a>
            </div>
          </div>
    </div>`;
  }

  $("#card-content-row").html(cards);
}
