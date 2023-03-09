console.log(COURSES);

const coursesListElement = document.getElementById("courses-list");

for (let i = 0; i < COURSES.length; i++) {
  //get one course from the array by index
  const course = COURSES[i];

  //create the HTML for the course card
  const courseCardHTML = createCourseCardHTML(course);

  //add the HTML to the DOM
  coursesListElement.insertAdjacentHTML("beforeend", courseCardHTML);
}
// const elemOldPrice = document.querySelector(".course-card-detail-old-price");

// const elemOldPriceContent = document.course.oldPrice.innerHTML;
// console.log(elemOldPriceContent);
// elemOldPrice.style.cssText = `
// color:grey;
// text-decoration:line-through;
// `;
function createCourseCardHTML(course) {
  let stars = "&#9733;";

  stars += "&#9733;";
  stars += "&#9734;";
  stars += "&#x2BE8;";
  stars += "&#9734;";

  // const ratings = document.querySelectorAll('.course-card-rating')
  // if (ratings.length>0){
  // initRatings();
  // }
  // function initRatings(actualRating) {
  // let actualRating=course.rating;
  //   for (let i=0; i<ratings.length;i++) {
  //   const rating=ratings[i]*stars;
  //   return rating
  // }
  // }

  let discount = (course.price / course.oldPrice) * 100;

  return `<div class="course-card">
    <img src="${course.img}" alt="${course.title}" class="course-card-img">
    <div class="course-card-content">
        <h3 class="course-card-author">${course.author}</h3>
        <h4 class="course-card-title">${course.title}</h4>
        <p class="course-card-description">${course.description}</p>
        <div class="course-card-footer">
            <span class="course-card-detail">${course.level}</span>
            <span class="course-card-rating">${stars}${course.rating}</span>
            <span class="course-card-detail">${course.duration}</span>
            <span class="course-card-detail-discount">${
              discount ? discount + "%" : ""
            }
            <span class="course-card-detail"> ${course.price}</span>
  <span class="course-card-detail-old-price">${
    course.oldPrice ? course.oldPrice : ""
  }</span>
              <span class="course-card-detail-trend">${course.isTrend}</span>
              </div>
    </div>`;
}
