import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';



function Footer() {

    const [value, setValue] = useState();
    const [array, setArray] = useState<string[] | null>(null);

    useEffect(() => {
        const foo = async () => {
            //setArray(await getAll());
        }
       foo();
    }, []);

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
            {array  && array.map((array : string, i) => <Typography key={array + {i}}> {array} </Typography>)}
        </Box>
    );
}

export default Footer;