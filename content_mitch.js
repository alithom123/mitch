// content.js
console.log("runs content_mitch.js when new tab loads I think")

// Main function that kicks everything off.
function setNextJoke() {

    console.log('in setNextJoke');


    var joke_index;
    var num_jokes;
    var joke_list;

    chrome.storage.local.get(['joke_index','num_jokes','joke_list'], function (values) {

        var joke_index = values.joke_index;
        var num_jokes = values.num_jokes;
        var joke_list = values.joke_list;

        var joke_fits = false;
        var joke;

        while(!joke_fits) {

            joke = joke_list[joke_index].Joke;

            if(joke.length < 250)
            {
                joke_fits = true;
            }
            else
            {
                joke_index++;
            }
        }

        var comedian = joke_list[joke_index].Comedian;

        console.log('Got joke = ' + joke);
        $("#joke").text(joke);
        $("#comedian").text("- " + comedian);
        $("#masthead").text(comedian);

        joke_index = (joke_index + 1) % num_jokes;

        console.log("Here are the local storage values.");
        console.log(values);

        chrome.storage.local.set({'joke_index': joke_index}, function()
        {
            console.log('Updated joke_index to ' + joke_index);
        });

    });
    }

setNextJoke();
