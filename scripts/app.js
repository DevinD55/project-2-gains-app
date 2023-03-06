import app from "./firebase-setup.js";

import { ref, getDatabase, onValue, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"

const database = getDatabase(app);
const dbRef = ref(database);

const chestRef = ref(database, "/chest");
const cardioRef = ref(database, "/cardio");
const absRef = ref(database, "/abs");
const legsRef = ref(database, "/legs");


const workoutUl = document.getElementById("workoutReturn");

const submitButton = document.querySelector('button');

let userWorkout = [];

function clearWorkout() {
    userWorkout = [];
} 

function clearReturn(){
    workoutUl.innerHTML = "";
}


submitButton.addEventListener('click', function(event){
    
    console.log(event);
    console.log('submit!');
    event.preventDefault();
    clearWorkout();
    clearReturn();

    // Checking if checkbox is checked
    const chestCheckbox = document.getElementById('chestWorkouts');
    const cardioCheckbox = document.getElementById('cardioWorkouts');
    const absCheckbox = document.getElementById('abWorkouts');
    const legsCheckbox = document.getElementById('legWorkouts');

    const workoutType = document.querySelectorAll('input[name=workouts]:checked');
    console.log(workoutType);

    const numOfWorkouts = document.querySelector('input[name=numOfWorkouts]');
    const numWorkoutValue = numOfWorkouts.valueAsNumber;

    // Fisher Yates Shuffling fuinction
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }

    function printWorkout(){


        // Create a new array to store unique workouts
  // const uniqueWorkouts = [];

  //       // Loop through userWorkout array and add unique workouts to the uniqueWorkouts array
  //       for (let i = 0; i < userWorkout.length; i++) {
  //         const workout = userWorkout[i];
  //         if (!uniqueWorkouts.some((w) => w.name === workout.name)) {
  //           uniqueWorkouts.push(workout);
  //         }
  //       }
 
         for (let i = 0; i < numWorkoutValue; i++) {
                const individualWorkout = userWorkout[i];
                //console.log(individualWorkout);
                const newListItem = document.createElement('li');
                newListItem.classList.add('workoutCard');
                newListItem.innerHTML = `
                <h2>${individualWorkout.name}</h2>
                `;
                workoutUl.appendChild(newListItem);
        }
    }
      
      // Calling the shuffle function after the userWorkout array is populated
      if (chestCheckbox.checked) {
        get(chestRef).then(function(snapshot) {
          if (snapshot.exists()) {
            const chestArray = snapshot.val();
            for (let i = 0; i < chestArray.length; i++) {
              userWorkout.push(chestArray[i]);
            }
            shuffle(userWorkout); // Shufflling the array
          }
          printWorkout();
        });
      }

      if (legsCheckbox.checked) {
        get(legsRef).then(function(snapshot) {
          if (snapshot.exists()) {
            const legsArray = snapshot.val();
            for (let i = 0; i < legsArray.length; i++) {
              userWorkout.push(legsArray[i]);
            }
            shuffle(userWorkout); // Shufflling the array
          }
          printWorkout();
        });
      }
      
      if (absCheckbox.checked) {
        get(absRef).then(function(snapshot) {
          if (snapshot.exists()) {
            const absArray = snapshot.val();
            for (let i = 0; i < absArray.length; i++) {
              userWorkout.push(absArray[i]);
            }
            shuffle(userWorkout); // Shuffling the array
          }
          printWorkout();
        });
      }
      
      if (cardioCheckbox.checked) {
        get(cardioRef).then(function(snapshot) {
          if (snapshot.exists()) {
            const cardioArray = snapshot.val();
            for (let i = 0; i < cardioArray.length; i++) {
              userWorkout.push(cardioArray[i]);
            }
            shuffle(userWorkout); // Shuffling the array
          }
          printWorkout();
        });
      }

console.log(userWorkout)

    // function randomItem(userWorkout, numWorkouts){


});
const ulParent = document.querySelector('#workoutReturn');
const originalContent = {};

ulParent.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    // Check if original content has been stored for this li element
    console.log(event)
    const liId = event.target.getAttribute('id');
    if (!originalContent[liId]) {
      originalContent[liId] = event.target.innerHTML;
    }

    // Toggle the flip-card class
    event.target.classList.toggle('flip-card');

    // Check if flip-card class has been removed
    if (!event.target.classList.contains('flip-card')) {
      // Restore original content
      event.target.innerHTML = originalContent[liId];
    } else {
      // Blank out the content
      event.target.innerHTML = '';
    }
  }
});



