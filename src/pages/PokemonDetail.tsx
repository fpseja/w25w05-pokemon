import { useParams, Link } from 'react-router-dom'

const PokemonDetail = () => {
    const { id } = useParams()

    return (
        <div className="p-6 flex flex-col items-center">
            <img
                src={`https://picsum.photos/192/192?random=${id}`}
                alt="포켓몬 이미지"
                className="w-48 h-48 mb-4"
            />
            <h2 className="text-2xl font-bold">{id}</h2>
            <Link
                to="/"
                className="mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                돌아가기
            </Link>
        </div>
    )
}

export default PokemonDetail