// content.js
console.log("runs mitch.js at startup")

// Static Variables
var numJokes = 274;
var currentJokeIndex;

function setLocalBytesAndIndex(bytes) {
    console.log("Local bytes stored = ");
    console.log(bytes);
    if (bytes == 0) {
        currentJokeIndex = 0;
        console.log("inside undefined");
        chrome.storage.sync.set({'currentJokeIndex': currentJokeIndex}, function()
        {
        console.log('Initialized local currentJokeIndex to ' + currentJokeIndex);
        console.log('Initialized local currentJokeIndex to ' + currentJokeIndex);
    });
    } else {
        console.log("inside defined");
        chrome.storage.local.get('currentJokeIndex', function(object){
            console.log("currentJokeIndex");
            console.log(object + 1);
            currentJokeIndex = object + 1;
            //    console.log("retrieved joke index");
        });
    }
}

// function getSyncBytes(settings) {
//     var keys = Object.keys(settings);
//     chrome.storage.sync.getBytesInUse(keys, setSyncBytes);
// }

function getLocalStorage(settings) {
    var keys = Object.keys(settings);
    console.log("keys");
    console.log(keys);
    currentJokeIndex = 0;
    if(keys.length == 0) {
        chrome.storage.local.set({'currentJokeIndex': currentJokeIndex}, function()
        {
            chrome.storage.local.get(null, function(storage){
                console.log("just set storage to :");
                console.log(storage);
            });
            console.log('Initialized local currentJokeIndex to ' + currentJokeIndex);
        });
    } else {
        chrome.storage.local.get("currentJokeIndex", function(result){
            console.log("local storage result");
            console.log(result);
            currentJokeIndex = result.currentJokeIndex + 1;
            chrome.storage.local.set({'currentJokeIndex': currentJokeIndex}, function() {
                console.log("set new currentJokeIndex");
                console.log(currentJokeIndex);
            });


            //    console.log("retrieved joke index");
        });

        chrome.storage.sync.set({'currentJokeIndex': currentJokeIndex}, function()
        {
            console.log('Initialized local currentJokeIndex to ' + currentJokeIndex);
        });
    }
    // chrome.storage.local.getBytesInUse(keys, setLocalBytesAndIndex);
}

//Utility Functions
function randomIntFromInterval(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}

// function setBytes(bytes) {
//     console.log("bytes used:");
//     console.log(bytes);
//     bytesStored = bytes;
// }

// Main function that kicks everything off.
function setNextJoke() {

    // chrome.storage.sync.get(null, getSyncBytes);
    chrome.storage.local.get(null, getLocalStorage);

    // chrome.storage.sync.get(['currentJokeIndex'], function(result) {
    //     console.log("result");
    //     console.log(result);
    //   console.log('currentJokeIndex is ' + result.key);



      // gets the number of bytes used in sync storage area
    //   chrome.storage.sync.getBytesInUse(['settings'], logBytes);

      // gets the number of bytes used in the local storage area
    //   chrome.storage.local.getBytesInUse(['settings'], logBytes]);
    //   var bytesInUse = chrome.storage.local.getBytesInUse(null, setBytes);
    //   console.log("Again bytes");
    //   console.log(bytesInUse);



    }

setNextJoke();
    // Get index of next joke.
    // var nextJokeIndex = randomIntFromInterval(0,274);
    // console.log(nextJokeIndex);

    // Retrieve that joke from file.
    // var joke = $.getJSON( "jokesList.json", function(data) {
    //     console.log("Data type of data = ");
    //     console.log(typeof data);
    //     console.log("data");
    //     console.log(data);
    //
    //     return data[nextJokeIndex].Joke;
    // });
    // console.log("joke = " + joke);

    // Assign handlers immediately after making the request,
// and remember the jqxhr object for this request
// var joke;
//
// var jqxhr = $.getJSON( "jokesList.json", function (data) {
//   console.log( "success" );
//   console.log(data.responseJSON);
//   joke = data[nextJokeIndex].Joke;
//   comedian = data[nextJokeIndex].Comedian;
//   $(".cover-heading").html(joke);
//   $(".comedian").html("- " + comedian);
//   })
//
//   .done(function() {
//     console.log( "second success" );
//   })
//   .fail(function() {
//     console.log( "error" );
//   })
//   .always(function() {
//     console.log( "complete" );
//   });


  // console.log("jqxhr");
  // console.log(jqxhr);
  // return jqxhr;
// }




// chrome.storage.sync.set({key: value}, function() {
//   console.log('Value is set to ' + value);
// });
//
// chrome.storage.sync.get(['key'], function(result) {
//   console.log('Value currently is ' + result.key);
// });

// function saveChanges() {
//   // Get a value saved in a form.
//   var theValue = textarea.value;
//   // Check that there's some code there.
//   if (!theValue) {
//     message('Error: No value specified');
//     return;
//   }
//   // Save it using the Chrome extension storage API.
//   chrome.storage.sync.set({'value': theValue}, function() {
//     // Notify that we saved.
//     message('Settings saved');
//   });
// }
