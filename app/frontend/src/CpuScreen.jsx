import React, { useEffect, useState } from 'react';
import { Graphic } from '../components/processComponent';

export const CpuScreen = ({setPage}) => {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        setInterval(() => {
            const newValue = Math.floor(Math.random() * (100 - 0 + 1)) + 0;
            setData(prevData => [...prevData, newValue]);
            if([...data, newValue].length > 30 ) deleteFirst();
        }, 2000);
    }, []);

    const deleteFirst = () => {
        data.shift();
        setData(data);
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