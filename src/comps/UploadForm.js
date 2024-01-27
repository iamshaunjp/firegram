import React, { useState } from 'react';
import ProgressBar from '../comps/ProgressBar';


const UploadForm = () => {
    // store image in local state
    const [file, setFile] = useState(null);
    const [error, SetError] = useState(null);
    const types = ['image/png', 'image/jpeg'];

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if (selected && types.includes(selected.type)) {
            setFile(selected); 
            SetError("");
        } else {
            setFile(null);
            SetError("Please select an image file (png) or jpeg")
        }

    }
    return (
        <form>
            <input type='file' onChange={changeHandler} />
            <span>+</span>
            <div className='output'>
                <div className='output'>
                    {error && <div className="error">{error}</div>}
                    {file && <div className="error">{file.name}</div>}
                    {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
            </div>
        </form>
    )
}

export default UploadForm;