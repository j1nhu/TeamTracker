angular.module('starter.service',[])
.factory('notification', function(){
	
	var green = [ 
			{    
                "name":"LeaderD",
                "title":"This is Sparta!",
                "time":"2015-06-12 3:00"
           },
           {    "name":"LeaderE",
                "title":"every thing is good",
                "time":"2015-08-12 17:00"
           },
           {     "name":"LeaderF",
                "title":"all good",
                "time":"2015-08-29 13:00"
           }];
	var red = [ 
			{    "name":"LeaderB",
                "title":"we are under attack",
                "time":"2015-08-12 13:00"
           },
           {    
                "name":"LeaderA",
                "title":"I hate this job",
                "time":"2015-08-13 12:00"
           },
           {    
                "name":"LeaderC",
                "title":"oh no",
                "time":"2015-08-20 13:45"
           }];
	return{
		allGreen :function(){
			return green;
		},
		allRed:function(){
			return red;
		},
		getRed:function(name){
			for(var i=0;i<red.length;i++){
				if(red[i].name === name){
					return red[i];
				}
			}
			return null;
		},
		getGreen:function(name){
			for(var i=0;i<green.length;i++){
				if(green[i].name === name){
					return green[i];
				}
			}
			return null;
		}

	}
})
