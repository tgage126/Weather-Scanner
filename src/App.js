import React from "react";
import Weather from "./components/weather";
import Form from "./components/form";


class App extends React.Component {

  state = {
    temperature: "",
    city: "",
    wind: "",
    cloud: ""
  }
  getWeather = async (e) => {

    const zip = e.target.elements.zip.value;
    e.preventDefault();   
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip}&appid=8d2de98e089f1c28e1a22fc19a24ef04&units=imperial`);
    const response = await api_call.json();
    console.log(response);
    if(zip){
      this.setState({
        temperature: response.main.temp,
        city: response.name,
        wind: response.wind.speed,
        cloud: response.clouds.all,
      })
    }
  }
  render() {
    return (

        <div >
        <Form loadWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            wind={this.state.wind}
            cloud={this.state.cloud}
        
          />
        </div>

    )
  }
}
export default App;
