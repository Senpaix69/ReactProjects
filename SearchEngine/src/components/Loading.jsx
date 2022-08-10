import React from 'react';
import { Rings } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className='flex justify-center items-center'>
            <Rings type='puff' color='#00BFFF' height={550} width={100} />
        </div>
    )
}

export default Loading
