import React from 'react';

export const HomePage = ({ setPage }) => {
    return (
        <>
            <div className="card mb-3 Card container">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img
                            src="https://img.freepik.com/free-vector/nature-scene-with-river-hills-forest-mountain-landscape-flat-cartoon-style-illustration_1150-37326.jpg"
                            className="img-fluid rounded-start ImageClass" alt="Una imagen"
                        />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title CardTexts">Proyecto 1</h5>
                            <p className="card-text CardTexts">Josué David Zea Herrera - 201807159</p>
                            <p className="card-text CardTexts"><small className="text-muted CardTexts">Sistemas operativos 2</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container ButtonsHome'>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary ButtonHome"
                        onClick={() => setPage(1)}
                    >
                        CPU
                    </button>
                </div>
                <div>
                    <button
                        type="button"
                        className="btn btn-primary ButtonHome"
                        onClick={() => setPage(2)}    
                    >
                        Espacio
                    </button>
                </div>
            </div>
        </>
    )
};