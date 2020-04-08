// CODE here for your Lambda Classes

class Person {
  constructor(attributes) {
    this.name = attributes.name;
    this.age = attributes.age;
    this.location = attributes.location;
  }
  speak() {
    return `Hello my name is ${this.name} and I am from ${this.location}.`;
  }
}

//child of Person ^

class Instructor extends Person {
  constructor(attributes) {
    super(attributes);
    this.specialty = attributes.specialty;
    this.favLanguage = attributes.favLanguage;
    this.catchPhrase = attributes.catchPhrase;
  }
  demo(subject) {
    return `Today we are learning about ${subject}.`;
  }
  grade(student, subject) {
    return `${student.name} receives a passing grade on ${subject}.`;
  }
  getRandomGrade(student, min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return (
      student.grade + Math.round(Math.floor(Math.random() * (max - min))) + min
    );
  }
}

//child of Person ^

class Student extends Person {
  constructor(attributes) {
    super(attributes);
    this.previousBackground = attributes.previousBackground;
    this.className = attributes.className;
    this.favSubjects = attributes.favSubjects;
    this.grade = attributes.grade;
  }

  PRAssignment(subject) {
    return `${this.name} has submitted a PR for ${subject}.`;
  }

  listsSubjects() {
    this.favSubjects.forEach(item => {
      return console.log(item);
    });
  }
}
class ProjectManager extends Instructor {
  constructor(attributes) {
    super(attributes);
    this.gradClassName = attributes.gradClassName;
    this.favInstructor = attributes.favInstructor;
  }
  standUp(channel) {
    return `${this.name} announces to ${channel}, @${channel} stand up time!`;
  }
  debugsCode(student, subject) {
    returns`${this.name} debugs ${student}'s code on ${subject}`;
  }
}

//objects for testing our classes

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  className: "WEBPT12",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const bethany = new Instructor({
  name: "Bethany",
  location: "Albany",
  age: 28,
  className: "UX5",
  favLanguage: "Basic",
  specialty: "Fullstack",
  catchPhrase: `Where are my glasses`
});

//Students

const greggor = new Student({
  name: "Greggor",
  location: "Bedrock",
  age: 25,
  previousBackground: "Unemployed",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  grade: 50,
  favSubjects: (subjectArray = [
    "Lunch",
    "Breaktime",
    "Recess",
    "Social Studies"
  ])
});

const alexander = new Student({
  name: "Alexander",
  location: "Amsterdam",
  age: 19,
  previousBackground: "Supermarket Cashier",
  favLanguage: "C#",
  specialty: "CSS",
  grade: 80,
  favSubjects: ["Lunch", "Breaktime", "Recess", "Social Studies"]
});

//Instructors

const leonard = new ProjectManager({
  name: "Leonard",
  location: "LA",
  age: 31,
  gradClassName: "UX2",
  favInstructor: "Bethany",
  favLanguage: "Actionscript",
  specialty: "HR",
  catchPhrase: `Where's my coffee?`
});

const cynthia = new ProjectManager({
  name: "Cynthia",
  location: "Boise",
  age: 34,
  gradClassName: "WEB14",
  favInstructor: "Fred",
  favLanguage: "Java",
  specialty: "Back-end",
  catchPhrase: `Breathe in, and  out`
});

console.log(fred.grade(greggor, "Web Fundementals"));

console.log(bethany.demo("design"));

greggor.listsSubjects();

console.log(bethany.getRandomGrade(greggor, 1, 5));

//console.log(PRAssignment(Lunch));
