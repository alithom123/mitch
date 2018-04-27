// content.js
console.log("runs content.js at startup")
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if( request.message == "search_for_links" ) {
      console.log("Received search_for_links message in content.js");
      console.log(request);

      var links = [];

      var componentConsoleHref = $(".mhm").attr("href");
      // var componentConsoleHref = $('a[class=mhm]').attr('href')
      console.log("Heres your link:")
      console.log(componentConsoleHref);
      links.push(componentConsoleHref);

      var headers = $("th").filter(function() {
          return $(this).text() === "URL";
      });//.css("text-decoration", "underline"); // take out the underline function.

      console.log("Offsite Links:");

      // This works but nor for multiple headers.
      //console.log($(headers).next().find("a").attr("href"));

      $(headers).each(function () {
         links.push($(this).next().find("a").attr("href"));
      });


      console.log(links);

      console.log("About to send message with " + links.length + "links.");
      chrome.runtime.sendMessage({"message": "open_new_tabs", "links": links});

    }
  }
);
