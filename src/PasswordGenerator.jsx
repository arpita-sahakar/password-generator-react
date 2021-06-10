import React from "react";

function PasswordGenerator({ criteria, setCriteria }) {


  return (
    <div>
      <label>
        length of password :
        <input onChange={(e)=>setCriteria({...criteria, length: Number(e.target.value) })} type="text" value={criteria.length}></input>
        <br />
      </label>

      <input
        onClick={()=>setCriteria({...criteria,  lowerCase: !criteria.lowerCase })}
        type="checkbox"
        value={criteria.lowerCase}
        name="LowerCase"
      ></input>
      <label for="LowerCase">LowerCase</label>
      <br />
      <br />

      <input
        onClick={()=>setCriteria({...criteria,  upperCase: !criteria.upperCase })}
        type="checkbox"
        value={criteria.upperCase}
        name="UpperCase"
      ></input>
      <label for="UpperCase">UpperCase</label>
      <br />
      <br />

      <input
        onClick={()=>setCriteria({...criteria, specialCharacters: !criteria.specialCharacters })}
        type="checkbox"
        value={criteria.specialCharacters}
        name="Special characters"
      ></input>
      <label for="Special characters">Special characters</label>
      <br />
      <br />

      <input
        onClick={()=>setCriteria({...criteria,  numeric: !criteria.numeric })}
        type="checkbox"
        value={criteria.numeric}
        name="Numeric"
      ></input>
      <label for="Numeric">Numeric</label>
      <br />
    </div>
  );
}

export default PasswordGenerator;
