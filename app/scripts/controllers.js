angular.module('starter.controllers', [])

.controller('RecommendCtrl', ['$scope',function($scope) {

  $scope.sign = function(){
    console.log('签到');
    location.href='#/about';
  };
  $scope.task = function(){
    console.log('附近的人');
    location.href='#/about';
  };
  $scope.newGames=[
    {'name':'卡通足球宴','image':'images/y1.png','url':''},
    {'name':'带球冲刺','image':'images/y2.png','url':''},
    
  ];
  $scope.hotGames=[
    {'name':'开心找弹珠','image':'images/y3.png','url':''},
    {'name':'六角碎片','image':'images/y4.png','url':''},
    {'name':'大白回家','image':'images/y5.png','url':''},
    {'name':'疯狂撑杆跳','image':'images/y6.png','url':''},
    {'name':'足球明星2','image':'images/y7.png','url':''},
    {'name':'一起摇摆','image':'images/y8.png','url':''},
    {'name':'植物大战僵尸','image':'images/y9.png','url':''},
    {'name':'沿着线走','image':'images/y10.png','url':''},
    {'name':'一笔练成','image':'images/y11.png','url':''},
    {'name':'电动切割狂','image':'images/y12.png','url':''},
    {'name':'插插插','image':'images/y13.png','url':''},
    {'name':'小白人快跑','image':'images/y14.png','url':''},
  ];
  
}])

.controller('DiscoverCtrl', ['$scope',function($scope) {
 
}])



.controller('AccountCtrl', ['$scope',function($scope) {
 
}]);
