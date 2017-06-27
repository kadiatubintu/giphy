$(document).ready(){
	 // var topic = [" ", " ", " ", " ", " "," ", " ", " ", " ", " "," ", " ", " ", " ", " "]

	  var topic = ["The Matrix", "The Notebook", "Mr. Nobody", "The Lion King"];

      // Function for displaying movie data
      function renderButtons() {

        // YOUR CODE GOES HERE
        $("#movies-view").empty();
        for (var i = 0; i < topic.length; i++){
          $("#movies-view").append("<button>" + topic[i] + "</button>");
        }

      }

      // This function handles events where one button is clicked
      $("#add-movie").on("click", function(event) {

        // YOUR CODE GOES HERE

        event.preventDefault();
        var topicInput = $("#topic-input").val()
        input.push(topicInput);

      // Calling the renderButtons function to display the initial list of movies
      renderButtons();
            });
      renderButtons();


}