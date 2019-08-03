var DEFAULT_IMAGE = 'images/cover_bg_1.jpg';

var modalLists = {
    'Singapore': {
        title: 'Sizzling Singapore',
        description: '05 Nights/06 Days',
        featureTitle: 'Features',
        featureLists: [
            '3 Star hotel',
            'Universal Studios',
            'Garden By the Bay',
            'Sentosa',
        ],
        images: [
            'images/Singapore.jpeg',
            'images/Gardenbythebay.jpeg',
            'images/Ustudio.jpeg'
        ],
    },
    'Dubai': {
        title: 'Funtastic Dubai',
        description: '05 Nights/06 Days',
        featureTitle: 'Features',
        featureLists: [
            '4 Star Hotels',
            'Abu Dhabi Grand Mosque with Ferrari World',
            'Ski Dubai',
            '4* Desert Safari with BBQ Dinner'
        ],
        images: [
            'images/Abu_Dhabi.jpeg',
            'images/Dubai downtown.jpeg',
            'images/Dubai skyc.jpeg'
        ],
    },
    'Turkey': {
        title: 'Turkish Delight',
        description: '07 Nights/08 Days',
        featureTitle: 'Features',
        featureLists: [
            'Istanbul Bosphorus Cruise',
            'Ephesus Tour',
            'Derinkuyu Underground City',
            'All Domestic flights included',
        ],
        images: [
            'images/Istanbul.jpeg',
            'images/Cappa.jpeg',
            'images/Antalya.jpeg'
        ],
    },
    'Far East': {
        title: 'Singapore & Malaysia',
        description: '05 Nights/06 Days',
        featureTitle: 'Features',
        featureLists: [
            '3* Star Hotels',
            'Sentosa',
            'Genting Full Day Tour Enroute Batu Caves + One Way Cable Car',
        ],
        images: [
            'images/Genting.jpg',
            'images/Singapore.jpeg',
        ],
    },
    'Spain & Portugal': {
        title: 'Spain & Portugal',
        description: '09 Nights/10 Days',
        featureTitle: 'Features',
        featureLists: [
            '3* Star Hotels',
            'Sagrada Familia',
            'Granada Sightseeing by Tourist train',
            'Guided Tour of Barcelona, Lisbon, Madrid',
            '09 Dinners at Indian Restaurant',
        ],
        images: [
            'images/Seville.jpg',
            'images/Barcelona.jpg',
        ],
    },
    'Greece': {
        title: 'Romantic Greece',
        description: '09 Nights/10 Days',
        featureTitle: 'Features',
        featureLists: [
            '3* Star Hotels',
            'Full Day Volcano Tour',
            'All Ferry Tickets Included',
            'Half Day City Tour of Athens',
        ],
        images: [
            'images/Mykonos.jpeg',
            'images/Santorini.jpeg',
            'images/Athens.jpeg'
        ],
    },
}

var contactUs = function () {
    $('#trip-info-modal').modal('hide');
    window.location = '#contact';
}

var openModal = function (key, type) {

    var currentPage = window.location.pathname.replace('#', '').replace('/', '').toLowerCase();
    var search = window.location.search.replace('?', '');
    var lists = {};
    switch (currentPage) {
        case 'honeymoon': {
            modalData = HoneymoonTravel.honeymoonLists[key][type];
            break;
        }
        case 'historical': {
            modalData = HistoricalTravel.historicalList[key][type];
            break;
        }
        case 'family': {
            modalData = FamilyTravel.familyTravelDestinations[key][type];
            break;
        }
        case 'adventure': {
            modalData = AdventureTravel.adventureList[key][type];
            break;
        }
        default:
            modalData = modalLists[key];
    }

    var html = '';

    //tittle
    html += '<div class="modal-header">';
    html += '<h3 class="modal-title" id="exampleModalLongTitle">' + modalData.title + '</h3>';
    html += '<button type="button" class="close" data-dismiss="modal" aria-label="Close">';
    html += '</button>';
    html += '</div>';

    html += '<div class="modal-body">';

    //carousel
    if (modalData.images.length > 0) {
        html += '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">';
        html += '<div class="carousel-inner">'
        for (var i = 0; i < modalData.images.length; i++) {
            html += '<div class="carousel-item ' + (i == 0 && 'active' || '') + '">'
            html += '<img class="d-block w-100" style="height:300px" src="' + modalData.images[i] + '">'
            html += '</div>'
        }
        html += '</div>';
        html += '<a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">'
        html += '<span class="carousel-control-prev-icon" aria-hidden="true"></span>'
        html += '<span class="sr-only">Previous</span>'
        html += '</a>'
        html += '<a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">'
        html += '<span class="carousel-control-next-icon" aria-hidden="true"></span>'
        html += '<span class="sr-only">Next</span>'
        html += '</a>';
        html += '</div>';
    }

    //description
    html += '<h5 class="mt-3 text-center">' + modalData.description + '</h5>';

    //feature lists
    if (modalData.featureLists.length > 0) {
        html += '<h4>' + modalData.featureTitle + '</h4><ul>'
        for (var i = 0; i < modalData.featureLists.length; i++) {
            html += '<li>' + modalData.featureLists[i] + '</li>';
        }
        html += '</ul>'
    }
    html += '</div>'

    $('#model-content').html(html);

    $('#trip-info-modal').modal({
        show: true
    })
}

var renderPackages = function () {
    var html = '';

    _.forEach(modalLists, function (data, key) {
        var image = data.images ? data.images[0] : "images/singapore.jpeg";
        var openModal = "openModal('" + key + "')";
        html += '<div class="col-md-4 col-sm-6 fh5co-tours cursor-pointer" onclick="' + openModal + '">'
        html += '<div> <img src=' + image + ' height="250" width="350">';
        html += '<div class="desc">'
        html += '<span></span>'
        html += '<h3>' + data.title + '</h3>'
        // html += '<span>3 nights + Flight 5*Hotel</span>'
        // html += '<span class="price">$1,000</span>'
        html += '<a class="btn btn-primary btn-outline" onclick="' + openModal + '">Book Now <i class="icon-arrow-right22"></i></a>'
        html += '</div>';
        html += '</div>';
        html += '</div>';
    })

    $('#packages_list').html(html);
}

function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

