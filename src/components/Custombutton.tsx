import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_NAME } from "../redux/reducers/nameReducer";


function Custombutton() {

    const dispatch = useDispatch();
    const name = useSelector((state: any) => state.names.name);

    const [localName, setLocalName] = useState("");

    function setName(name: any) {
        dispatch({type: SET_NAME, name})
    }

    return (
        <>
            <TextField onChange={(e) => setLocalName(e.target.value)}>

            </TextField>
            <Button sx={{ mt: "3vh" }} variant="contained" onClick={() => setName(localName)}>
               {name} : Klicka för att ändra namn
            </Button>
        </>
    );
}

export default Custombutton;