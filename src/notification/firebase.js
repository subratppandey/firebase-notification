import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyBE-sl9XQk4_NMm3G-6VblEYPjk3NrREQY",
  authDomain: "pushnotifications-12405.firebaseapp.com",
  projectId: "pushnotifications-12405",
  storageBucket: "pushnotifications-12405.firebasestorage.app",
  messagingSenderId: "357731169695",
  appId: "1:357731169695:web:df86a095d463db7b5e79aa",
  measurementId: "G-1PT1RMN95S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);
    if (permission === "granted"){
        const token = await getToken(messaging, {vapidKey: "BDXsFOh5VlFYt2_fG_AV_8RjVyzK_3lesxQXzWEzyDtDpyH-larUII71Ez5k7x49YOjntAKu_n5EgdBNSgGVT60"});
        console.log(token);
    }
};