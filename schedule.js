
            // Initialize Firebase
            var config = {
                apiKey: "AIzaSyDqu-tEjyRr0V4ejqjfVVaZerBz-zPvn9k",
                authDomain: "first-firebase-35357.firebaseapp.com",
                databaseURL: "https://first-firebase-35357.firebaseio.com",
                projectId: "first-firebase-35357",
                storageBucket: "first-firebase-35357.appspot.com",
                messagingSenderId: "148194101493"
            };
            firebase.initializeApp(config);

    var database = firebase.database();

    $(".addTrain").on("click", function(event) {
        event.preventDefault();

      // Grabs user input
  var trainName = $("#inputTrain").val().trim();
  var trainDest = $("#inputDestination").val().trim();
//   var trainTime = moment($("#inputTrainTime").val().trim(), "HH:mm").format("X");
  var trainFreq = $("#inputFrequencyt").val().trim();

  var newTrain = {
      name: trainName,
      destination: trainDest,
    //   time: trainTime,
      frequency: trainFreq
  };

database.ref().push(newTrain);

console.log(newTrain.name);
console.log(newTrain.destination);
// console.log(newTrain.time);
console.log(newTrain.frequency);

$("#inputTrain").val("");
$("#inputDestination").val("");
// $("#inputTrainTime").val("");
$("#inputFrequencyt").val("");
    });
