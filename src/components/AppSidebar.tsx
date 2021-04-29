import React from "react";
import styled from "styled-components";
import {
  useSidebarCtx,
  useSidebarCollapse,
  getSidebarContent,
} from "@mui-treasury/layout";
import { Box, List, Divider } from "@material-ui/core";
import GmailButton from "@mui-treasury/components/button/gmail";
import GmailSidebarItem from "@mui-treasury/components/sidebarItem/gmail";
import { GmailSidebarItemProps } from "@mui-treasury/components/sidebarItem/gmail/GmailSidebarItem";
import ComposeButton from "../components/ComposeButton"

// @ts-ignore
import Menu from "@mui-treasury/components/menu/collapsible";

import Inbox from "@material-ui/icons/Inbox";
import FolderSharedIcon from '@material-ui/icons/FolderShared';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FunctionsIcon from '@material-ui/icons/Functions';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import Info from "@material-ui/icons/Info";
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUp from "@material-ui/icons/KeyboardArrowUp";
import Add from '@material-ui/icons/Add';
import Settings from "@material-ui/icons/Settings";
import Videocam from "@material-ui/icons/Videocam";
import Keyboard from "@material-ui/icons/Keyboard";
import DeleteIcon from '@material-ui/icons/Delete';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const SidebarContent = getSidebarContent(styled);

const NewProjectButton = ({collapsed}) => {
  const [open, setOpen] = React.useState(false);
  const [template, setTemplate] = React.useState("Blank");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setTemplate(event.target.value);
  };
  

  return (
    <div>
      <ComposeButton collapsed={collapsed} onClick={handleClickOpen}/>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Create a new LaTeX project from one of the templates, or create a blank document.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Project Name"
            type="text"
            fullWidth
          />
          <Select
          value={template}
          onChange={handleChange}
          label="Template"
          fullWidth
        >
          <MenuItem value="Blank">Blank</MenuItem>
          <MenuItem value="Exam">Exam</MenuItem>
          <MenuItem value="Handout">Handout</MenuItem>
          <MenuItem value="Question Bank">Question Bank</MenuItem>
        </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );

}

const AppSidebar = () => {
  const [index, setIndex] = React.useState(0);
  const { expanded } = useSidebarCtx();
  const { state } = useSidebarCollapse();
  const collapsed = !expanded && (state.collapsed as boolean);
  const commonProps = (i: number) => ({
    collapsed,
    selected: i === index,
    onClick: () => {
      setIndex(i);
    },
    dotOnCollapsed: true,
  });

  return (
    <>
      <Box mt={2} mb={collapsed ? 1 : 2} pl={1}>
        
        <NewProjectButton collapsed={collapsed}/>
      </Box>
      <SidebarContent>
        <Box maxWidth={240}>
          <List>
            <GmailSidebarItem
              color={"#1967d2"}
              startIcon={<Inbox />}
              label={"All Projects"}
              {...commonProps(0)}
              dotOnCollapsed={false}
            />
            <GmailSidebarItem
              color={"#1967d2"}
              startIcon={<AccountBoxIcon />}
              label={"Your Projects"}
              {...commonProps(1)}
            />
            <GmailSidebarItem
              color={"#1967d2"}
              startIcon={<FolderSharedIcon />}
              label={"Shared With You"}
              {...commonProps(2)}
            />
            <GmailSidebarItem
              color={"#1a73e8"}
              startIcon={<DeleteIcon />}
              label={"Trashed Projects"}
              {...commonProps(3)}
            />
            <Divider />
            <Menu
              renderToggle={({
                collapsed: menuCollapsed,
                onClick,
              }: {
                collapsed: boolean;
                onClick: GmailSidebarItemProps["onClick"];
              }) => (
                <GmailSidebarItem
                  startIcon={
                    menuCollapsed ? <KeyboardArrowUp /> : <KeyboardArrowDown />
                  }
                  label={collapsed ? "" : "Labels"}
                  onClick={onClick}
                />
              )}
            >
              <GmailSidebarItem
                startIcon={<FunctionsIcon />}
                label={"4U"}
                {...commonProps(5)}
              />
              <GmailSidebarItem
                startIcon={<FunctionsIcon />}
                label={"3U"}
                {...commonProps(6)}
              />
              <GmailSidebarItem
                startIcon={<AssignmentIcon />}
                label={"Trial"}
                {...commonProps(7)}
              />
              <GmailSidebarItem
                startIcon={<AssignmentIcon />}
                label={"Quiz"}
                //amount={"52"}
                {...commonProps(8)}
              />
              <GmailSidebarItem
                startIcon={<Settings />}
                label={"UNSW"}
                {...commonProps(9)}
              />
              <GmailSidebarItem
                startIcon={<Add />}
                label={"Create Label"}
                {...commonProps(10)}
              />
            </Menu>
          </List>
        </Box>
      </SidebarContent>
      <Divider />
      
    </>
  );
};

export default AppSidebar;
