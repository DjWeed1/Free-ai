import React, { useState, useRef } from 'react';
import { Mic, StopCircle, Play } from 'lucide-react';

const VoiceAI: React.FC = () => {
    const [recording, setRecording] = useState(false);
    const [audioURL, setAudioURL] = useState<string | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    const startRecording = async () => {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        mediaRecorder.ondataavailable = (e) => {
            if (e.data.size > 0) chunksRef.current.push(e.data);
        };
        mediaRecorder.onstop = () => {
            const blob = new Blob(chunksRef.current, { type: 'audio/webm' });
            setAudioURL(URL.createObjectURL(blob));
            chunksRef.current = [];
        };
        mediaRecorder.start();
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md text-center">
            <h2 className="text-2xl font-bold mb-4">Voice AI Demo</h2>
            <p className="mb-4 text-gray-600">Record your voice and play it back. Future integration will send audio to the AI backend.</p>
            <div className="flex justify-center gap-4 mb-4">
                {!recording && (
                    <button
                        onClick={startRecording}
                        className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:shadow-lg transition"
                    >
                        <Mic size={20} />
                        Start Recording
                    </button>
                )}
                {recording && (
                    <button
                        onClick={stopRecording}
                        className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:shadow-lg transition"
                    >
                        <StopCircle size={20} />
                        Stop
                    </button>
                )}
                {audioURL && (
                    <button
                        onClick={() => new Audio(audioURL).play()}
                        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:shadow-lg transition"
                    >
                        <Play size={20} />
                        Play
                    </button>
                )}
            </div>
            {audioURL && (
                <audio controls src={audioURL} className="w-full mt-2" />
            )}
        </div>
    );
};

export default VoiceAI;
