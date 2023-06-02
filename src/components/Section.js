import React, { useState } from "react";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { Button } from "@mui/material";

const Section = () => {
  const [account, setAccount] = useState("");
  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((accounts) => {
          const account = accounts[0];
          console.log("Connected:", account);
          setAccount(account);
        })
        .catch((error) => {
          console.error("Error connecting to wallet:", error);
        });
    } else {
      console.error("MetaMask not found");
    }
  };

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
      <div style={{ display: "flex" }}>
        {account !== "" ? (
          <p style={{ color: "white", marginRight: "1vw" }}>
            Welcome, {account}
          </p>
        ) : (
          <Button onClick={connectWallet()}>Connect Wallet</Button>
        )}

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
    </div>
  );
};

export default Section;
