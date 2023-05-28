import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import List from "./List";
const Main = () => {
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("");
  return (
    <div
      style={{
        color: "white",
        marginTop: "2vh",
        marginLeft: "2vw",
        display: "flex",
      }}
    >
      {
        // console.log("type of list is" + typeof lists)
        lists.map((list) => {
          return <List title={list} />;
        })
      }
      <Box
        sx={{
          backgroundColor: "#242731",
          width: "15vw",
          padding: "1vh",
          borderRadius: "10px",
          display: "flex",
          height: "5vh",
        }}
      >
        <input
          placeholder="Add Todo - List"
          style={{
            border: "none",
            outline: "none",
            boxShadow: "none",
            backgroundColor: "transparent",
            color: "white",
          }}
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <IconButton
          onClick={() => {
            if (title === "") {
              window.alert("Title cannot be empty");
            } else {
              const newList = [...lists, title];
              setLists(newList);
              console.log(lists);
              setTitle("");
            }
          }}
          sx={{ color: "white" }}
        >
          <AddIcon className="addButton" />
        </IconButton>
      </Box>
    </div>
  );
};

export default Main;
