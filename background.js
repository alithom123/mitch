console.log("in background.js for main extension.");
// background.js

    chrome.runtime.onInstalled.addListener(function() {

      // Get number of jokes by reading in json and checking size. Probably store it in storage also. Not that much.
      var num_jokes;
      var jokes_list;
      $.getJSON("jokesList.json", function(json) {
          num_jokes = json.length;
          console.log('num_jokes var set to ' + num_jokes);
          jokes_list = json;
          console.log('jokes_list var set to ' + jokes_list);

          chrome.storage.local.set({'joke_index': 0, 'num_jokes': num_jokes, 'joke_list': json}, function(){
                console.log('variables stored locally');
          });
      });
    });

    chrome.tabs.onCreated.addListener(function(tab) {
        //Load html template.  DONE in manifest.json "chrome_url_overrides" : { "newtab": "mitch.html"}
        //Get next joke from storage.
        //Increment value for joke_index & put in storage.
        //Populate html with joke.
    });
