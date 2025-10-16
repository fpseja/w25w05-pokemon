import PokemonCard from '../components/PokemonCard'
import { getPokemonList, getPokemonDetail, getPokemonSpecies } from '../api/pokemonApi'
import { useQuery } from '@tanstack/react-query'

interface Pokemon {
    id: number;
    name: string;
    image: string;
}

interface NameEntry {
    name: string;
    language: {
        name: string;
        url: string;
    };
}

interface PokeType {
    type: {
        name: string;
        url: string;
    }
}

export default function PokemonList() {
    const { data: pokemons, isLoading, isError, error } = useQuery({
        queryKey: ['pokemons'],
        queryFn: async () => {
            const list = await getPokemonList(1025)

            return Promise.all(
                list.map(async (p: Pokemon) => {

                    const detail = await getPokemonDetail(p.name);
                    const species = await getPokemonSpecies(detail.id);
                    const koreanName = species.names.find((n: NameEntry) => n.language.name === "ko")?.name;

                    return {
                        id: detail.id,
                        name: koreanName || detail.name,
                        image: detail.sprites.other["official-artwork"].front_default,
                        types: detail.types.map((t: PokeType) => t.type.name),
                    }
                })
            )
        },
    })

    if (isLoading) {
        return <p className="text-center mt-10">Loading...</p>
    }

    if (isError) {
        return <p className="text-center mt-10">오류 발생: {error.message}</p>
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">포켓몬 도감</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {(pokemons ?? []).map(p => (
                    <PokemonCard key={p.id} pokemon={p} />
                ))}
            </div>
        </div>
    )
}