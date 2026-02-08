interface IChurchNameProps {
    churchName: string;
}

export default function ChurchName({ churchName }: IChurchNameProps) {
    return (
        <h2 data-cy="church-name" className="text-lg md:text-2xl mt-2 font-bold text-center">
            {churchName}
        </h2>
    );
}