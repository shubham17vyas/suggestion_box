app.controller("SuggestionController", ['$scope', '$routeParams', 'suggestions', function($scope, $routeParams, suggestions){
    $scope.post = suggestions.posts[$routeParams.id];
    console.log($routeParams.id);
    $scope.addComments = function(){
        //if input empty, don't submit
        if(!$scope.post.new_comment || $scope.post.new_comment === "") {
            return;
		}
		 
		//push suggestion posts in suggestions.js
		$scope.post.new_comment.push({
			body: $scope.new_comment,
			upvotes: 0,
		});
		 
		//after submit, clear input
		$scope.post.new_comments = '';
    };
    $scope.upVoteComments = function(comment){
        comment.upvotes += 1; 
    };
    $scope.post.new_comment = '';
}]);