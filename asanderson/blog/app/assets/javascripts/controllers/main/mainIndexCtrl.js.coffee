@IndexCtrl = ($scope, $location, $http, postData) ->

	$scope.data = postData.data

	postData.loadPosts()

	$scope.viewPost = (postId) ->
		$location.url('/post/'+postId)

	$scope.navNewPost = ->
		$location.url('/post/new')