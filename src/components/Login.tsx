import React from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/init';
import { useAuth } from '../context/AuthContext';
import { LogIn } from 'lucide-react';

const Login: React.FC<{ onLoginSuccess?: () => void }> = ({ onLoginSuccess }) => {
    const { user } = useAuth();

    const handleGoogleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
            if (onLoginSuccess) onLoginSuccess();
        } catch (error) {
            console.error('Google sign-in error', error);
        }
    };

    if (user) {
        return <p className="text-center mt-10">You are already signed in.</p>;
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h2 className="text-2xl font-bold mb-4">Sign in to Telefon KI</h2>
            <button
                onClick={handleGoogleSignIn}
                className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:shadow-lg transition"
            >
                <LogIn size={20} />
                Sign in with Google
            </button>
        </div>
    );
};

export default Login;
