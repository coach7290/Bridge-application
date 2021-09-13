import React, { useState } from 'react';


const Results = ({ questions, q1Value, q2Value, q3Value, results }) => {






    return (
        <div className='results-container'>
            <div className='hero'>
                <p>By utilising the Bridge Sales Enablement Agency calculator organisations can simplify the processes associated with indirect procurement and unlock significant typical savings of up to 60% of process costs. </p>
                <p>Based on what you have told us about your process we can estimate that the following costs are being insured within your procurement processes.</p>
            </div>
            <div className='results-right'>
                <div className='results-list'>
                    {results?.map(result => {
                        return (
                            <div key={result.title} className='item'><p>{result.title}</p><span><p>{`£ ${result.total}`}</p></span></div>
                        )
                    })}
                </div>

            </div>
        </div>
    )
}

export default Results
