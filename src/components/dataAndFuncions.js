export const coursesArr = [
  {
    name: "HTML & CSS Tutorial, W3schools",
    date: "DECEMBER 2020 - JANUARY 2021",
    desc: "I’ve Learned modern HTML5, CSS3 and web design by building multiple websites",
  },
  {
    name: "JavaScript Tutorial, W3schools",
    date: "FEBRUARY 2021 - MARCH 2021",
    desc: "I’ve Learned Modern JavaScript from the very start with the help of W3scools tutorial to build JavaScript applications.",
  },
  {
    name: "Frontend Fundamentals, Elzero Web School",
    date: "APRIL 2021 - JUNE 2021",
    desc: "I’ve Learned all the fundamentals of Front-End Web Development and how I can Use them to start creating websites.",
  },
  {
    name: "Learn ReactJS Tutorial, Unique Coderz Academy",
    date: "JULY 2021 - SEPTEMBER 2021",
    desc: "",
  },
];
export const projectArr = [
  {
    name: "Profile",
    url: "https://github.com/AsselAlAssel/profile",
    desc: "Personal Profile Template from w3school",
  },
  {
    name: "To Do List",
    url: "https://github.com/AsselAlAssel/todo",
    desc: "React App to track tasks and filter them completed or not completed",
  },
  {
    name: "Local Storage",
    url: "https://github.com/AsselAlAssel/localstorage",
    desc: "Site to store some data taken from the user in the local Storage.",
  },
  {
    name: "Memory Game",
    url: "https://github.com/AsselAlAssel/memory-Game",
    desc: "Simple game shows the user some cards and let the user guess and match them after they are flipped.",
  },
];

export const detailsArr = [
  "Rummaneh",
  "Jenin",
  "Palesine",
  "0595774519",
  "aseel1234500000@gmail.com",
];
export const skillsArr = [
  { name: "c++", stage: 3 },
  { name: "java", stage: 3 },
  { name: "HTml &CSS", stage: 3 },
  { name: "Javascript", stage: 2 },
  { name: "React", stage: 2 },
  { name: "SQL", stage: 3 },
  { name: "Git", stage: 1 },
  { name: "Design Patterns", stage: 2 },
  { name: "Data Struchtures", stage: 3 },
];

export const ClickMenu = () => {
  console.log("10");
  document.querySelector(".data-part").style.left="0px";
};
export const ClickExit = () => {
  console.log("11");
  document.querySelector(".data-part").style.left="-1000px";
};
