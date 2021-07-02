import React from "react";
import { NavLink } from 'react-router-dom';
import Delete from "@material-ui/icons/Delete";
import HighlightIcons from "@material-ui/icons/Highlight";
import ArchiveIcon from '@material-ui/icons/Archive';
import NotesIcon from '@material-ui/icons/Notes';

function Navbar(){
    return(
        <header>
            <div className="navbar">
                <ul>
                    <h1><HighlightIcons />Keeper</h1>
                    <li><NavLink exact activeClassName="current" to='/'><NotesIcon />Notes</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/archive'><ArchiveIcon />Archive</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/trash'><Delete />Trash</NavLink></li>
                </ul>
            </div>
        </header>)
}

export default Navbar;