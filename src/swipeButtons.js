import React from 'react'
import './swipeButtons.css'
import IconButton from '@material-ui/core/IconButton'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'

const swipeButtons = () => {
    return (
        <div className='swipebuttons'>

            <IconButton>
            <ReplayIcon fontSize='large' className='repeat'/>
            </IconButton>
            <IconButton>
            <CloseIcon fontSize='large' className='close'/>
            </IconButton>
            <IconButton>
            <StarRateIcon fontSize='large' className='star'/>
            </IconButton>
            <IconButton>
            <FavoriteIcon fontSize='large' className='Favorite'/>
            </IconButton>
            <IconButton>
            <FlashOnIcon fontSize='large' className='flash'/>
            </IconButton>
            
            
            
            
            
        </div>
    )
}

export default swipeButtons;
