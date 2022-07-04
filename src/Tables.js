import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

 const TableList = ({ categoryGoals }) => {
  return (
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
            key={1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Savings
            </TableCell>
            <TableCell align="right">{categoryGoals.food}</TableCell>
            <TableCell align="right">Value 2</TableCell>
            <TableCell align="right">Cal</TableCell>
          </TableRow>
          <TableRow
            key={1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Savings
            </TableCell>
            {/* <TableCell align="right">{categoryGoals}</TableCell> */}
            <TableCell align="right">Value 2</TableCell>
            <TableCell align="right">Cal</TableCell>
          </TableRow>
          <TableRow
            key={1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Savings
            </TableCell>
            {/* <TableCell align="right">{categoryGoals}</TableCell> */}
            <TableCell align="right">Value 2</TableCell>
            <TableCell align="right">Cal</TableCell>
          </TableRow>
          <TableRow
            key={1}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              Savings
            </TableCell>
           {/*  <TableCell align="right">{categoryGoals}</TableCell> */}
            <TableCell align="right">Value 2</TableCell>
            <TableCell align="right">Cal</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableList;
