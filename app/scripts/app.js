'use strict';

/**
 * @ngdoc overview
 * @name baiduNewsApp
 * @description
 * # baiduNewsApp
 *
 * Main module of the application.
 */
angular
	.module('baiduNewsApp', [])
	.controller('nalNews', ['$scope', '$http', function(scope, http) {
		http({
			url: 'http://47.90.20.200:1602/news1/',
			method: 'get'
		}).then(function(e) {
			scope.data = e.data
//			console.log(scope.data)
		}, function(e) {

		})
		http({
			url: 'http://47.90.20.200:1602/news-img1/',
			method: 'get'
		}).then(function(e) {
			scope.img1 = e.data
//			console.log(scope.img1)
		}, function(e) {

		})
		http({
			url: 'http://47.90.20.200:1602/news2',
			method: 'get'
		}).then(function(e) {
			scope.data2 = e.data
//			console.log(scope.data)
		}, function(e) {

		})
		http({
			url: 'http://47.90.20.200:1602/news-img2/',
			method: 'get'
		}).then(function(e) {
			scope.img2 = e.data
//			console.log(scope.img1)
		}, function(e) {

		})
	}])
	.directive('new', [function() {
		return {
			restrict: 'CAME',
			templateUrl: "views/main.html",
			replace: true,
			scope: {
				data: '=coco',
				data2: '@coco2',
				img1: '=coco3'
			},
			link: function(s, e, a) {}
		}
	}])
	.filter('maxLen', function() {
		return function(e) {
			if(e.length>=20){
//				return e.splice(10,(e.length-10),'...')
				return e.substr(0,20)+'...'
			}else{
				return e
			}
		}
	})