interface ISchoolNameProps{
    schoolName: string;
}

export default function SchoolName({schoolName}: ISchoolNameProps) {
    return (
        <div>
            <h2 data-cy="school-name" className="text-lg md:text-2xl mt-2 font-bold text-center">
               {schoolName}
            </h2>
        </div>
    );
}