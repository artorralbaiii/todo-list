angular.module('TodoList')

.controller('HomeController', function($scope){

	$scope.todos = [
		{ 
			date: '08/01/2016',
			tasks: [
				{title: 'Task 1', completed: false},
				{title: 'Task 2', completed: true},
				{title: 'Task 3', completed: false},
				
			],
			editMode: false
		},
		{ 
			date: '08/02/2016',
			tasks: [
				{title: 'Task 1', completed: false},
				{title: 'Task 2', completed: true},
				{title: 'Task 3', completed: false},
				
			],
			editMode: false
		}
	];

	$scope.editDate = function(index){
		$scope.todos[index].editMode = !$scope.todos[index].editMode;
	}

});