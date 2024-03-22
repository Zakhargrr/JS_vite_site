import React from "react";
import "./comp.css";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { SportsBasketball } from "@mui/icons-material";

const Header = () => {
  return (
    <div className="header_main">
      <AppBar position="static">
        <Toolbar>
          <Typography fontSize={36} flexGrow={2} fontFamily={"Cambria Math"}>
            Мой Гениальный сайт
          </Typography>
          <IconButton>
            <StarIcon></StarIcon>
          </IconButton>
          <IconButton>
            <SportsBasketball />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
