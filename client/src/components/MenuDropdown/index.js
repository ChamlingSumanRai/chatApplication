import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import {resetUser} from '../../redux/reducers/userSlice'
import { deepOrange, deepPurple } from '@mui/material/colors';
import { useDispatch } from 'react-redux';

export default function BasicMenu() {
  const dispatch=  useDispatch()
  return (
    <div style={{float: 'right'}}>
      <button  onClick={()=>dispatch(resetUser())}>logout</button>
    </div>
  );
}