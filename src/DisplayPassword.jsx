import axios from 'axios'
import React from 'react'

function DisplayPassword({getAPIPassword, generatedPassword}) {

    return (
        <div>
            <h3>Generate your password</h3>
            <textarea className="passwordDisplay" value ={generatedPassword} row="50" cols="100"></textarea><br/>
            <button onClick={getAPIPassword}>Click</button>
        </div>
    )
}

export default DisplayPassword
