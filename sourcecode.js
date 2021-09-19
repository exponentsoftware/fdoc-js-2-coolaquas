//1.Using the countries array create the following array of arrays. The country name, the first three letters of the country name and the length of the country name.
const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

const createArrayOfArrays = (arr) => {
  return [
    ...arr.map((x) => [
      x[0].toUpperCase() + x.substr(1).toLowerCase(),
      x.substr(0, 3),
      x.length,
    ]),
  ];
};
// console.log(createArrayOfArrays(countries));

//2.
const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

//2.a) Write a function which filter users who has  scoresGreaterThan85
const scoreGreaterThan85 = (arr) =>
  console.log(arr.filter((x) => x.scores > 85));
// scoreGreaterThan85(users);

//2.b)Write a function which addUser  to the user array only if the user does not exist
const uniqueObjectAdd = (arr, obj) =>
  !arr.some((x) => x.name === obj.name) && arr.push(obj);
uniqueObjectAdd(users, {
  name: "Samrat",
  scores: 75,
  skills: ["HTM", "CSS"],
  age: 22,
});
// console.log("user", users);

//2.c)Write a function which addUserSkill which can add skill to a user only if the user exist
const uniqueSkillAdd = (arr, userName, newSkill) => {
  let index = arr.findIndex((x) => x.name === userName);
  index !== -1 &&
    (arr[index] = { ...arr[index], skills: [...arr[index].skills, newSkill] });
};
uniqueSkillAdd(users, "Samrat", "React");
// console.log("user", users);

//2.d)Write a function which editUser if the user exist in the users array
const uniqueUserEdit = (arr, obj) => {
  let index = arr.findIndex((x) => x.name === obj.name);
  index !== -1 && (arr[index] = { ...arr[index], ...obj });
};
uniqueUserEdit(users, {
  name: "Samrat",
  scores: 75,
  skills: ["React", "JS"],
  age: 25,
});
// console.log("user", users);
