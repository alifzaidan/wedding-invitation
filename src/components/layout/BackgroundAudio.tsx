import { useEffect, useRef, useState } from 'react';
import { RiNeteaseCloudMusicLine } from 'react-icons/ri';

export default function BackgroundAudio() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, []);

    const toggleAudio = () => {
        if (isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio ref={audioRef} loop>
                <source src="/assets/audio/bermuara.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>
            <button onClick={toggleAudio} className="fixed bottom-4 left-4 p-2 shadow-xl bg-primary rounded-full">
                <RiNeteaseCloudMusicLine className={`text-secondary sm:text-4xl text-3xl ${isPlaying ? 'animate-spin-slow' : 'Play'}`} />
            </button>
        </div>
    );
}
