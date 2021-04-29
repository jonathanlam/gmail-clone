import React from "react";
import styled from "styled-components";
import {
  Box,
  IconButton,
  MenuItem,
  Checkbox,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";
import MoreVert from "@material-ui/icons/MoreVert";
import Refresh from "@material-ui/icons/Refresh";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Settings from "@material-ui/icons/Settings";
import Keyboard from "@material-ui/icons/Keyboard";
import Edit from "@material-ui/icons/Edit";
import Inbox from "@material-ui/icons/Inbox";
import AppsIcon from '@material-ui/icons/Apps';
import FolderIcon from '@material-ui/icons/Folder';
import { useSizedIconButtonStyles } from "@mui-treasury/styles/iconButton/sized";
import { useRowGutterStyles } from "@mui-treasury/styles/gutter/row";
import ArrowMenu from "@mui-treasury/components/menu/arrow";
import { GmailTabs, GmailTabItem } from "@mui-treasury/components/tabs/gmail";
import MailListItem from "./MailListItem";

const Div = styled("div")`
  height: 48px;
  padding: 0 16px;
  box-shadow: inset 0 -1px 0 0 rgba(100, 121, 143, 0.122);
  display: flex;
  align-items: center;
`;

const useStyles = makeStyles(() => ({
  root: {
    fontSize: 14,
    paddingLeft: 32,
    width: 160,
  },
}));

const useCheckboxStyles = makeStyles(({ palette }) => ({
  checked: {
    color: palette.text.primary,
  },
}));

const AppContent = () => {
  const actionStyles = useSizedIconButtonStyles({ padding: 8, childSize: 20 });
  const gutterStyles = useRowGutterStyles({ size: "0.25rem" });
  const menuItemClasses = useStyles();
  const checkboxClasses = useCheckboxStyles();
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Div>
        <Box display="inline-flex" className={gutterStyles.parent}>
          <ArrowMenu
            renderElement={({ styles, onClose }) => (
              <Checkbox
                classes={checkboxClasses}
                className={styles.button}
                color={"default"}
                onChange={onClose}
              />
            )}
          >
            <MenuItem classes={menuItemClasses}>All</MenuItem>
            <MenuItem classes={menuItemClasses}>None</MenuItem>
            <MenuItem classes={menuItemClasses}>Read</MenuItem>
            <MenuItem classes={menuItemClasses}>Unread</MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Refresh />
          </IconButton>
          <IconButton classes={actionStyles}>
            <MoreVert />
          </IconButton>
        </Box>
        <Box
          display="inline-flex"
          alignItems="center"
          ml="auto"
          className={gutterStyles.parent}
        >
          <Box fontSize={12} color="text.secondary">
            1-50 of 1,971
          </Box>
          <IconButton disabled classes={actionStyles}>
            <KeyboardArrowLeft />
          </IconButton>
          <IconButton classes={actionStyles}>
            <KeyboardArrowRight />
          </IconButton>
          <ArrowMenu
            renderElement={({ styles, onClose }) => (
              <IconButton
                className={styles.button}
                color={"default"}
                onChange={onClose}
              >
                <Keyboard />
              </IconButton>
            )}
          >
            <MenuItem classes={menuItemClasses}>
              <ListItemIcon style={{ minWidth: 32 }}>
                <Edit fontSize={"small"} />
              </ListItemIcon>
              English
            </MenuItem>
          </ArrowMenu>
          <IconButton classes={actionStyles}>
            <Settings />
          </IconButton>
        </Box>
      </Div>
      <GmailTabs value={index} onChange={(_, value) => setIndex(value)}>
        <GmailTabItem icon={<Inbox />} label={"List"} />
        <GmailTabItem
          icon={<FolderIcon />}
          label={"Folders"}
          //tag={"2 new"}
          //subLabel={"Youtube, LinkedIn"}
        />
        <GmailTabItem
          icon={<AppsIcon />}
          label={"Question Bank"}
          //subLabel={"Pattern Matching, Medium Daily"}
        />
        
      </GmailTabs>
      {getMailList().map((mail, i) => (
        <MailListItem key={i} {...mail} />
      ))}
    </>
  );
};

const getMailList = () => [
  {
    starred: true,
    labeled: true,
    title: "NS 4u: Induction Handout",
    owner: "Jonathan Lam",
    date: "5 minutes ago by You",
    id: 1
  },
  {
    starred: true,
    labeled: true,
    title: "NS 4u: Induction Solutions",
    owner: "Jonathan Lam",
    date: "1 day ago by Vincent Tran",
    id:2
  },
  {
    starred: true,
    labeled: true,
    title: "NS 4u: Integration Handout",
    owner: "Jonathan Lam",
    date: "1 day ago by You",
    id:3
  },
];

export default AppContent;
