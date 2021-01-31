$(function () {
	$(".create-form").on("submit", function (event) {
		// Make sure to preventDefault on a submit event.
		event.preventDefault();

		var newBurrito = {
			burrito_name: $("#ca").val().trim(),
			devoured: $("[name=devoured]:checked").val().trim()
		};

		// Send the POST request.
		$.ajax("/api/burritos", {
			type: "POST",
			data: newBurrito
		}).then(
			function () {
				console.log("created new burrito");
				// Reload the page to get the updated list
				location.reload();
			}
		);
	});

	$(".change-devour").on("click", function (event) {
		let id = $(this).data("id");
		let newDevour = $(this).data("newdevour");

		console.log(`value of newDevour ${newDevour}`);

		let newDevourState = {
			devoured: newDevour
		};
		console.log(newDevourState);

		//Send the PUT request
		$.ajax("/api/burritos/" + id, {
			type: "PUT",
			data: newDevourState
		}).then(
			function () {
				console.log("changed devour to ", newDevour);
				location.reload();
			}
		);
	});



});

