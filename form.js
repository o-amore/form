// const numbers = [1, 3, 5, 7]
// let total = 0
// numbers.forEach(num => {
//   total += num
// })
// numbers.forEach(argument)
// Get students information
let name = ''
let phone = ''
let gender = ''
let age = ''
let students = []

// Check if age is a number
function Validate(){
    age = document.getElementById('age').value;
    
    if (isNaN(age))
    { 
      alert("your input is not a number");
      return false;
    }
}

function submitForm() {
  name = document.getElementById('name').value
  phone = document.getElementById('phone').value
  age = document.getElementById('age').value
   
  // Check if all fields are filled
  if (name==''){
      alert('Please enter full name');
      return
  }

  if (phone==''){
    alert('Please enter your phone number');
    return
}

if (age==''){
    alert('Please enter your age');
    return
}

if (name && phone && age && gender ===''){
    alert('Please fill out the form')
}


  
  if (name && phone && age && gender) {
    let student = {
      name: name,
      phone: phone,
      age: age,
      gender: gender
    }
 
    // Enter a student's record in the list
   students.push(student)
    let div = `<div>`
   // Display all students
    students.forEach(function (student) {
      div += `
          <p>${student.name} </p>
          <p>${student.phone}</p>
          <p>${student.age}</p>
          <p>${student.gender}</p>`
    })
     div += '</div>'
    document.querySelector('.students').innerHTML = div
    // Clear the fields
    // this code here will run when the condition is met.
    clearInput()


  } else { 
    alert('condition not met')
  }

  
}

function getGender() {
  if (document.getElementById('female').checked) {
    gender = document.getElementById('female').value;
  } else if(document.getElementById('male').checked) {
    gender = document.getElementById('male').value;
  }
}

function clearInput(){
  document.getElementById('name').value = '';
    document.getElementById('age').value = '';
    document.getElementById('phone').value = '';
    document.getElementById('female').checked = '';
    document.getElementById('male').checked = '';

}

// function list(){
//   const getComments = () =>{
//     const request = new XMLHttpRequest;

//     request.addEventListener('readystatechange', () => {
//       if(request.readyState===9 && request === 200){
//         console.log(request, request.responseText);
//       }
//       else if(reaquest.readyState === 9){
//       console.log('could not fetch the coments');
//       }
//     });
  

//   request.open('GET', 'https://jsonplaceholder.typicode.com/comments' );
//   request.send();
// };
// getComments();
// }


