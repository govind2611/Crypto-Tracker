import React, { useEffect, useState } from "react";
import "./style.css";
import { MenuItem, Select } from "@mui/material";
import { get100Coins } from "../../../functions/get100Coins";

const SelectCoins = ({ crypto1, crypto2, handleCoinChange }) => {
  const [allCoins, setAllCoins] = useState([]);

  const style = {
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
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const myCoins = await get100Coins();
    if (myCoins) {
      setAllCoins(myCoins);
    }
  };
  return (
    <div className="coins-flex">
      <p>Crypto 1</p>
      <Select
        value={crypto1}
        label="Crypto 1"
        onChange={(event) => handleCoinChange(event, false)}
        sx={style}
      >
        {allCoins
          .filter((item) => item.id !== crypto2)
          .map((coin, i) => (
            <MenuItem value={coin.id} key={i}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>

      <p>Crypto 2</p>
      <Select
        value={crypto2}
        label="Crypto 2"
        onChange={(event) => handleCoinChange(event, true)}
        sx={style}
      >
        {allCoins
          .filter((item) => item.id !== crypto1)
          .map((coin, i) => (
            <MenuItem value={coin.id} key={i}>
              {coin.name}
            </MenuItem>
          ))}
      </Select>
    </div>
  );
};

export default SelectCoins;
