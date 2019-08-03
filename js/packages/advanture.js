var AdventureTravel = (function () {

    var adventureList = {
        "Iceland": {
            name: "Iceland",
            economy: {
                title: "Iceland",
                cover: 'images/Iceland.jpeg',
                sideBar: ["8 days", "3 star hotels"],
                description: 'Golden circle, Jokulsarlon, Seljalandsfoss',
                featureTitle: 'Features',
                featureLists: [
                    '7N/8D package',
                    'Blue Lagoon',
                    'Amphibian Boat tour',
                ],
                images: [
                    'images/Iceland.jpeg',
                    'images/Camping.jpeg',
                    'images/Selja.jpeg',
                ]
            },
        
        },
        "Australia": {
            name: "Australia",
            economy: {
                title: "Australia",
                cover: 'images/whitewater.jpg',
                sideBar: ["8 days", "3 star hotels"],
                description: 'White Water Rafting, Sydney bridge climbing, Ningaloo reef Snorkeling',
                featureTitle: 'Features',
                featureLists: [
                    '7N/8D package',
                    'Sydney jet-boat ride',
                    'Fraser Island',
                ],
                images: [
                    'images/whitewater.jpg',
                    'images/bridgeclimb.jpg',
                    'images/snorkelninga.jpg',
                ]
            }
        }
    }

    function loadAdventureDestinations() {
        var html = '', i = 0;

        for (var key in adventureList) {
            html += "<li><a href='/adventure?" + key + "'>" + adventureList[key].name + "</a></li>";

            // display only first 4
            i++;
            if (i == 4) break;
        }

        html += "<li><a href='/adventure'>View All</a></li>"
        $('.adventureDestinations').html(html);
    }

    return {
        adventureList: adventureList,
        loadAdventureDestinations: loadAdventureDestinations
    }
})();