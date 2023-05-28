import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import WidgetsIcon from "@mui/icons-material/Widgets";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import CandlestickChartIcon from "@mui/icons-material/CandlestickChart";
import ShareIcon from "@mui/icons-material/Share";
import Button from "@mui/material/Button";
import LanguageIcon from "@mui/icons-material/Language";
import { MaterialUISwitch } from "./MuiSwitch";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* <CssBaseline />
      <Toolbar>
        
        </IconButton>
      </Toolbar> */}
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerOpen}
        edge="start"
        sx={{
          ...(open && { display: "none" }),
          color: "white",
          mt: -47,
          ml: 1,
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#000000",
            color: "rgb(121, 121, 121)",
            top: "5vh",
            borderRight: "1px solid rgb(78, 78, 78)",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8vh",
          }}
        >
          <EmojiEmotionsIcon />
          <h3 style={{ color: "white" }}>NAME</h3>
          <IconButton sx={{ color: "white" }} onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "rgb(121, 121, 121)" }}>
                <WidgetsIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "rgb(121, 121, 121)" }}>
                <EqualizerIcon />
              </ListItemIcon>
              <ListItemText primary="Section 2" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "rgb(121, 121, 121)" }}>
                <CandlestickChartIcon />
              </ListItemIcon>
              <ListItemText primary="Section 3" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "rgb(121, 121, 121)" }}>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText primary="Section 8" />
            </ListItemButton>
          </ListItem>
          <ListItem
            sx={{ borderRadius: "25px", backgroundColor: "#353945" }}
            disablePadding
          >
            <ListItemButton>
              <ListItemIcon sx={{ color: "white" }}>
                <ShareIcon />
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }} primary="Section 8" />
            </ListItemButton>
          </ListItem>
        </List>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "35vh",
          }}
        >
          <Button
            sx={{
              borderRadius: "25px",
              backgroundColor: "#353945",
              color: "white",
            }}
            variant="outlined"
          >
            $0.90
          </Button>
          <Button
            sx={{
              borderRadius: "25px",
              backgroundColor: "#A3E3FF",
              color: "#3772FF",
            }}
            variant="outlined"
          >
            Buy $XYZ
          </Button>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "2vh",
            marginLeft: "3vh",
          }}
        >
          <LanguageIcon sx={{ cursor: "pointer" }} />
          <MaterialUISwitch />
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
