import React, { useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import EditDrawer from "./EditDrawer";

const Todo = ({ title, desc }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <div
      style={{
        marginTop: "2vh",
        border: "2px dotted rgb(78, 78, 78)",
        padding: "1vh",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <WorkspacePremiumIcon />
        <h4 style={{ marginRight: "auto", marginLeft: "0.5vw" }}>{title}</h4>
        <IconButton onClick={toggleDrawer(true)}>
          <EditIcon className="addButton" sx={{ cursor: "pointer" }} />
        </IconButton>
      </div>
      <p style={{ color: "#808191", margin: "0" }}>{desc}</p>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <EditDrawer />
      </Drawer>
    </div>
  );
};

export default Todo;
