import { useParams, Link } from 'react-router-dom'

const PokemonDetail = () => {
    const { id } = useParams()

    return (
        <div>
            <img
                src={`https://picsum.photos/192/192?random=${id}`}
                alt="포켓몬 이미지" />
            <h2>{id}</h2>
            <Link to="/">
                돌아가기
            </Link>
        </div>
    )
}

export default PokemonDetail