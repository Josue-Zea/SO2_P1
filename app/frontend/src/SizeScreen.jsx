import React from 'react';
import { GetSizeOfDisk } from "../wailsjs/go/main/App";

export const SizeScreen = ({ setPage }) => {
    const [data, setData] = useState([0, 0]);
    const updateResultText = (newValue) => setData(newValue);

    useEffect(() => {
        setInterval(() => {
            GetSizeOfDisk().then(updateResultText);
        }, 2000);
    }, []);

    return (
        <>
            <SizeGrapic dataSize={data}/>
            <div className='DivPosition'>
                <button className='ButtonBack' onClick={() => setPage(0)}>Regresar</button>
            </div>
        </>
    )
};