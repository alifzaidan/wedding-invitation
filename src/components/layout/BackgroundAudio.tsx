'use client';

import { useRef, useState, forwardRef, useImperativeHandle } from 'react';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';

const BackgroundAudio = forwardRef((props, ref) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false); // Mulai dengan audio tidak bermain

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    useImperativeHandle(ref, () => ({
        toggleAudio,
    }));

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/assets/audio/kahitna-menikahimu.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={toggleAudio} className="fixed bottom-4 left-4 p-2 shadow-xl bg-primary rounded-full">
                <RiNeteaseCloudMusicLine className={`text-secondary sm:text-4xl text-3xl ${isPlaying ? 'animate-spin-slow' : 'Play'}`} />
            </button>
        </div>
    );
});

BackgroundAudio.displayName = 'BackgroundAudio';

export default BackgroundAudio;
