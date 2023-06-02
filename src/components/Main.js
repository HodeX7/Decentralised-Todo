import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { todoListStateSelector } from "../todoSlice";
const Main = () => {
  const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("");
  const { todoList } = useSelector(todoListStateSelector);
  console.log("List", todoList);
  const onDragEnd = (result) => {
    const { source, destination } = result;
    console.log(source, destination);
    if (
      !destination ||
      (destination.droppableId === source.droppableId &&
        destination.index === source.index)
    )
      return;
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
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
          lists.map((list, index) => {
            return <List key={index} title={list} />;
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
            // Implement List add logic from smart contract
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
    </DragDropContext>
  );
};

export default Main;
