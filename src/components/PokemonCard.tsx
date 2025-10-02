import { Link } from 'react-router-dom'

interface Pokemon {
    id: number;
    name: string;
}

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    return (
        <Link
            to={`/pokemon/${pokemon.id}`}
            className="cursor-pointer bg-white shadow-md rounded-2xl p-4 flex flex-col items-center hover:scale-105 transition-transform"
        >
            <img
                src={`https://picsum.photos/192/192?random=${pokemon.id}`}
                alt={pokemon.name}
                className="w-32 h-32 mb-2"
            />
            <p className="text-lg font-bold">{pokemon.name}</p>
            <p className="text-gray-500">#{pokemon.id}</p>
        </Link>
    )
}