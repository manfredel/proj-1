import React, { useState } from "react";
import "./App.css";
import { sumTotal } from "./functions";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const App = () => {
  const [goalValue, setGoalValue] = useState({
    savings: "",
    food: "",
    transport: "",
    shopEntertain: "",
    bills: "",
    others: "",
  });

  const [actualValue, setActualValue] = useState({
    savings: "",
    food: "",
    transport: "",
    shopEntertain: "",
    bills: "",
    others: "",
  });

  const [catActual, setCatActual] = useState({
    savings: "",
    food: "",
    transport: "",
    shopEntertain: "",
    bills: "",
    others: "",
  });

  /* 
const onSubmitGoals = (goalValue) => {
  setCategoryGoals((prevCategoryGoals) => {
    return[...prevCategoryGoals, goalValue ]
  })
} */
  const [totalGoal, setTotalGoal] = useState(0);
  const [totalActual, setTotalActual] = useState(0);
  const [totalCat, setTotalCat] = useState(0);
  const [open, setOpen] = useState(false);
  const goalCal = sumTotal(goalValue);
  const actualCal = sumTotal(actualValue);
  const diffTotal = totalGoal - totalCat;

  const handleGoalChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setGoalValue((prevGoalValue) => ({
      ...prevGoalValue,
      [name]: value,
    }));
    console.log(goalValue);
  };

  const handleGoalSubmit = (event, reason) => {
    console.log(event);
    event.preventDefault();
    setTotalGoal(goalCal);
    setGoalValue((prevGoals) => {
      return {
        ...prevGoals,
        savings: "$" + goalValue.savings,
        food: "$" + goalValue.food,
        transport: "$" + goalValue.transport,
        shopEntertain: "$" + goalValue.shopEntertain,
        bills: "$" + goalValue.bills,
        others: "$" + goalValue.others,
      };
    });
    if (reason !== "backdropClick") {
      setOpen(false);
    }
    console.log(goalValue);
  };

  const handleActChange = (event) => {
    console.log(event.target);
    const { name, value } = event.target;
    setActualValue((prevActualValue) => ({
      ...prevActualValue,
      [name]: value,
    }));
    console.log(goalValue);
  };

  const handleActSubmit = (event, reason) => {
    console.log(event);
    event.preventDefault();
    setTotalCat(actualCal);
    setCatActual((prevGoals) => ({
      ...prevGoals,
      savings: "$" + actualValue.savings,
      food: "$" + actualValue.food,
      transport: "$" + actualValue.transport,
      shopEntertain: "$" + actualValue.shopEntertain,
      bills: "$" + actualValue.bills,
      others: "$" + actualValue.others,
    }));
    setActualValue({
      savings: "",
      food: "",
      transport: "",
      shopEntertain: "",
      bills: "",
      others: "",
    });

    if (reason !== "backdropClick") {
      setOpen(false);
    }
    console.log(goalValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    event.preventDefault();
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Monies App</h1>
        <div className="datePeriod"></div>
        <div className="table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Category</TableCell>
                  <TableCell align="right">Goal Set</TableCell>
                  <TableCell align="right">Expenditure</TableCell>
                  <TableCell align="right">Calculation</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Savings
                  </TableCell>
                  <TableCell align="right">{goalValue.savings}</TableCell>
                  <TableCell align="right">{catActual.savings}</TableCell>
                  <TableCell align="right">Cal</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Food
                  </TableCell>
                  <TableCell align="right">{goalValue.food}</TableCell>
                  <TableCell align="right">{catActual.food}</TableCell>
                  <TableCell align="right">Cal</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Transportation
                  </TableCell>
                  <TableCell align="right">{goalValue.transport}</TableCell>
                  <TableCell align="right">{catActual.transport}</TableCell>
                  <TableCell align="right">Cal</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Shopping & Entertainment
                  </TableCell>
                  <TableCell align="right">{goalValue.shopEntertain}</TableCell>
                  <TableCell align="right">{catActual.shopEntertain}</TableCell>
                  <TableCell align="right">Cal</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Bills
                  </TableCell>
                  <TableCell align="right">{goalValue.bills}</TableCell>
                  <TableCell align="right">{catActual.bills}</TableCell>
                  <TableCell align="right">Cal</TableCell>
                </TableRow>
                <TableRow
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    Others
                  </TableCell>
                  <TableCell align="right">{goalValue.others}</TableCell>
                  <TableCell align="right">{catActual.others}</TableCell>
                  <TableCell align="right">Cal</TableCell>
                </TableRow>
                <TableRow
                  sx={{
                    "&:last-child td, &:last-child th": { border: 0 },
                  }}
                  className="total"
                >
                  <TableCell component="th" scope="row">
                    Total
                  </TableCell>
                  <TableCell align="right">${totalGoal}</TableCell>
                  <TableCell align="right">${totalCat}</TableCell>
                  <TableCell align="right">${diffTotal}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <Box>
          <Button onClick={handleClickOpen} variant="contained">
            Goal Setting
          </Button>

          <Dialog disableEscapeKeyDown open={open}>
            <form className="inputForm" onSubmit={handleGoalSubmit}>
              <DialogTitle>Fill the form</DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ display: "flex", flexWrap: "wrap" }}
                >
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="outlined-adornment-amount">
                      Savings
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="savings"
                      value={goalValue.savings}
                      onChange={handleGoalChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="outlined-adornment-amount">Food</InputLabel>
                    <OutlinedInput
                      type="text"
                      name="food"
                      value={goalValue.food}
                      onChange={handleGoalChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="outlined-adornment-amount">
                      Transportation
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="transport"
                      value={goalValue.transport}
                      onChange={handleGoalChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="outlined-adornment-amount">
                      Shopping & Entertainment
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="shopEntertain"
                      value={goalValue.shopEntertain}
                      onChange={handleGoalChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>

                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="outlined-adornment-amount">
                      Bills
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="bills"
                      value={goalValue.bills}
                      onChange={handleGoalChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="outlined-adornment-amount">
                      Others
                    </InputLabel>
                    <OutlinedInput
                      type="text"
                      name="others"
                      value={goalValue.others}
                      onChange={handleGoalChange}
                      startAdornment={
                        <InputAdornment position="start">$</InputAdornment>
                      }
                    />
                  </FormControl>
                </Box>
              </DialogContent>
              <h3 className="inDialogTotal">Total: {goalCal}</h3>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit" value="submit">
                  Ok
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Box>
        <div>
          <Box>
            <Button onClick={handleClickOpen} variant="contained">
              Expenditure
            </Button>

            <Dialog disableEscapeKeyDown open={open}>
              <form className="inputForm" onSubmit={handleActSubmit}>
                <DialogTitle>Fill the form</DialogTitle>
                <DialogContent>
                  {/*  <Box sx={{ width: 130 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Month
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={months}
                        label="month"
                        onChange={handleActChange}
                      >
                        <MenuItem value="January">January</MenuItem>
                        <MenuItem value="February">February</MenuItem>
                        <MenuItem value="March">March</MenuItem>
                        <MenuItem value="April">April</MenuItem>
                        <MenuItem value="May">May</MenuItem>
                        <MenuItem value="June">June</MenuItem>
                        <MenuItem value="July">July</MenuItem>
                        <MenuItem value="August">August</MenuItem>
                        <MenuItem value="September">September</MenuItem>
                        <MenuItem value="October">October</MenuItem>
                        <MenuItem value="November">November</MenuItem>
                        <MenuItem value="December">December</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>*/}
                  <Box
                    component="form"
                    sx={{ display: "flex", flexWrap: "wrap" }}
                  >
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="outlined-adornment-amount">
                        Savings
                      </InputLabel>
                      <OutlinedInput
                        type="text"
                        name="savings"
                        value={actualValue.savings}
                        onChange={handleActChange}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="outlined-adornment-amount">
                        Food
                      </InputLabel>
                      <OutlinedInput
                        type="text"
                        name="food"
                        value={actualValue.food}
                        onChange={handleActChange}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="outlined-adornment-amount">
                        Transportation
                      </InputLabel>
                      <OutlinedInput
                        type="text"
                        name="transport"
                        value={actualValue.transport}
                        onChange={handleActChange}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="outlined-adornment-amount">
                        Shopping & Entertainment
                      </InputLabel>
                      <OutlinedInput
                        type="text"
                        name="shopEntertain"
                        value={actualValue.shopEntertain}
                        onChange={handleActChange}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>

                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="outlined-adornment-amount">
                        Bills
                      </InputLabel>
                      <OutlinedInput
                        type="text"
                        name="bills"
                        value={actualValue.bills}
                        onChange={handleActChange}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <InputLabel id="outlined-adornment-amount">
                        Others
                      </InputLabel>
                      <OutlinedInput
                        type="text"
                        name="others"
                        value={actualValue.others}
                        onChange={handleActChange}
                        startAdornment={
                          <InputAdornment position="start">$</InputAdornment>
                        }
                      />
                    </FormControl>
                  </Box>
                </DialogContent>
                <h3 className="inDialogTotal">Total: {actualCal}</h3>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button type="submit" value="submit">
                    Ok
                  </Button>
                </DialogActions>
              </form>
            </Dialog>
          </Box>
        </div>
      </header>
    </div>
  );
};

export default App;
