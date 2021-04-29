import React from "react";
import styled from "styled-components";
import { getHeader, getCollapseIcon } from "@mui-treasury/layout";
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import { useGoogleAvatarStyles } from "@mui-treasury/styles/avatar/google";
import {
  Box,
  Toolbar,
  makeStyles,
  InputBase,
  IconButton,
  Avatar,
} from "@material-ui/core";
import Menu from "@material-ui/icons/Menu";
import Search from "@material-ui/icons/Search";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import HelpOutline from "@material-ui/icons/HelpOutline";
import Apps from "@material-ui/icons/Apps";

const Header = getHeader(styled);
const CollapseIcon = getCollapseIcon(styled);

const useStyles = makeStyles({
  collapse: {
    marginLeft: -12,
    marginRight: 4,
  },
  logo: {
    height: 40,
  },
  toolbar: {
    minWidth: 768,
    minHeight: "64px !important",
    backgroundColor: "#fff",
    boxShadow: "inset 0 -1px 0 rgba(100,121,143,0.122)",
  },
  searchInput: {
    backgroundColor: "#f1f3f4",
    height: 48,
    borderRadius: 8,
    padding: "0 8px",
    maxWidth: 720,
    flexGrow: 1,
  },
});

const AppHeader = () => {
  const styles = useStyles();
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 24 });
  const gutterStyles = useRowGutterStyles({ size: 8 });
  const tinyGutterStyles = useRowGutterStyles({
    size: 2,
    before: 10,
  });
  const googleStyles = useGoogleAvatarStyles({ avatarSize: 32, ringSize: 40 });
  const avatarStyles = useSizedIconButtonStyles({ padding: 4, childSize: 32 });
  return (
    <Header>
      <Toolbar className={styles.toolbar}>
        <Box width={238} display={"flex"} alignItems="center">
          <CollapseIcon
            className={styles.collapse}
            sidebarId={"primarySidebar"}
          >
            {() => <Menu />}
          </CollapseIcon>
          <img
            className={styles.logo}
            alt=""
            src="https://content.app-sources.com/s/240283484741135/uploads/Images/Ngo__Sons_Logo_Website_FULL_Blue-8113696.png"
          />
        </Box>
        <InputBase
          className={styles.searchInput}
          placeholder="Search projects"
          startAdornment={
            <IconButton className={gutterStyles.adjacent} classes={actionStyles}>
              <Search />
            </IconButton>
          }
          endAdornment={
            <IconButton classes={actionStyles}>
              <ArrowDropDown />
            </IconButton>
          }
        />
      </Toolbar>
    </Header>
  );
};

export default AppHeader;
