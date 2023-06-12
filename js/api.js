let url = "https://api.openweathermap.org/data/2.5/forecast?8&lon=54&lat=6&units=metric";

window.onload(apiRequest())

function apiRequest() {

    axios.get(url).then(function (response) {
        let json = response.data;
        console.log(json.list[0]);
        let out = "<table class='table table-hover'>"
        out += "<tr><th>Date</th>"
        out += "<th>Temperature</th>"
        out += "<th>Vochtigheid</th>"
        out += "<th>Druk</th>"
        out += "<th colspan='2'>Bewolking</th>"
        out += "<th colspan='2'>wind richting</th></tr>"
        for (let i = 0; i < json.list.length; i++)
        {
            out += "<tr><td>" + json.list[i].dt_txt + "<br></td>    "
            out += "<td>℃ " + json.list[i].main.temp + "<br></td>"
            out += "<td>" + json.list[i].main.humidity + "%<br></td>"
            out += "<td>" + json.list[i].main.pressure + " hPa<br></td>"
            out += "<td>" + json.list[i].weather[0].description + "<br></td>"
            out += "<td> <img src='http://openweathermap.org/img/w/" + json.list[i].weather[0].icon + ".png'alt=''><br></td>"
            out += "<td>" + json.list[i].wind.speed + " km/h <br></td>"
            out += "<td> <i class=\"fa-solid fa-arrow-up\" style='transform: rotate(" + json.list[i].wind.deg + "deg)'></i><br></td>"
        }



        document.getElementById("tabel").innerHTML = out;

    })
}
