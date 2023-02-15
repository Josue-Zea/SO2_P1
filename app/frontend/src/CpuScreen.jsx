import React from 'react';

export const CpuScreen = ({setPage}) => {
    return (
        <>
           <h1>CPU</h1>
           <div>
                <button onClick={() => setPage(0) }>Regresar</button>
            </div>
        </>
    )
};