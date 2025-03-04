import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useSearch = (searchTerm: string) => {
    const key = '87c105fb0fc0466e60fee9eb05e9ee66';
    return useQuery({
        queryKey: ["search", searchTerm],
        queryFn: () => {
            return axios.get(`https://api.themoviedb.org/3/search/multi?api_key=${key}&query=${searchTerm}`);
        },
        gcTime: 3000,
        staleTime: 3000,
    });
}
export default useSearch