import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';


const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsub = projectFirestore.collection(collection)
            .orderBy('createdAt', 'desc')
            .onSnapshot((snap) => {
            let documents = [];
            snap.forEach(doc => {
                documents.push({ ...doc.data(), id: doc.id })    // take snapshot of uploaded image information
            });
            setDocs(documents);
        
            })
        return () => unsub();  // clean-up function
    }, [collection])
    return { docs };
}

export default useFirestore