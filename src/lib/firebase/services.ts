import { addDoc, collection, doc, getDoc, getDocs, getFirestore, orderBy, query } from 'firebase/firestore';
import app from './init';

const firestore = getFirestore(app);

export async function retrieveData(collectionName: string) {
    const q = query(collection(firestore, collectionName), orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return data;
}

export async function saveData(collectionName: string, data: object) {
    try {
        await addDoc(collection(firestore, collectionName), data);
        return { status: true, statusCode: 200, message: 'Data berhasil disimpan' };
    } catch (error) {
        return { status: false, statusCode: 400, message: 'Data gagal disimpan' };
    }
}
