import React, {useEffect, useState} from 'react';
import axios from "axios";

function FetchValuta() {
    const [data, setData] = useState({});
    useEffect(() => {
        async function makeRequest(){
            const result = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_gkMNDWW06NkHJ8nvczJABBdXitQfn4Kpz2OzVjD0');
            setData(result);
            console.log(result);

        }
        makeRequest();
    }, []);
    return data;
}

export default FetchValuta;