import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const useFirestore = (collections) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const collectionRef = collection(projectFirestore, collections);
        const q = query(collectionRef, orderBy('createdAt', 'desc'));
            const unsubscribe = onSnapshot(q, (snap) => {
                let documents = [];
                snap.forEach(doc => {
                    documents.push({ ...doc.data(), id: doc.id });
                });
                setDocs(documents);
            });
        
        return () => unsubscribe();

    }, [collections]);

    return { docs };
}

export default useFirestore;
