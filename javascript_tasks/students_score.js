const students = [
  { name: 'Anjali', score: 75 },
  { name: 'Karan', score: 42 },
  { name: 'Ravi', score: 37 },
  { name: 'Priya', score: 88 }
];
function highMarks(students)
{
    let high=students.filter(function(student){
        return student.score>=80;
    });
    console.log(high);
}
function avgMarks(students)
{
    let avg=students.filter(function(student){
        return student.score>=60 && student.score<80;
    });
    console.log(avg);
}
function passMarks(students)
{
    let pass=students.filter(function(student){
        return student.score>=40 && student.score<60;
    });
    console.log(pass);
}
console.log("Students with high score",highMarks(students));
console.log("Students with avg score",avgMarks(students));
console.log("Students with pass score",passMarks(students));