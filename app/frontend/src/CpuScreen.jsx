import React, { useEffect, useState } from 'react';
import { Graphic } from '../components/processComponent';
import {GetPercentCpu} from "../wailsjs/go/main/App";

export const CpuScreen = ({setPage}) => {
    const [data, setData] = useState([]);
    const updateResultText = (newValue) => setData(prevData => [...prevData, newValue]);
    
    useEffect(() => {
        setInterval(() => {
            GetPercentCpu().then(updateResultText);
            // setData(prevData => [...prevData, newValue]);
            if(data.length > 28 ) deleteFirst();
        }, 2000);
    }, []);

    const deleteFirst = () => {
        // data.shift();
        setData([...data.shift()]);
    };

    return (
        <>
           <Graphic dataCpu={data}/>
           <div className='DivPosition'>
                <button className='ButtonBack' onClick={() => setPage(0) }>Regresar</button>
            </div>
        </>
    )
};