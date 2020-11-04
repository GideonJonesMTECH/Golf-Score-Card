let apiURL = "https://golf-courses-api.herokuapp.com/courses";
let golfApi = new XMLHttpRequest();
golfApi.open('GET', apiURL, true);
golfApi.send();
golfApi.onload = function () {
 if (golfApi.status === 200) {
  let golfObj = JSON.parse(golfApi.responseText).courses;
  setStartup(golfObj);
 } else {
  return;
 }
}

let courseDiv = document.getElementById("courseSelect");
let course1g = {};
let course2g = {};
let course3g = {};


function setStartup(golfObj) {
 let GolfCourses = {
  course1: {
   name: golfObj[0].name,
   image: golfObj[0].image,
   id: golfObj[0].id
  },
  course2: {
   name: golfObj[1].name,
   image: golfObj[1].image,
   id: golfObj[1].id
  },
  course3: {
   name: golfObj[2].name,
   image: golfObj[2].image,
   id: golfObj[2].id
  }
 };
 course1g = GolfCourses.course1;
 course2g = GolfCourses.course2;
 course3g = GolfCourses.course3;

 for (let i = 0; i < golfObj.length; i++) {
  let selectedCourse = {}
  let numb = i + 1;
  if (i == 0) {
   selectedCourse = GolfCourses.course1;
  } else if (i == 1) {
   selectedCourse = GolfCourses.course2;
  } else {
   selectedCourse = GolfCourses.course3;
  }
  let courseDesc = selectedCourse.name;
  let imageSrc = selectedCourse.image;
  let imageHTML =
   `
   <input type="radio" id="course${numb}" name="courseForm" value="${numb}" />
   <label for="course${numb}">
    <figure>
     <img src="${imageSrc}" alt="Course${numb}" class="courseImg" />
     <figcaption>${courseDesc}</figcaption>
    </figure>
   </label>
   `;
   courseDiv.innerHTML += imageHTML;

 }
}


function getCourseAndPlayers() {
 let courseArray = document.getElementsByName('courseForm');
 let courseId = 0;
 for (let i = 0; i < courseArray.length; i++) {
  if(courseArray[i].checked){
   if (i == 0) {
    courseId = course1g.id;
   } else if (i == 1) {
    courseId = course2g.id;
   } else if (i == 2) {
    courseId = course3g.id;
   } 
  }
 }
 let newCourseAPI = `https://golf-courses-api.herokuapp.com/courses/${courseId}`
 console.log(newCourseAPI);
 
 let players = document.getElementById("playerCount").value;
 console.log("Players: " + players);

 let GolfReturnObj = {
  courseAPI : newCourseAPI,
  playerCount : players,
 }
 return GolfReturnObj;
}