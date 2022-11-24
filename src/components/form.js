import React from "react";

class Form extends React.Component{
    render(){
        return(
                <form onSubmit = {this.props.loadWeather}>
                    <input type="numeric" name="zip" placeholder="Zip Code"/>
                </form> 
        )
    }
}
export default Form;