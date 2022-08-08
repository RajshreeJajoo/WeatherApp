import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import axios from "axios";
import WeatherCapital from "./WeatherCapital";
import ErrorInformation from "./ErrorInformation";
import Container from "@material-ui/core/Container";
import { useNavigate } from "react-router-dom";

const CountryInformation = (props) => {
  // console.log("info",props.props);
  const navigate = useNavigate();

  const [response, setResponse] = useState(false);
  // const [capitalInfo, setCapitalInfo] = useState();
  const [error, setError] = useState(false);
  let capitalname = props.props?.capital;
  let latvalue=[];
  for (let i = 0; i < 2; i++) {
    latvalue[i] = props.props?.capitalInfo?.latlng[i];
  }
  const weatherCapital = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=a4752932d793609046209310d0b5dfb5&query=${capitalname}`
      )
      .then((res) => {
        setResponse((pre) => true);
        // setCapitalInfo(res.data);
        navigate('/weather', { state: res.data });

      })
      .catch((err) => {
        setError((pre) => true);
      });

  };
  return (
    <>
    <Container>
           <Card style={{ marginTop:"40px", backgroundColor: "#edb3f8"  }}>
      <CardContent>

        <div className="displaydata">
          <label>Captial:- </label>
          <span className="valuedata">{capitalname}</span>
        </div>

        <div className="displaydata">
          <label>Population:- </label>
          <span className="valuedata">{props.props?.population}</span>
        </div>

        <div className="displaydata">
          <label> Latlang:- </label>
          {/* <span  className="valuedata" >{latvalue.map(value=>(<li key={i}> {value} </li>))}</span> */}
          <span className="valuedata">{latvalue[0] +", "+ latvalue[1]}</span>
        </div>

        <div className="displaydata">
          <label> Flag:-</label>
          {/* <span className="valuedata"> */}
          <img src= {props.props?.flags?.png} width="50px" height="40px"/>
          {/* </span> */}
        </div>

        <Button onClick={weatherCapital} style={{ marginTop:"25px" ,backgroundColor: "#b394eb" , borderRadius:"25px"}}
          variant="contained">Captial Weather Information</Button> 

        </CardContent>
      </Card>
      
       
        {/* {response && capitalInfo ? (
          <WeatherCapital props={capitalInfo} />
        ) : null} */}
        {error && <ErrorInformation />}
        </Container>
     
    </>
  );
};

export default CountryInformation;
