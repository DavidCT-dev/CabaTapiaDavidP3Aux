import React, {useState} from 'react'
import { Box, Grid } from '@material-ui/core'
import { NavBarCaba } from './NavBarCaba'
import { Routes, Route } from 'react-router-dom'
import  HomeCaba  from '../home/HomeCaba'
import  AboutCaba  from '../about/AboutCaba'
import './routesLayoutCaba.css'

export const RoutesLayoutCaba = () => {
    const [darkMode, setDarkMode] = useState(true);
    function handleClick(){
        setDarkMode(!darkMode)
    }
  return (
    <div>
      <Grid container spacing={1} className={`content ${darkMode ? 'dark' : 'light'}`}>
        <Grid item xs={11} component={'header'} className={`${darkMode ? 'dark' : 'light'}`}>
            <NavBarCaba darkMode={darkMode} handleClick={handleClick} />
        </Grid>
        <Grid item xs={11} className={`container-content ${darkMode ? 'dark' : 'light'}`}>
            <Routes>
                <Route exact path={'/'} element={<HomeCaba />} />
                <Route exact path={'/about'} element={<AboutCaba />} />
            </Routes>
        </Grid>
        <Grid item xs={11} component={'footer'}>
            <Box className={`${darkMode ? 'dark' : 'light'} text-footer `}>
                <p>template created with &hearts; by <a  rel={'noreferrer'} target={'_blank'} href={'https://es.reactjs.org/'}>react js</a></p>
                <p>&copy; 2022</p>
            </Box>
        </Grid>
      </Grid>
    </div>
  )
}

