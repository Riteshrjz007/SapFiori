sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"travellistreport/test/integration/pages/TravelList",
	"travellistreport/test/integration/pages/TravelObjectPage"
], function (JourneyRunner, TravelList, TravelObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('travellistreport') + '/test/flp.html#app-preview',
        pages: {
			onTheTravelList: TravelList,
			onTheTravelObjectPage: TravelObjectPage
        },
        async: true
    });

    return runner;
});

