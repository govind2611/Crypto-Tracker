import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import TrendingDownRoundedIcon from "@mui/icons-material/TrendingDownRounded";
import { Tooltip } from "@mui/material";
import { convertNumbers } from "../../../functions/convertNumbers";
import { motion } from "framer-motion";
import { hasBeenAdded } from "../../../functions/hasBeenAdded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { IconButton } from "@mui/material";
import { removeFromWatchlist } from "../../../functions/removeFromWatchlist";
import { addToWatchlist } from "../../../functions/addToWatchlist";

const List = ({ coin, delay, isWatchlistPage }) => {
  const [added, setAdded] = useState(hasBeenAdded(coin.id));

  return (
    <Link to={`/coin/${coin.id}`}>
     
      <tr className="list-row">
        <Tooltip title="Coin Logo" placement="bottom-start">
          <td className="td-image">
            <img src={coin.image} alt="logo" className="coin-logo" />
          </td>
        </Tooltip>

        <td>
          <div className="name-col">
            <Tooltip title="Coin Symbol" placement="bottom-start">
              <p className="coin-symbol">{coin.symbol}</p>
            </Tooltip>
            <Tooltip title="Name of Coin" placement="bottom-start">
              <p className="coin-name">{coin.name}</p>
            </Tooltip>
          </div>
        </td>

        {coin.price_change_percentage_24h > 0 ? (
          <td className="chip-flex">
            <Tooltip title="Price Rised in 24 hrs" placement="bottom-start">
              <div className="price-chip">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </Tooltip>

            <Tooltip title="Price Rised in 24 hrs" placement="bottom-start">
              <div className="icon-chip td-icon">
                <TrendingUpRoundedIcon />
              </div>
            </Tooltip>
          </td>
        ) : (
          <td className="chip-flex">
            <Tooltip title="Price Dropped in 24 hrs" placement="bottom-start">
              <div className="price-chip chip-red">
                {coin.price_change_percentage_24h.toFixed(2)}%
              </div>
            </Tooltip>
            <Tooltip title="Price Dropped in 24 hrs" placement="bottom-start">
              <div className="icon-chip icon-chip-red td-icon">
                <TrendingDownRoundedIcon />
              </div>
            </Tooltip>
          </td>
        )}

        <td>
          <Tooltip title="Current Price" placement="bottom-start">
            <h3
              className="coin-price td-center-align"
              style={{
                color:
                  coin.price_change_percentage_24h < 0
                    ? "var(--red)"
                    : "var(--green)",
              }}
            >
              ${coin.current_price.toLocaleString()}
            </h3>
          </Tooltip>
        </td>

        <td>
          <Tooltip title="Total Volume" placement="bottom-start">
            <p className="total_volume td-right-align td-total-volume">
              {coin.total_volume.toLocaleString()}
            </p>
          </Tooltip>
        </td>
        <td className="desktop-td-mkt">
          <Tooltip title="Market Cap" placement="bottom-start">
            <p className="total_volume td-right-align">
              ${coin.market_cap.toLocaleString()}
            </p>
          </Tooltip>
        </td>

        <td className="mobile-td-mkt">
          <Tooltip title="Market Cap" placement="bottom-start">
            <p className="total_volume td-right-align">
              ${convertNumbers(coin.market_cap)}
            </p>
          </Tooltip>
        </td>

        <td>
          <IconButton
            onClick={(e) => {
              e.preventDefault();
              if (added) {
                removeFromWatchlist(coin.id);
                setAdded(false);
              } else {
                addToWatchlist(coin.id);
                setAdded(true);
              }
            }}
          >
            {added ? (
              <StarRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            ) : (
              <StarBorderRoundedIcon
                className={`watchlist-icon ${
                  coin.price_change_percentage_24h < 0 && "watchlist-icon-red"
                } `}
              />
            )}
          </IconButton>
        </td>
      </tr>
     
    </Link>
  );
};

export default List;
