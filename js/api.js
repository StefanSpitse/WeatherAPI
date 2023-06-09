let url = "https://api.openweathermap.org/data/2.5/forecast?appid=d30437a45702a50cd1d33157bdb447b8&lon=54&lat=6&units=metric";

window.onload(apiRequest())

function apiRequest() {

    axios.get(url).then(function (response) {
        let json = response.data;

        let out = "<table>"
        out += "<tr><th>Time</th></tr>"
        for (let i = 0; i < json.list.length; i++)
        {
            out += "<tr><td>" + json.list[i].dt_txt + "<br></td></tr>"
        }
        console.log(json.list[0].dt_txt)

        document.getElementById("tabel").innerHTML = out;

    })
}