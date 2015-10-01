angular.module('starter.controller', [])
    .controller('loginCtrl', function($scope,$state,$ionicPopup) {
   $scope.infor = {};
        $scope.login = function() {
            if ($scope.infor.username === "helen" && $scope.infor.password ==='helen') {
                $state.go('main')
            } else {
               var alertPop = $ionicPopup.alert({
                        title:'Wrong Credentials',
                        template:'Please check your credentials'
                    });
            }

        }
    })
       .controller('mainCtrl',function($scope,$state){
            $scope.goMonitor = function(){
                $state.go('monitor')
            }
            $scope.goReport= function(){
                $state.go('report');
            }
    })
       .controller('monitorCtrl', function($scope,$state,$ionicHistory,notification){
           $scope.search = {};
           $scope.leadersR = notification.allRed();//marked as red
           $scope.leadersG = notification.allGreen();//marked as green
           $scope.goBack = function(){
            $ionicHistory.goBack();
           }
       })

        .controller('issueCtrl',function($scope,$stateParams,$ionicHistory,notification){
          $scope.name = notification.getRed($stateParams.name);
          $scope.goBack = function(){
            $ionicHistory.goBack();
           }
        })
        .controller('reportCtrl',function($scope, $ionicHistory, $ionicPopup, $timeout){
            $scope.goBack = function(){
                $ionicHistory.goBack();
            }
			
			$scope.showConfirm = function() {
			   var confirmPopup = $ionicPopup.confirm({
				 title: 'Confirm',
				 template: 'Sent report !'
			   });
			   confirmPopup.then(function(res) {
				 if(res) {
				   console.log('You are sure');
				 } else {
				   console.log('You are not sure');
				 }
			   })
			}
           //  $ionicHistory.goBack();
           // }
        })
		
