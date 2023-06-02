import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import "../App.css";
import List from "./List";
import { DragDropContext } from "react-beautiful-dnd";
import { useSelector } from "react-redux";
import { todoListStateSelector, addList } from "../todoSlice";
import { listsStateSelector } from "../listSlice";
import { useDispatch } from "react-redux";

const Main = () => {
  const { todoList } = useSelector(todoListStateSelector);
  // console.log("This is the state", todoList);
  // const [lists, setLists] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  // const { todoList } = useSelector(todoListStateSelector);
  // console.log("List", todoList);
  const dispatch = useDispatch();
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
        {todoList.map((list, index) => {
          return <List key={index} list={list} />;
        })}
        <Box
          sx={{
            backgroundColor: "#242731",
            width: "auto",
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
                dispatch(addList({ id: id, title: title, todos: [] }));
                setId((id) => id + 1);
                // const newList = [...lists, title];
                // setLists(newList);
                // console.log(lists);
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
