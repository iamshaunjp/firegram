import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);


    useEffect(() => {
        // references
        const storageRef = ref(projectStorage, file.name);
        const collectionRef = collection(projectFirestore, 'images');

        const uploadImage = uploadBytesResumable(storageRef, file);

        uploadImage.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgress(percentage);

        }, (err) => {
            setError(err);
        }, async () => {
            await getDownloadURL(uploadImage.snapshot.ref).then((URL) => {
                console.log(URL);
                const data = {
                    url: URL,
                    createdAt: timestamp
                }
                setUrl(URL);
                console.log(data);
                addDoc(collectionRef, data)
                    .then(docRef => {
                        console.log("Document has been added successfully");
                    })
                    .catch(error => {
                        console.log(error);
                    })

            });

        })
    }, [file]);

    return { progress, url, error }
}

export default useStorage;
