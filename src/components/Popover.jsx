
import React from 'react'

export const Popover =({inputValue,setInputValue,onClose,onRemove})=>{
    return(
        <div style={{position:'absolute',
                    top:'50px',
                    left:'100px',
                    backgroundColor:'white',
                    border:'1px solid #ccc',
                    padding:'20px',
                    zIndex: 1000,

        }}>
            <div>
                <label>Input:</label>
                <input type='text'value={inputValue}onChange={(e)=>setInputValue(e.target.value)}/>
            </div>
            <div>
                <button onClick={onClose}>Close Popover</button>
                <button onClick={onRemove}>Remove Input & Reset</button>
            </div>
        </div>
    )
}
