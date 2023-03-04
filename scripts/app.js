import app from "./firebase-setup.js";

import { ref, getDatabase, onValue, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"

const database = getDatabase(app);
const dbRef = ref(database);

const chestRef = ref(database, "/chest");
const cardioRef = ref(database, "/cardio");
const absRef = ref(database, "/abs");

const workoutUl = document.getElementById("workoutReturn");

const submitButton = document.querySelector('button');

let userWorkout = [];

function clearWorkout() {
    userWorkout = [];
} 



submitButton.addEventListener('click', function(event){
   
    console.log(event);
    console.log('submit!');
    event.preventDefault();
    clearWorkout();

    // Checking if checkbox is checked
    const chestCheckbox = document.getElementById('chestWorkouts');
    const cardioCheckbox = document.getElementById('cardioWorkouts');
    const absCheckbox = document.getElementById('abWorkouts');

    const workoutType = document.querySelectorAll('input[name=workouts]:checked');
    console.log(workoutType);

    const numOfWorkouts = document.querySelector('input[name=numOfWorkouts]');


    // Fisher Yates Shuffling fuinction
    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
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
        });
      }

console.log(userWorkout)
    })






    