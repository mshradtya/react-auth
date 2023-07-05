import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import PersonIcon from "@mui/icons-material/Person";
import { Link as RouterLink } from "react-router-dom";
import { Button, Link as MuiLink } from "@mui/material";

function Navbar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#f5f5f5", marginBottom: "5px" }}
    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          disableGutters
        >
          <Box sx={{ width: "55px" }}>
            <RouterLink to="/">
              <img
                src="../../logo.png"
                alt="logo"
                style={{
                  width: "80%",
                }}
              />
            </RouterLink>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  sx={{
                    bgcolor: "#ed4354",
                    color: "#fff",
                    boxShadow: "0 0 0 2px rgba(0, 0, 0, 0.1);",
                  }}
                >
                  <PersonIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem key="details" onClick={handleCloseUserMenu}>
                <RouterLink
                  to="/details"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Typography textAlign="center">Details</Typography>
                </RouterLink>
              </MenuItem>
              <MenuItem key="profile" onClick={handleCloseUserMenu}>
                <RouterLink
                  to="/profile"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Typography textAlign="center">Profile</Typography>
                </RouterLink>
              </MenuItem>
              <MenuItem key="logout" onClick={handleCloseUserMenu}>
                <RouterLink
                  to="/"
                  style={{ color: "inherit", textDecoration: "inherit" }}
                >
                  <Typography textAlign="center">Logout</Typography>
                </RouterLink>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
