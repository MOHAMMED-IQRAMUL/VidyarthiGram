// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//     apiKey: NEXT_PUBLIC_API_KEY,
//     authDomain: NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: NEXT_PUBLIC_APP_ID,
//     measurementId: NEXT_PUBLIC_MEASUREMENT_ID 
// };


// const app = initializeApp(firebaseConfig);

// const db = getFirestore(app);

// export const getCourses = async () => {
//     const coursesCol = collection(db, 'courses');
//     const courseSnapshot = await getDocs(coursesCol);
//     const courseList = courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     return courseList;
//   };
  
//   export const getCourseById = async (id) => {
//     const courseDoc = doc(db, 'courses', id);
//     const courseSnapshot = await getDoc(courseDoc);
//     return { id: courseSnapshot.id, ...courseSnapshot.data() };
//   };


// lib/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID 
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getCourses = async () => {
  const coursesCol = collection(db, 'courses');
  const courseSnapshot = await getDocs(coursesCol);
  const courseList = courseSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return courseList;
};

export const getCourseById = async (id) => {
  const courseDoc = doc(db, 'courses', id);
  const courseSnapshot = await getDoc(courseDoc);
  return { id: courseSnapshot.id, ...courseSnapshot.data() };
};
