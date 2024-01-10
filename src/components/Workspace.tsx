import { Box } from "@mui/material";
import Custombutton from "./Custombutton";
import QR from "./QR";


function Workspace() {
    return (
        <>
            <Box sx={{ minWidth: "100%", minHeight: "80vh" }}>
                <Custombutton />
                {/* <QR /> */}
            </Box>
        </>
    );
}

export default Workspace;