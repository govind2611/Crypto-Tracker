import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import "./style.css";

export default function SelectDays({days, handleDaysChange, noPTag}) {
  

  return (
    <div className="select-days">
    {!noPTag && <p>Price Change in </p>}  
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={days}
        label="Days"
        onChange={handleDaysChange}
        sx={{
          height: "2.5rem",
          color: "var(--white)",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--white)",
          },
          "& .MuiSvgIcon-root": {
            color: "var(--white)",
          },
          "&:hover": {
            "&& fieldset": {
              borderColor: "#3a80e9",
            },
          },
        }}
      >
        <MenuItem value={7}>7 Days</MenuItem>
        <MenuItem value={15}>15 Days</MenuItem>
        <MenuItem value={30}>30 Days</MenuItem>
        <MenuItem value={60}>60 Days</MenuItem>
        <MenuItem value={90}>90 Days</MenuItem>
        <MenuItem value={180}>180 Days</MenuItem>
        <MenuItem value={240}>240 Days</MenuItem>
        <MenuItem value={360}>1 Year</MenuItem>
      </Select>
    </div>
  );
}
