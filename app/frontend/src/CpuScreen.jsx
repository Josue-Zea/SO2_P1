import React, { useEffect, useState } from 'react';
import { Graphic } from '../components/processComponent';
import {GetPercentCpu} from "../wailsjs/go/main/App";

export const CpuScreen = ({setPage}) => {
    const [data, setData] = useState([]);
    const updateResultText = (newValue) => setData(prevData => [...prevData, newValue]);
    
    useEffect(() => {
        setInterval(() => {
            const newValue = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            GetPercentCpu().then(updateResultText);
            // setData(prevData => [...prevData, newValue]);
            if([...data, newValue].length > 30 ) deleteFirst();
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