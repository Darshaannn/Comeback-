function createCard(thumbnail, duration, Title, CName, Views, Month) {

    let Viewstr;
    if (Views < 10000) {
        Viewstr = (Views / 1000).toFixed(1) + "K";
    } else if (Views >= 1000000) {
        Viewstr = (Views / 1000000).toFixed(1) + "M";
    } else {
        Viewstr = Views;
    }

    let html = `
        <div class="card">
            <div class="image">
                <img src="${thumbnail}">
                <div class="duration">${duration}</div>
            </div>
            <div class="text">
                <h2>${Title}</h2>
                <p>${CName} • ${Viewstr} views • ${Month} months ago</p>
            </div>
        </div>
    `;

    document.getElementById("container").innerHTML += html;
}

createCard(
    "https://i.ytimg.com/vi/9JaDBYPmiJ0/hqdefault.jpg",
    "50:02",
    "Hiii",
    "Darshan",
    450000,
    "24"
);
