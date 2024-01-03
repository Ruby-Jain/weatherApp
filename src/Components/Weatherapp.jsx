import "./Weatherapp.css";
import searchicon from "../assets/searchicon.png";
import beautifulweather from "../assets/beautifulweather.png";
const Weatherapp = () => {
  let api_key = "V8NPWuCFsHpJvhuNN3no1OfQD3AiboWb";
  const search = async () => {
    const element = document.getElementsByClassName("city-input");
    if (element[0].value === " ") {
      return 0;
    }
    
    let url = `https://api.tomorrow.io/v4/weather/forecast?location=${element[0].value}&apikey=${api_key}`;
    let response = await fetch(url);
    let data = await response.json();
    
    console.log(data.location.name);
    console.log(data)
    console.log(data.timelines.minutely[0].values.humidity);

    const location = document.getElementsByClassName("location");
    const temp = document.getElementsByClassName("temp");
    const humid = document.getElementsByClassName("humidity-percent");
    const windspeed = document.getElementsByClassName("wind-speed");

    location[0].innerHTML = data.location.name;
    temp[0].innerHTML = data.timelines.minutely[0].values.temperature;
    humid[0].innerHTML = data.timelines.minutely[0].values.humidity;
    windspeed[0].innerHTML = data.timelines.minutely[0].values.windSpeed;
  };

  return (
    <div>
      <div className="container">
        <div className="top-bar">
          <input
            type="text"
            className="city-input"
            placeholder="search place"
          />
          <div className="searchicon">
            <img src={searchicon} alt="" onClick={search} />
          </div>
        </div>
        <div className="weatherimage">
          <img src={beautifulweather} alt="" />
        </div>
      <div className="temp-location">
          <div className="temp">25°C</div>
          <div className="location">Pune</div>
      </div>
      

        <div className="datacontainer">
          <div className="element">
            <img src="" alt="" />
            <div className="data">
              <div className="humidity-percent">64%</div>
              <div className="text">Humidity</div>
            </div>
          </div>
          <div className="element">
            <img src="" alt="" />
            <div className="data">
              <div className="wind-speed">18km/hour</div>
              <div className="text">Wind Speed</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weatherapp;
