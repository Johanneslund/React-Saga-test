import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_NAMES } from '../redux/reducers/nameReducer';


function Footer() {
    
    const dispatch = useDispatch();

    const [value, setValue] = useState();
    const [array, setArray] = useState<string[] | null>(null);

    const names = useSelector((state: any) => state.names.names);

    useEffect(() => {
        const foo = async () => {
            dispatch({ type: GET_ALL_NAMES});
        }
       foo();
    }, []);

    useEffect(() => {
        setArray(names);
    }, [names]);

    return (
        <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
            {array && array.map((line : string, i) => <Typography key={line + {i}}> {line} </Typography>)}
        </Box>
    );
}

export default Footer;