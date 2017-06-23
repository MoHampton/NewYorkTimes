
$(document).ready(function() {
  var searchTerm = "&q=" + "donald trump"
  var records = "10"
  var beginDate = "&begin_date=" + ""
  //var endDate = "&end_date=" + ""
  var apiKey = "?api-key=3b2b65e618f34ee48918c42b1f9efcc6"
  var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + apiKey + searchTerm;

  $.ajax({url: queryURL, method: "get"})
  .done( function(result) {
    
    var i = 0
    while (i < records) {

     

      var stuff = result.response.docs[i]
      console.log(stuff)
      // Container for article content
      var articleContent = $("<div>")
      articleContent.appendTo($(".panel-body"))

      // Number and title of article
      var title = $("<h2>")
      title.html("<span id='headNum'>"+ i + "</span>" + " " + stuff.headline.main)
      title.appendTo(articleContent)

      var details  = $("<p>")
      details.html("<p>Written " + stuff.byline.original + "</p><br><p>Section: " + stuff.section_name + "</p><br><p>" + stuff.pub_date + "</p><br><a href=" +stuff.web_url+ ">" + stuff.web_url + "</p>")
      details.appendTo(articleContent)

       i++;

    }

  });




});
