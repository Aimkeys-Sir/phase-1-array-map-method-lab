const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
return tutorials.map(sentence=>{
  let sentenceArr=sentence.split(" ")
  return sentenceArr.map(word=>word[0].toUpperCase()+word.substring(1,word.length)).join(" ")
 })
}

// function caseForMe(sentence)
// { 
//   let sentenceArr=sentence.split(" ")
//   return sentenceArr.map(word => word[0].toUpperCase()+word.substring(1,word.length)).join(" ")
// }


//console.log("00".toUpperCase())

// //practice
// const skiSchool=["aki","guadalupe","lei","aalam"]
// const rollCall= skiSchool.map(student=>student+" the skier")

// console.log(rollCall)
// console.log("00w".toLowerCase)
// const robots = [
//   { name: "Johnny 5", modes: 5, isActivated: false },
//   { name: "C3PO", modes: 3, isActivated: false },
//   { name: "Sonny", modes: 2.5, isActivated: false },
//   { name: "Baymax", modes: 1.5, isActivated: false },
// ]

// const onRobots=robots.map(robot=>{
//   return Object.assign({},robot,
//      {modes:robot.modes*2, isActivated:true})
// })

// console.log(onRobots)
// console.log(robots)