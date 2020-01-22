import React from 'react'//here we are iporting an image which will be visible while the results etc is being loading
import spinner from './spinner.gif';

export default function Spinner() {
    return (
        <div>
            <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
        </div>
    )
}
