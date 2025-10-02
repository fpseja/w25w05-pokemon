import { Link } from 'react-router-dom'

interface Pokemon {
    id: number;
    name: string;
}

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <Link to={`/pokemon/${pokemon.id}`} >
            <img
                src={`https://picsum.photos/128/128?random=${pokemon.id}`}
                alt={pokemon.name}
            />
            <p>{pokemon.name}</p>
            <p>#{pokemon.id}</p>
        </Link>
    )
}