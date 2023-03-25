import data from "./locations.json" assert {type:"json"}
let tab3 = $('#tabs-3');

$.each(data, function(index, location) {
    let row = $('<div>').addClass('row');
    let countryDiv=$('<div>').addClass('country')
    let country = $('<img>')
    if(location.country=='United States'){
    country.attr('src','image/United_States.png');
    }
    else if(location.country=='India'){
        country.attr('src','image/India.png');
    }
    else if(location.country=='Canada'){
        country.attr('src','image/Canada.png');
    }
    countryDiv.append(country);
    let state = $('<div>').addClass('state').text(location.state);
    let city = $('<div>').addClass('city').text(location.city);
    let contact = $('<div>').addClass('contact').text(location.contact);

    row.append(countryDiv, state, city, contact);
    tab3.append(row);
});