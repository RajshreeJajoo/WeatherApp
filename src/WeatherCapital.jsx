import React from "react";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import './App.css';
import Container from "@material-ui/core/Container";
import {useNavigate,useLocation } from "react-router-dom";

const WeatherCapital = (props) => {
  var { state } = useLocation();
  const navigate = useNavigate();

  const backHome=()=>
  {
    navigate('/');

  }
   return (
    <>
    <Container>
        <Card style={{ marginTop:"40px",width:'60%',marginLeft:'25%',
           background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
          }}>
      <CardContent>
        <div className="displaydata">
          <label>Temperature:- </label>
          {/* <span className="valuedata">{props?.props.current.temperature}</span> */}
          <span className="valuedata">{state?.current.temperature}</span>

        </div>
        <div className="displaydata">
          <label>Weather Icons:- </label>
          <img src= {state?.current.weather_icons[0]} style={{marginLeft:5}} width="30px" height="20px" alt=""/>
        </div>
        <div className="displaydata">
          <label>Wind Speed:- </label>
          <span className="valuedata">{state?.current.wind_speed}</span>
        </div>
       
        <div className="displaydata">
          <label> Precip:- </label>
          <span className="valuedata">{state?.current.precip}</span>
        </div>

        {/* <Button onClick={backHome} style={{ marginTop:"25px" ,backgroundColor: "#b394eb" , borderRadius:"25px"}}
          variant="contained">Back to Home</Button> */}
      </CardContent>
      </Card>
      </Container>
    </>
  );
};

export default WeatherCapital;
