var FamilyTravel = (function () {

    var familyTravelDestinations = {
        "greece": { 
            name: "Greece",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "indonesia": { 
            name: "Indonesia",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "australia": { 
            name: "Australia",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "iceland": { 
            name: "Iceland",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        },
        "southafrica": { 
            name: "South Africa",
            economy: {
                sideBar: ["8 days", "flight included", "2 star hotels"],
                cover: 'images/dubai1.jpeg'
            },
            luxury: {
                sideBar: ["16 days", "flight included", "4-5 star hotels"],
                cover: 'images/dubai2.jpeg'
            }
        }
    };

    function loadFamilyTravelDestinations() {
        var html = '';

        var i = 0;
        for (var key in familyTravelDestinations) {
            html += "<li><a href='/family?" + key + "'>" + familyTravelDestinations[key].name + "</a></li>";

            // display only first 4
            i++;
            if (i == 4) break;
        }

        html += "<li><a href='/family'>View All</a></li>"
        $('.familyTravelDestinations').html(html);
    }

    return {
        familyTravelDestinations: familyTravelDestinations,
        loadFamilyTravelDestinations: loadFamilyTravelDestinations
    }
})();