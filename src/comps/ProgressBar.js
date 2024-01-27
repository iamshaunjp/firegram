import React, { useEffect }  from 'react';
import useStorage from '../hooks/useStorage';
import {AnimatePresence, motion} from "framer-motion/dist/framer-motion";


const ProgressBar = ({file, setFile}) => {
    const { url, progress } = useStorage(file);
    console.log(progress, url)

    useEffect(() => {
        if (url) {
            setFile(null);
        }
    })
    return (
        <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
    )
}

export default ProgressBar;