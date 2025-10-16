import { Link } from 'react-router-dom'
import { typeColors } from "../utils/typeColors";

interface Pokemon {
    id: number;
    name: string;
    image: string;
    types: string[];
}

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
    const mainType = pokemon.types[0] as keyof typeof typeColors;
    const typeStyle = typeColors[mainType] || "bg-gray-200 text-black";

    return (
        <Link
            to={`/pokemon/${pokemon.id}`}
            className={`rounded-xl shadow-md hover:shadow-lg transition-transform hover:scale-105 relative overflow-hidden border ${typeStyle}`}
        >
            {/* 상단 번호 */}
            <div
                className={`absolute top-2 left-2 px-2 py-1 rounded-md text-xs font-semibold shadow-sm  ${typeStyle} bg-white/30`}
            >
                #{pokemon.id}
            </div>

            {/* 포켓몬 이미지 */}
            <div className="flex justify-center p-4">
                <img
                    src={pokemon.image}
                    alt={pokemon.name}
                    className="w-24 h-24 drop-shadow-md"
                />
            </div>

            {/* 이름 */}
            <div className="p-3 text-center bg-white/70 rounded-b-xl">
                <h3 className="text-black text-lg font-bold mb-2">{pokemon.name}</h3>
            </div>
        </Link>
    )
}
