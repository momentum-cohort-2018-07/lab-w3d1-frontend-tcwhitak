/* eslint no-undef: "off", no-unused-vars: "off" */

// An example of the grades object:
// const grades = {
//   indiana: [94, 82, 59, 95, 55, 98, 93, 84, 81, 75],
//   nevada: [53, 84, 98, 58, 75, 61, 67, 62, 60, 89],
//   drew: [88, 55, 76, 66, 57, 57, 62, 89, 67, 76],
//   dorian: [54, 58, 71, 63, 51, 72, 89, 93, 82, 76],
//   chase: [59, 72, 52, 76, 45, 54, 63, 57, 68, 37],
//   riley: [79, 92, 54, 71, 94, 77, 61, 57, 60, 75],
//   kelly: [76, 92, 94, 89, 99, 66, 75, 93, 73, 96],
//   allison: [87, 74, 77, 99, 58, 76, 55, 50, 89, 58],
//   ryan: [89, 55, 57, 84, 57, 78, 69, 96, 82, 84],
//   remy: [93, 96, 91, 99, 89, 97, 94, 77, 95, 82]
// }

// 1. Create a function called assignmentScore that takes a grades object,
// a student name, and an assignment number, and returns the score for that
// student and assignment.

function assignmentScore(grades, studentName, assignmentNum) {
  return grades[studentName][assignmentNum];
}

// 2. Create a function called assignmentScores that takes a grades object
// and an assignment number and returns all scores for that assignment.

function assignmentScores(grades, assignmentNum) {
  let allGrades = Object.values(grades);
  let assignmentGrades = allGrades.map(function(grade){
return grade[assignmentNum]
  })
  return assignmentGrades
}

// 3. Create a function called assignmentAverageScore that takes a grades
// object and an assignment number and returns the average score for that assignment.

function assignmentAverageScore (grades, assignmentNum){
   let assignmentGrades = assignmentScores(grades, assignmentNum)
   let rawTotal = assignmentGrades.reduce(function(total, grade){
       return total + grade
   })
   let average = rawTotal/assignmentGrades.length
   return average
}

// 4. Create a function called studentAverages that takes a grades object
// and returns a new object of students and their average score, like this:
// { indiana: 90, nevada: 80, indigo: 83, ... }

//merge two arrays into object
function combiObject(names, avgScores) {
    let result = {};
    for (let i = 0; i < names.length; i++)
         result[names[i]] = avgScores[i];
    return result;
}

function studentAverages (grades){
    let names = Object.keys(grades)
    let avgScores =[]
    names.forEach(function(name){
            avgScores.push(grades[name].reduce(function(total, grade){
           let sumTotal = (total + grade)
           return sumTotal
           })
       /grades[name].length)
        })

        return combiObject(names, avgScores)

}

// 5. Create a function called letterGrade that returns a letter grade for a
// numerical score. The second number is non-inclusive. For example, 90 is an 'A',
// 89.9 is a 'B'.
// 90+ => A
// 80-90 => B
// 70-80 => C
// 60-70 => D
// < 60 => F

function letterGrade (scoreGrade){
    if(scoreGrade < 60){
        return "F"
    } else if (scoreGrade >= 60 && scoreGrade < 70){
        return "D"
    } else if (scoreGrade >= 70 && scoreGrade < 80){
        return "C"
    } else if (scoreGrade >= 80 && scoreGrade < 90){
        return "B"
    } else if (scoreGrade >= 90){
        return "A"
    }
}

// 6. Create a function called finalLetterGrades that takes a grades object
// and returns a new object of students and their final letter grade, as
// determined by their average.

function finalLetterGrades (grades){
    let avgScore = Object.values(studentAverages(grades))
    let names = Object.keys(studentAverages(grades))
    let letters = avgScore.map(letterGrade)
    return combiObject(names, letters)
}


// 7. Create a function called classAverage that takes a grades object and
// returns the average for the entire class.

function classAverage (grades){
    let studentAvgScore = Object.values(studentAverages(grades))
    let classAvgScore = studentAvgScore.reduce(function (sum, score){
        return sum + score
    })/studentAvgScore.length
    return classAvgScore

}

// 8. Create a function called topStudents that takes a grades object and a
// number of students and returns an array of the names of the top N students,
// where N is the number of students you gave to the function.
function topStudents(grades, n){
let namesSorted = Object.keys(studentAverages(grades)).sort(
    function(a,b){
        return studentAverages(grades)[b]-studentAverages(grades)[a]
    })
let topNames = []
for(let i = 0; i < n; i++){
topNames.push(namesSorted[i])
}
return topNames
}
// 9. Create a function called passingStudents that takes a grades object
// and returns an array of all the students with a D or better average.
