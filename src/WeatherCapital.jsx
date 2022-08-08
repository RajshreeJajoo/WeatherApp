import React from "react";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import axios from "axios";
import './App.css';
import Container from "@material-ui/core/Container";
import {useNavigate,useLocation } from "react-router-dom";

const WeatherCapital = () => {
  var { state } = useLocation();
  const navigate = useNavigate();

  const backHome=()=>
  {
    navigate('/');

  }
   return (
    <>
    <Container>
        <Card style={{ marginTop:"40px", backgroundColor: "#c5cdf7" }}>
      <CardContent>
        <div className="displaydata">
          <label>Temperature:- </label>
          {/* <span className="valuedata">{props?.props.current.temperature}</span> */}
          <span className="valuedata">{state?.current.temperature}</span>

        </div>
        <div className="displaydata">
          <label>Weather Icons:- </label>
          <img src= {state?.current.weather_icons[0]} width="50px" height="40px"/>
        </div>
        <div className="displaydata">
          <label>Wind Speed:- </label>
          <span className="valuedata">{state?.current.wind_speed}</span>
        </div>
       
        <div className="displaydata">
          <label> Precip:- </label>
          <span className="valuedata">{state?.current.precip}</span>
        </div>

        <Button onClick={backHome} style={{ marginTop:"25px" ,backgroundColor: "#b394eb" , borderRadius:"25px"}}
          variant="contained">Back to Home</Button>
      </CardContent>
      </Card>
      </Container>
    </>
  );
};

export default WeatherCapital;
