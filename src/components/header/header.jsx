import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {NavLink } from 'react-router-dom';
import { getMovies, getShows } from '../../features/movies/movie-slice';
import user from '../../images/user.png'
import './header.scss';
const Header = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  return (
    <div className='header'>
      <NavLink to={'/Redux-Toolkit-Movie'}>
        <div className='logo'> Movie App</div>
      </NavLink>
      <div className='search-bar'>
      <form onSubmit={(data) => {
        data.preventDefault();
        if(input === '') return alert('please enter name movies or shows to search')
        dispatch(getMovies(input));
        dispatch(getShows(input));
        
      }}>
        <input type={'text'} value={input} onChange={(e) => setInput(e.target.value)}/>
        <button>Search</button>
      </form>
      </div>
      <div className='user-img'>
        <img src={user} alt={'user'}/>
      </div>
    </div>
  )
}

export default Header;