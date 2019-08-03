var HoneymoonTravel = (function () {

    var honeymoonLists = {
        "borabora": {
            name: "Bora Bora",
            economy: {
                title: "Bora Bora",
                cover: 'images/dubai1.jpeg',
                sideBar: ["8 days", "flight included", "2 star hotels"],
                description: 'Universal studios, Garden by the bay, Night Safari, Singapore zoo, Jurong bird park, Flyer',
                featureTitle: 'Features',
                featureLists: [
                    '7N/8D package',
                    '3 star hotels',
                    '1 night stay at Sentosa',
                    '2 nights at the cruise',
                ],
                images: [
                    'images/dubai1.jpeg',
                    'images/dubai1.jpeg',
                    'images/dubai1.jpeg',
                ],
            }
        },
        "swiz": {
            name: "Switzerland",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai3.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/Gardenbythebay.jpeg'
            }
        },
        "bermuda": {
            name: "Bermuda",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "fiji": {
            name: "Fiji Islands",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"]
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"]
            }
        },
        "belize": {
            name: "Belize",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"]
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"]
            }
        },
        "bahamas": {
            name: "Bahamas",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"]
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"]
            }
        }
    };

    function loadHoneymoonDestinations() {
        var html = '';

        var i = 0;
        for (var key in honeymoonLists) {
            html += "<li><a href='/honeymoon?" + key + "'>" + honeymoonLists[key].name + "</a></li>";

            // display only first 4
            i++;
            if (i == 4) break;
        }

        html += "<li><a href='/honeymoon'>View All</a></li>"
        $('.honeymoonDestinations').html(html);
    }

    return {
        honeymoonLists: honeymoonLists,
        loadHoneymoonDestinations: loadHoneymoonDestinations
    }

})();
