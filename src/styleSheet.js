import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";

export default function InputAdornments(props) {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      <div>
        <TextField
          label="With normal TextField"
          id="outlined-start-adornment"
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">kg</InputAdornment>
            ),
          }}
        />
        <FormControl fullWidth sx={{ display: "flex", flexWrap: "wrap" }}>
          <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            value={props.formSub.saving}
            onChange={props.handleChange("amount")}
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            label="Amount"
          />
        </FormControl>
      </div>
    </Box>
  );
}
