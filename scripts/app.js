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

    // Referencing database and publishing workout arrays
    
    // get(chestRef).then(function(snapshot) {
    //     if(snapshot.exists()){
    //         const chestArray = (snapshot.val());
    //         console.log(chestArray)
    //     }
    // })

    // get(cardioRef).then(function(snapshot) {
    //     if(snapshot.exists()){
    //         const cardioArray = (snapshot.val());
    //         console.log(cardioArray);
    //     }
    // })

    // get(absRef).then(function(snapshot) {
    //     if(snapshot.exists()){
    //         const abArray = (snapshot.val());
    //         console.log(abArray);
    //     }
    // })

    // We need something that will check what checkboxes are checked, and if they are will push the workout arrays into our empty WorkoutList array.

    if (chestCheckbox.checked) {
        get(chestRef).then(function(snapshot) {
            if(snapshot.exists()){
                const chestArray = (snapshot.val());
                for (let i = 0; i < chestArray.length; i++) {
                    (userWorkout.push(chestArray[i]));
                }
            }
        })
    }

    if (absCheckbox.checked) {
        get(absRef).then(function(snapshot) {
            if(snapshot.exists()){
                const absArray = (snapshot.val());
                for (let i = 0; i < absArray.length; i++) {
                        (userWorkout.push(absArray[i]));
                    }
                }
            }
    )   }


    if (cardioCheckbox.checked) {
        get(cardioRef).then(function(snapshot) {
            if(snapshot.exists()){
                const cardioArray = (snapshot.val());
                for (let i = 0; i < cardioArray.length; i++) {
                    (userWorkout.push(cardioArray[i]));
                }
            }
        })
    }


    // Now we can read what types of workouts were submitted. Now we need it to log the input workout number. Check out submit is tracking the right number.
    const numOfWorkouts = document.querySelector('input[name=numOfWorkouts]');
    console.log(numOfWorkouts.value);


    console.log(userWorkout);

    })




    