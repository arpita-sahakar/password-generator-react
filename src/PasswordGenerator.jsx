import React from 'react'

function PasswordGenerator() {
    return (
        <div>
            <label>
            length of password : 
            <input type="text"></input><br/>
            </label>

            <input type="checkbox" name="LowerCase"></input>
            <label for="LowerCase">LowerCase</label><br/><br/>

            <input type="checkbox" name="UpperCase"></input>
            <label for="UpperCase">UpperCase</label><br/><br/>

            <input type="checkbox" name="Special characters"></input>
            <label for="Special characters">Special characters</label><br/><br/>

            <input type="checkbox" name="Numeric"></input>
            <label for="Numeric">Numeric</label><br/>
        </div>
    )
}

export default PasswordGenerator
