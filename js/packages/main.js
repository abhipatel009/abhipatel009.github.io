$(document).ready(function () {
    includeHTML();

    var dymamicContent = setInterval(function () {
        if ($('.honeymoonDestinations')) {
            clearInterval(dymamicContent);
            loadDynamicData();
            setProperActiveClassToMenu();
        }
    }, 10);
});


function loadDynamicData() {
    var currentPage = window.location.pathname.replace('#', '').replace('/', '').toLowerCase();
    var search = window.location.search.replace('?', '');
    var lists = {};
    switch (currentPage) {
        case 'honeymoon': {
            lists = HoneymoonTravel.honeymoonLists;
            break;
        }
        case 'historical': {
            lists = HistoricalTravel.historicalList;
            break;
        }
        case 'family': {
            lists = FamilyTravel.familyTravelDestinations;
            break;
        }
        case 'adventure': {
            lists = AdventureTravel.adventureList;
            break;
        }
    }
    switch (currentPage) {
        case 'adventure':
        case 'family':
        case 'historical':
        case "honeymoon": {
            var html = '';
            for (var i in lists) {
                if (search && i != search) continue;
                var destination = lists[i];
                if (destination.economy) {
                    // animate-box
                    var openModal = "openModal('" + i + "','" + "economy" + "')";
                    html += '<div class="col-md-6">';
                    html += '<div class="car package-hover"  style="width:99%" onClick="' + openModal + '">';
                    html += '<div class="one-4  py-4 px-4">';
                    html += '<h3>' + destination.name + '</h3>';
                    for (var j = 0; j < destination.economy.sideBar.length; j++) {
                        html += '<span class="price"><small>' + destination.economy.sideBar[j] + '</small></span>';
                    }
                    html += '</div>';
                    var cover = destination.economy.cover || DEFAULT_IMAGE;
                    html += '<div class="one-1" style="background-image: url(' + cover + ');">';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }
                if (destination.luxury) {
                    // animate-box
                    var openModal = "openModal('" + i + "','" + "luxury" + "')";
                    html += '<div class="col-md-6">';
                    html += '<div class="car package-hover" style="width:99%" onClick="' + openModal + '">';
                    html += '<div class="one-4  py-4 px-4">';
                    html += '<h3>' + destination.name + '</h3>';
                    for (var j = 0; j < destination.luxury.sideBar.length; j++) {
                        html += '<span class="price"><small>' + destination.luxury.sideBar[j] + '</small></span>';
                    }
                    html += '</div>';
                    var cover = destination.luxury.cover || DEFAULT_IMAGE;
                    html += '<div class="one-1" style="background-image: url(' + cover + ');">';
                    html += '</div>';
                    html += '</div>';
                    html += '</div>';
                }
            }
            $('#packages-lists').html(html);
            if (search) {
                var btn = '<div class="row text-center">';
                btn += '<div class="col">';
                btn += '<a class="btn btn-outline btn-lg p-3" onclick="window.location = window.location.pathname;">';
                btn += '<i class="icon-list"></i> ALL DESTINATIONS';
                btn += '</a>';
                btn += '</div>';
                btn += '</div>';
                $('#packages-lists').after(btn);
            }
            break;
        }
        default: {
            renderPackages();
            break;
        }
    }

    HoneymoonTravel.loadHoneymoonDestinations();
    FamilyTravel.loadFamilyTravelDestinations();
    HistoricalTravel.loadHistoricalDestinations();
    AdventureTravel.loadAdventureDestinations();
}

function setProperActiveClassToMenu() {
    if(window.location.href.includes('contact')){
        $('#contact-us').addClass('active');
        $('#packages-tab').removeClass('active');
        $('#home').removeClass('active');
        console.log('hi')
    }
    if(window.location.href.includes('package')){
        $('#packages-tab').addClass('active');
        $('#contact-us').removeClass('active');
        $('#home').removeClass('active');
    }
    if(window.location.href.includes('home')){
        $('#home').addClass('active');
        $('#packages-tab').removeClass('active');
        $('#contact-us').removeClass('active');
    }
}