interface IVerseProps {
    verse: string;
    verseRef: string;
}

export default function Verse({ verse, verseRef }: IVerseProps) {
    return (
        <div className="text-xs md:text-sm font-bold text-center px-4 md:px-0">
            {verse}
            <span className="text-[10px] md:text-xs font-bold text-center text-primary block mt-1">{verseRef}</span>
        </div>
    );
}