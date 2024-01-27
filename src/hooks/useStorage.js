import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp} from '../firebase/config';

const useStorage = (file) => {
    const [url, setUrl] = useState(null);
    const [error, SetError] = useState(null);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection('images');

        storageRef.put(file).on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            SetError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();
            collectionRef.add({url:url, createdAt:createdAt})
            setUrl(url);
        })

    },
        [file]);
    return { progress, url, error };
    
}

export default useStorage;