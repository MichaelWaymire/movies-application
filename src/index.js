/**
 * es6 modules and imports
 */


import sayHello from './hello';
sayHello('World');



/**
 * require style imports
 */

const {getMovies} = require('./api.js');




$("#info").append("Now Loading");





//a

function loadData(){ $.ajax("/api/movies").done(function(data) {
	$("#info").html("");
	data.forEach(function (movie) {
		$("#info").append(`<table><li>${movie.id}</li> <tr>Title</tr><li>${movie.title}</li>   <li>${movie.rating}</li>
 			<li><button id="${movie.id}">Remove</button></li><hr class="spaceThatHr"></table>`);
		// $("#rating").append(movie.rating);



		//Delete Button!
		//function is calling the button that is being made in the LoadData Function
		$("#info button").click(function(event) {

			//prevents the page from reloading
			event.preventDefault();

			// target grabs the information, id is movies.id
			let target = event.target;
			let id = target.id;
			console.log(id);

			// ajax request to delete the infomration
			$.ajax(`/api/movies/${id}`, {
				method: "DELETE",
				dataType: "json",
				data: {
					title: $("#movieTitle").val(),
					rating: $("#ratingRadio").val()
				}
			});
			//call the funcation
			loadData();
		});

	})
})
}
$(document).ready(loadData());

$("#addData").click(function (event) {

	// prevents the page from refreshing
	event.preventDefault();
	// console.log to see if the info from the fields are being pulled.
	// console.log($("#movieTitle").val());
	// console.log($("#ratingRadio").val());
	$.ajax("/api/movies", {
		type: "POST",
		dataType: "json",
		data: {
			title: $("#movieTitle").val(),
			rating: $("#ratingRadio").val()
		}
	});

	$("#info").append(`${$("#movieTitle").val()}   ${$("#ratingRadio").val()}<button class="removeButton">Remove</button><hr class="spaceThatHr">`);

});


// $("#info button").click(function(event) {
// 	event.preventDefault();
// 	// $(this).remove();
// 	let target = event.target;
// 	let id = target.id;
// 	console.log(id);
//
// 	// console.log($(this).attr("id"));
// 	$.ajax("/api/movies", {
// 		type: "DELETE",
// 		dataType: "json",
// 		data: {
// 			title: $("#movieTitle").val(),
// 			rating: $("#ratingRadio").val()
// 		}
// 	});
//
// });






// getMovies().then((movies) => {
//   $("#loading").fadeOut(2000);
//
//
//   console.log('Here are all the movies:');
//   movies.forEach(({title, rating, id}) => {
//     console.log(`id#${id} - ${title} - rating: ${rating}`);
//   });
// }).catch((error) => {
//   alert('Oh no! Something went wrong.\nCheck the console for details.')
//   console.log(error);
// });