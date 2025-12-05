import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { firebaseConfig } from './config';

const isConfigValid = firebaseConfig.apiKey !== "YOUR_API_KEY";

let app;
let auth: any = null;

if (isConfigValid) {
    try {
        app = initializeApp(firebaseConfig);
        auth = getAuth(app);
    } catch (error) {
        console.error("Firebase init error:", error);
    }
} else {
    console.warn("Firebase config missing. Auth disabled.");
}

export { auth };
