var app =angular.module("myApp", []);
app.controller("myCtrl",function($scope){
	$scope.items=["Honey", "Cheese", "Lemon"];
	$scope.addItem=function(){
		$scope.errortext="";
		if(!$scope.addMe){
			return;
		}
		if($scope.items.indexOf($scope.addMe)==-1){
		$scope.items.push($scope.addMe);
        

	}
	else{
		$scope.errortext="This item is already in your list.";
	}
	}
	$scope.removeItem=function(x){
		$scope.errortext="";
		$scope.items.splice(x,1);
	}
	$scope.getTotalItems=function(){
		return $scope.items.length;
	}
	
});