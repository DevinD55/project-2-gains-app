import app from "./firebase-setup.js";

import { ref, getDatabase, onValue, get } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-database.js"

const database = getDatabase(app);
const dbRef = ref(database);

const chestRef = ref(database, "/chest");
const cardioRef = ref(database, "/cardio");
const absRef = ref(database, "/abs");

const workoutUl = document.getElementById("workoutReturn");

const workoutList = '[]';

const submitButton = document.querySelector('button');


submitButton.addEventListener('click', function(event){
    console.log(event);
    console.log('submit!');
    event.preventDefault();

    // Checking if checkbox is checked
    const chestCheckbox = document.getElementById('chestWorkouts');
    const cardioCheckbox = document.getElementById('cardioWorkouts');
    const absCheckbox = document.getElementById('abWorkouts');

    const workoutType = document.querySelectorAll('input[name=workouts]:checked');
    console.log(workoutType);

    // Referencing database and publishing workout arrays
    get(chestRef).then(function(snapshot) {
        if(snapshot.exists()){
            console.log(snapshot.val());
        }
    })

    get(cardioRef).then(function(snapshot) {
        if(snapshot.exists()){
            console.log(snapshot.val());
        }
    })

    get(absRef).then(function(snapshot) {
        if(snapshot.exists()){
            console.log(snapshot.val());
        }
    })

    // We need something that will check what checkboxes are checked, and if they are will push the workout arrays into our empty WorkoutList array.

    

    // Now we can read what types of workouts were submitted. Now we need it to log the input workout number. Check out submit is tracking the right number.
    const numOfWorkouts = document.querySelector('input[name=numOfWorkouts]');
    console.log(numOfWorkouts.value);
    // numOfWorkouts.value will give us the number.


    // function randomItem(anyArray, numWorkouts){

    //     const shuffledArray= anyArray.sort (() => Math.floor(Math.random() * anyArray.length))
    //     return shuffledArray.slice(0,numWorkouts)
    // };
    // randomItem();
    
    // const workout = randomItem(workoutType, numOfWorkouts.value);
    // console.log(workout)

    })
