import React, { Fragment } from 'react';
import De from './De';


const Lancerde =({lancer,num1,num2,button}) => {
    const n1=num1
    const n2=num2
    const b=button

    return (
        <Fragment>
            <De num={n1}/>
            <De num={n2}/>
            <br/>
            <br/>
            <button onClick={lancer}>{b}</button>
        
        </Fragment>
    )
}

export default Lancerde 