import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

function App() {
  const [Principle, setPrinciple] = useState(0);
  const [Interest, setInterest] = useState(0);
  const [year, setYear] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);

  const [IsInValidPrinciple, setIsInValidPrinciple] = useState(false);
  const [IsInValidInterest, setIsInValidInterest] = useState(false);
  const [IsInValidyear, setIsInValidYear] = useState(false);

  console.log(Principle);

  const ValidateInput = (tag) => {
    const { name, value } = tag;

    console.log(name, value);

    console.log(!!value.match(/^[0-9]*.?[0-9]+$/));
    if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
      if (name == "Principle") {
        setPrinciple(value);
        setIsInValidPrinciple(false);
      } else if (name == "Interest") {
        setInterest(value);
        setIsInValidInterest(false);
      } else {
        setYear(value);
        setIsInValidYear(false);
      }
    } else {
      if (name == "Principle") {
        setIsInValidPrinciple(true);
      } else if (name == "Interest") {
        setIsInValidInterest(true);
      } else {
        setYear(value);
        setIsInValidYear(true);
      }
    }

    console.log(tag);
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    console.log("button clicked");
    if (Principle && Interest && year) {


      setSimpleInterest((Principle * Interest * year) / 100);
     } else
    
    {
      alert("please fill the field properly");

    }


  };
  
  

    const handleReset=()=>{

      setPrinciple(0)
      setInterest(0)
      setYear(0)
      setSimpleInterest(0)

      setIsInValidPrinciple(false)
      setIsInValidInterest(false)
      setIsInValidYear(false)
      

    }
 
  return (
    <>
      <div
        style={{ minHeight: "100vh", width: "100%" }}
        className="d-flex align-item-center justify-content-center bg-dark p-5"
      >
        <div style={{ width: "600px" }} className="bg-light p-5 rounded">
          <h1>Simple interest calculator</h1>
          <p>calculate your simple Interest easily</p>
          <div
            className="bg-warning  rounded  d-flex  align-items-center  justify-content-center  text-light  flex-column"
            style={{ height: "150px" }}
          >
            <h1>₹ &nbsp;{simpleInterest}</h1>
            <h4>total simple Interest</h4>
          </div>
          <form action="" className="mt-5">
            <div className="mb-3">
              <TextField
                name="Principle"
                value={Principle || ""}
                onChange={(e) => ValidateInput(e.target)}
                id="outlined-basic"
                label="₹ principle amount"
                variant="outlined"
                style={{ width: "500px" }}
              />
            </div>
            {IsInValidPrinciple && (
              <p className="text-danger">invalid principal amount</p>
            )}

            <div className="mb-3">
              <TextField
              onChange={(e) => ValidateInput(e.target)} 
                name="Interest"
                value={Interest || ""}
                className="mt-3 rounded "
                id="outlined-basic"
                label="₹ rate"
                variant="outlined"
                style={{ width: "500px" }}
              />
            </div>

            {IsInValidInterest && (
              <p className="text-danger">invalid Interest amount</p>
            )}

            <div className="mb-3">
              <TextField
                onChange={(e) => ValidateInput(e.target)}
                name="Year"
                value={year || ""}
                className="mt-3 rounded "
                id="outlined-basic"
                label="time period"
                variant="outlined"
                style={{ width: "500px" }}
              />
            </div>

            {IsInValidyear && <p className="text-danger"> Invalid Year </p>}

            <Stack direction="row" spacing={2}>
              <Button
                disabled={
                  IsInValidPrinciple || IsInValidInterest || IsInValidyear
                }
                type="submit"
                onClick={handleCalculate}
                className="w-100 bg-dark"
                style={{ height: "50px" }}
                variant="contained"
              >
                CALCULATE
              </Button>
              <Button  onClick={handleReset}   className="w-100 bg-dark" variant="outlined">
                RESET
              </Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
