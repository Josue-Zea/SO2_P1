import React from 'react';

export const SizeScreen = ({setPage}) => {
    return (
        <>
           <h1>Size</h1>
           <div>
                <button onClick={() => setPage(0) }>Regresar</button>
            </div>
        </>
    )
};