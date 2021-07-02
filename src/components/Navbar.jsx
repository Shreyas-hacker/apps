import React from "react";
import { NavLink } from 'react-router-dom';
import Delete from "@material-ui/icons/Delete";
import ArchiveIcon from '@material-ui/icons/Archive';
import NotesIcon from '@material-ui/icons/Notes';

function Navbar(){
    <div>
        <ul>
            <li><NavLink to='/'><NotesIcon />Notes</NavLink></li>
            <li><NavLink to='/archive'><ArchiveIcon />Archive</NavLink></li>
            <li><NavLink to='/trash'><Delete />Trash</NavLink></li>
        </ul>
    </div>
}

export default Navbar;