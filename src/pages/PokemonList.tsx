import PokemonCard from '../components/PokemonCard'

interface Pokemon {
    id: number;
    name: string;
}

export default function PokemonList() {
    const pokemons: Pokemon[] = [
        { id: 1, name: '피카츄' },
        { id: 2, name: '이상해씨' },
        { id: 3, name: '이상해꽃' },
        { id: 4, name: '파이리' },
        { id: 5, name: '리자드' },
        { id: 6, name: '리자몽' },
        { id: 7, name: '꼬부기' },
        { id: 8, name: '어니부기' },
    ]

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">포켓몬 도감</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {pokemons.map(p => (
                    <PokemonCard key={p.id} pokemon={p} />
                ))}
            </div>
        </div>
    )
}