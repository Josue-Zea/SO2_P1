import React, { useState } from 'react';
import { CpuScreen } from './CpuScreen';
import { HomePage } from './HomePage';
import { SizeScreen } from './SizeScreen';

export const InitialScreen = () => {
    const [page, setPage] = useState(0);
    return (
        <div id="InitialScreen">
            {
                page=== 0 ? <HomePage setPage={setPage}/>
                : page === 1 ? <CpuScreen setPage={setPage}/>
                : <SizeScreen setPage={setPage}/>
            }
        </div>
    )
};