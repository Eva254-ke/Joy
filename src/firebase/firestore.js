import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore";
import app from './config';

const db = getFirestore(app);

export const addBooking = async (bookingData) => {
  const docRef = await addDoc(collection(db, "bookings"), bookingData);
  return docRef.id;
};

export const getUserBookings = async (userId) => {
  const q = query(collection(db, "bookings"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
