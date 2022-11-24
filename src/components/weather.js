import React from "react";

class Weather extends React.Component{
    render(){
        return(
            <div>
                {
                   this.props.city && <p >City: 
                        <span>  {this.props.city}</span>                    
                    </p> 
                }
                {
                    this.props.temperature && <p >Temperature: 
                        <span>  {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.wind && <p >Wind Speed: 
                        <span>  {this.props.wind}</span>
                    </p>
                }
                {
                    this.props.cloud && <p >Cloud Cover:  
                        <span>  {this.props.cloud}</span>
                    </p>
                }
            </div>
        )
    }
}
export default Weather;