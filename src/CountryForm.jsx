
import TextField from "@material-ui/core/TextField";
import React , { useState } from "react";
import Button from "@material-ui/core/Button";
// eslint-disable-next-line 
import Container from "@material-ui/core/Container";
import axios from "axios";
import CountryInformation from "./CountryInformation";
import ErrorInformation from "./ErrorInformation";

// import Alert from '@mui/material/Alert';

const CountryForm = () => {
  const [country, setCountry] = useState();
  const [response, setResponse] = useState(false);
  const [error, setError] = useState(false);
  const [countryData, setCountryData] = useState([]);

  const countryName = (e) => {
    setCountry(e.target.value);
    setResponse(false);
    setError(false);
  };

  const resetCountry = () => {
    setCountry("");
    setResponse(false);
    setError(false);
    setCountryData([]);
  };

  const sumbitCountry = () => {
    axios
      .get(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => {
        // setResponse(pre=> true);
        setError((pre) => false);
        // setCountryData(res.data);
        var arr = country.split(" ");
        for (var countrychar = 0; countrychar < arr.length; countrychar++) {
          arr[countrychar] =
            arr[countrychar].charAt(0).toUpperCase() +
            arr[countrychar].slice(1);
        }
        var str2 = arr.join(" ");

        for (let i = 0; i < res.data.length; i++) {
          if (str2 === res.data[i].name.common) {
            setResponse((pre) => true);
            setError((pre) => false);
            setCountryData(res.data[i]);
 
          }
        }
      })
      .catch((err) => {
        setResponse(pre=> false);
        setError((pre) => true);
      });
  };

  return (
    <>
      {/* <Container fixed style={{ height:'100%',backgroundColor:'red',
          //  background: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)",
           }}>  */}
           <div style={{}}>
        <TextField
          id="standard-basic"
          type="text"
          variant="standard"
          onChange={countryName}
          value={country}
          name="country"
        />

        <Button
          style={{ marginLeft: "20px", backgroundColor: "#b394eb" ,marginTop:'1%',borderRadius:"25px",borderWidth:5}}
          onClick={sumbitCountry}
          disabled={!country}
          variant="outlined"
        >
          Sumbit Country
        </Button>

        <Button
          variant="outlined"
          style={{ marginLeft: "20px", backgroundColor: "#b394eb" ,marginTop:'1%',borderRadius:"25px"}}
          onClick={resetCountry}
        >
          Reset
        </Button>
      {/* </Container> */}
      </div>
      {response && countryData ? (
        <CountryInformation props={countryData} />
      ) : null}

      {error && <ErrorInformation />}
    </>
  );
};

export default CountryForm;
