// #8. Add a string of data to the controller scope the the text "This is an expression".
app.controller("myCtrl",function($scope) {
	// #10. Using an Angular expression, display the text "This is an expression" in an already existing h1.
	$scope.name = {
		text: "This is an expression"
	}
})

// #14. Create an array of objects using Angular $scope.
app.controller("usersCtrl", function($scope) {
	$scope.users = [
		{ 
		  email: "amy@gmail.com",
		  password: "password1"
		},
		{ 
		  email: "nate@gmail.com",
		  password: "password2"
		},
		{ 
		  email: "bob@gmail.com",
		  password: "password3"
		}
	]

})