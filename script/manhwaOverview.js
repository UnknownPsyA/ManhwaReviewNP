let data = [
  {
    star: 5,
    count: 10000,
  },
  {
    star: 4,
    count: 24000,
  },
  {
    star: 3,
    count: 500,
  },
  {
    star: 2,
    count: 400,
  },
  {
    star: 1,
    count: 100,
  },
];

let total_rating = 0,
  rating_based_on_stars = 0;

data.forEach((rating) => {
  total_rating += rating.count;
  rating_based_on_stars += rating.count * rating.star;
});
data.forEach((rating) => {
  let rating_progress = `
        <div class="progress-value">
            <p>${rating.star}<span class="star">&#9733;</span></p>
            <div class="progress">
                <div class="bar" style="width: ${
                  (rating.count / total_rating) * 100
                }%;"></div>
            </div>
            <p>${rating.count.toLocaleString()}</p>
        </div>
    `;
  document.querySelector(".rating_progress").innerHTML += rating_progress;
});

let rating_average = (rating_based_on_stars / total_rating).toFixed(1);
document.querySelector(".rating-average p").innerHTML =
  total_rating.toLocaleString();
document.querySelector(".rating-average h1").innerHTML = rating_average;
document.querySelector('.stars').style.width = (rating_average / 5)
* 100 + "%";