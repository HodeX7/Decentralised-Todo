import React, { useState } from "react";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Drawer from "@mui/material/Drawer";
import EditDrawer from "./EditDrawer";
import { Draggable } from "react-beautiful-dnd";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeTodo } from "../todoSlice";

const Todo = ({ index, title, desc, id, listId }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
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
    <Draggable draggableId={"1"} index={index}>
      {(provided) => {
        return (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
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
              <h4 style={{ marginRight: "auto", marginLeft: "0.5vw" }}>
                {title}
              </h4>
              <IconButton onClick={toggleDrawer(true)}>
                <EditIcon className="addButton" sx={{ cursor: "pointer" }} />
              </IconButton>
              {/* Implement Delete Todo logic from smart contract */}
              <IconButton
                onClick={() => {
                  dispatch(removeTodo({ listId: listId, todoId: id }));
                }}
              >
                <DeleteIcon className="addButton" sx={{ cursor: "pointer" }} />
              </IconButton>
            </div>
            <p style={{ color: "#808191", margin: "0" }}>{desc}</p>
            <Drawer
              sx={{
                // width: drawerWidth,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                  // width: drawerWidth,
                  boxSizing: "border-box",
                  backgroundColor: "#000000",
                  color: "rgb(121, 121, 121)",
                  top: "13vh",
                  borderLeft: "1px solid rgb(78, 78, 78)",
                },
              }}
              // variant="temporary"
              onClose={toggleDrawer(false)}
              anchor="right"
              open={open}
            >
              <EditDrawer id={id} listId={listId} />
            </Drawer>
          </div>
        );
      }}
    </Draggable>
  );
};

export default Todo;
