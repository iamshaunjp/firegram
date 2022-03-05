import React, { useState } from 'react';

const UploadForm = () => {
    const [ file, setFile ] = useState(null);
    const [errror, setError] = useState(null);

    const types = [ 'image/png', 'image/jpeg']

    const changeHandler = (e)=> {
        let selected = e.target.files[0];
        if ( selected && types.includes(selected.type)){
            setFile(selected);
            setError('');
        }else {
            setFile(null);
            setError('Please select a valid image file type (png or jpeg)');
        }
    }
  return (
    <form>
        <input type="file" onClick ={changeHandler}/> 
        <div className="output">
            {error && <div className="error">{error}</div>}
            {file && <div>{file.name}</div>}
        </div>
    </form>
  )
}

export default UploadForm;