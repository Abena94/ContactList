import React from "react";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Edit from "@material-ui/icons/Edit";
import { Container } from "@material-ui/core";
function ContactsList(props) {


 


  return (<div> <Container maxWidth="md">  
  <List >
  {props.contacts.map((contact) =>{
  <ListItem >
    <ListItemAvatar>
      <Avatar>
        
      </Avatar>
    </ListItemAvatar>
    <ListItemText
      primary={contact.name} 
      secondary={contact.email} 
    />
    <ListItemSecondaryAction>
      <IconButton >
        <DeleteIcon />
      </IconButton>
      <IconButton edge="end" aria-label="delete">
        <Edit />
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
  })}
</List></Container></div>);
}

export default ContactsList;
