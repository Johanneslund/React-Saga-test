import axios from "axios";


export const requestAllNames = () => {
    const result = axios.get("https://baconipsum.com/api/?type=meat-and-filler")
        .then((res: any) => {
            return res.data;
        })
    return result;
}