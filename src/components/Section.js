import React from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Button } from "@mui/material";

const Section = () => {
  return (
    <div className="section">
      <div>
        <h4 style={{ color: "white", marginLeft: "5vw", paddingTop: "" }}>
          Section
        </h4>
        <hr
          style={{
            color: "#3772FF",
            width: "5vw",
            marginLeft: "4.5vw",
            marginTop: "-2.5vh",
          }}
        ></hr>
      </div>
      <Button
        sx={{
          backgroundColor: "#191B20",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <AccountBalanceWalletIcon sx={{ color: "#3772FF" }} />
        <p style={{ color: "white", marginRight: "1vw", marginLeft: "1vw" }}>
          0.2 $XYZ
        </p>
        <Button sx={{ backgroundColor: "#A3E3FF", color: "#3772FF" }}>
          Tier 1
        </Button>
      </Button>
    </div>
  );
};

export default Section;
