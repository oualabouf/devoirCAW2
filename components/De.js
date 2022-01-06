import React, { Fragment } from 'react';
import i1 from '../Static/1.png'
import i2 from '../Static/2.png'
import i3 from '../Static/3.png'
import i4 from '../Static/4.png'
import i5 from '../Static/5.png'
import i6 from '../Static/6.png'

const De =({num}) => {
    const imgs=[i1,i2,i3,i4,i5,i6]
    const n=num

    return (
        <Fragment>
        <img src={imgs[n]}></img>
        </Fragment>
    )
}

export default De