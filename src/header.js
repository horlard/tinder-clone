import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
import {Link} from 'react-router-dom';
import './header.css'

export default function header({backButton}) {
    return (
        <div className='header'>

            {
                backButton ? <Link to='/'>
                                <IconButton>
                                    <ArrowBackIosIcon fontSize='large' className='header__icon'/>
                                </IconButton>
                            </Link> : <IconButton>
                                    <PersonIcon fontSize='large' className='header__icon'/>
                            </IconButton>
            }
            
            <Link to='/'>
            <IconButton>
            <img className='header__logo' src='https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png' alt='tinder-logo'/>
            </IconButton>
            </Link>
            
            
            <Link to='/chats'>
            <IconButton>
                    <ForumIcon fontSize='large' className='header__icon'/>
            </IconButton>
            </Link>
            
            
        </div>
    )
}
