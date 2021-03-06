'use strict';

// Defining Angular app model with all other dependent modules
var mostPopularListingsApp = angular.module('mostPopularListingsApp',['ngRoute']);

mostPopularListingsApp.config(function($routeProvider, $locationProvider, $httpProvider) {
	
	// Declaration of the default route if neither of the controllers
	// is supporting the request path
	console.log("app");
	$routeProvider.otherwise({ redirectTo: '/'});

	// Settings for http communications
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];

		// Just a housekeeping.
	// In the init method we are declaring all the
	// neccesarry settings and assignments to be run once
	// controller is invoked
	init();

	function init(){
        var config = {
            apiKey: "AIzaSyBar3vtv6h7gjSYcXw8sCRarRpL2xM8BMQ",
            authDomain: "alexa-1bd4b.firebaseapp.com",
            databaseURL: "https://alexa-1bd4b.firebaseio.com",
            storageBucket: "alexa-1bd4b.appspot.com",
            serviceAccount: {
                projectId: "alexa-1bd4b",
                clientEmail: "alexa-542@alexa-1bd4b.iam.gserviceaccount.com",
                privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDB9L5OF/BRnT0l\nlJzhU/7lMcfArWzHIyUe4/J3Pik+nwcYm4EKMhQ9P/+ABHmKdu/nA4rDE5wheyKE\nB9mnLro0qxhvt/3qczCBoZqdjpqBrYoWSCzMD0n/5kl8xTCmvJvbkjMOwvzX2CiK\nt3GpTbWh6yKFpFjkwM6RfF1EaVDryBnTzTlN3QEKhMm+UgXUe08MNEZvN8zM62vt\nP8yBjd3f9ym8PbWHIR7Q/L2KWi3Vjj1mWF+7vTyPwaH/iGOyOhSvKPmXrEQUlG8U\ntCi9SfYQsw9MLM88HJttzLHzdh3hPtMwwy+K/vXil/nKSbQ/TvGwbAece62OzJcB\nykpr4NX1AgMBAAECggEAKISzeOcBWltp2b75Iw2EE2dZ3oOcVOGfsJtYHNcMkLty\nJQ7fXzzlA4KqIplMtsNwDKetxmEDXe82X7SwIH/fgH85xKUAU4kq2fnjrgSLfIm/\nbjY3vY14HRCDy5/6MOr3+F/LcMsFPSY4GfqGsSK9zgysEpUpyOgKf1Qmu9Lwh8DQ\n3xpV/LUkcBbEdBWJNdWAvKZYsJTYWVKJtlSE8h5fnRs4e+Aym2SGjFQKF8hV+kGL\nIvLwnKbMp6CRHlvYKnDh+0QOXvGkWAyLGXT0SgkMIG5OKu8CRN8uqBN4pN8ezKys\nOra8GZasPNIPpN0IwaXA19wJ1hOfgxvwnTVQspp2oQKBgQD9PjGZKly0cqWsAF5Y\nfvi3Iq6lO30sVoqHZMSJsM7r7z0i6LaY3SlJcbHBYdj7P47OVvZY0Ds6T47nPtwE\nTYxh7qrqw7l0JUKBV1Dc+VJidGyUYYmutOOYfSgEyvyM1ZUTL5iMTOrKOfFq/bhO\neaP2DKZgQE1voY8xG7TCKMROrQKBgQDEEVAQRbK54ZOtN7weW+kMz9Qs5jbN5XyQ\n0qKUH3XSEbuC8c50woRCeu/XTpXYWuHiC89iMc5i1rwmHs1Fo+WeCANdn3/K/EyA\n2+JM4zl8SNqF41dunXJZgkOeP8JA46iJUrrOUU4VMVlheb1wfgZVkVGni39rXm58\njvgyO3X1aQKBgGewmXpPYBn6f19H31l407mYl83L59rJrHr3hYmjPXZZRL0QcANz\nOr55sQCvYbquMXjHHqMKz9V2UdrZYBja78oBgTYS4dJulyaCa/eulk79wJ+YuFky\nc6YySLp9qp63rQxoBpwbul8HDpRyQo7PO5U5ZL4wVgSJMCo5X+/H5WkZAoGAMgcA\n2MYP7mHiXmZEN7LX6g71YmdzQGH3wLQeC5FjbLBdmfG87gnb2WKo49UHYub9j8HX\nroRq1slXxJpDYiuJoSMGSNMztkVd99sjCN9Jga7NIzB41J6T2MbmHfDCze/IxxE2\n3QHd3IZ0+ewoLBXb4+VqYkezwV+c7WdFaPvHA1ECgYB6ogTfzXkVsiaD4rY6A84Q\n1zncy0JlG+CpGDFkrEJ3k5IvOjW8JMTc4fJK/iNugMzu3cMTIzrKVnfHZSLpo1tr\nyToeELL3TGycTpz0F9uNxY5Ak+ZlRjqceMR+8U87/rtItei9j5dGnCvAumr6hTUW\ncllSMVlozYnp0UWJ0BwGNQ==\n-----END PRIVATE KEY-----\n"
            }
        };
        firebase.initializeApp(config);
        var rootRef = firebase.database().ref();
        console.log("HomeController");
        rootRef.on('value', function(snapshot) {

			console.log(snapshot.val());
			var url = "";
			var win;
			if(snapshot.val() === "open ambev current status"){
				url = "https://saoap1011.dir.svc.accenture.com/single?appid=396cc447-0468-41d5-87a8-7586c1213b2b&sheet=PmtYCm&opt=nointeraction&select=clearall";
				console.log(url);
				win = window.open(url, '_blank');
  				win.focus();
			}else if(snapshot.val() === "open ambev historical data"){
				url = "https://saoap1011.dir.svc.accenture.com/single?appid=396cc447-0468-41d5-87a8-7586c1213b2b&sheet=3d7dbedd-b023-43c6-ac6d-744cbca48e76&opt=nointeraction&select=clearall";
				console.log(url);
				win = window.open(url, '_blank');
  				win.focus();
			}
		});

		rootRef.remove();
	};

});