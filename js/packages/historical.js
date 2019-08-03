var HistoricalTravel = (function () {

    var historicalList = {
        "egypt": {
            name: "Egypt",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "jordan": {
            name: "Jordan",
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "india": {
            name: "India",
            economy: {
                sideBar: ["8 days", "flight included", "3 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
        },
        "romania": {
            name: "Romania",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
        }
    };

    function loadHistoricalDestinations() {
        var html = '';
        var i = 0;
        for (var key in historicalList) {
            html += "<li><a href='/historical?" + key + "'>" + historicalList[key].name + "</a></li>"
            
            // display only first 4
            i++;
            if (i == 4) break;
        }
        html += "<li><a href='/historical'>View All</a></li>"
        $('.historicalDestinations').html(html);
    }

    return {
        historicalList: historicalList,
        loadHistoricalDestinations: loadHistoricalDestinations
    }
})();