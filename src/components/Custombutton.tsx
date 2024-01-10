import { Button, TextField } from "@mui/material";
import { useState } from "react";




function Custombutton() {


    const [localName, setLocalName] = useState("");
    return (
        <>
            <TextField onChange={(e) => setLocalName(e.target.value)}>

            </TextField>
            {/* <Button sx={{ mt: "3vh" }} variant="contained" onClick={() => context.setName(localName)}>
                {context.name}: Klicka för att ändra namn
            </Button> */}
        </>
    );
}

export default Custombutton;