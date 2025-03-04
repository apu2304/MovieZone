import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useDetails = (type: 'movie' | 'tv', id: any) => {
    const key = '87c105fb0fc0466e60fee9eb05e9ee66';
    return useQuery({
        queryKey: [type, id],
        queryFn: () => {
            return axios.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=${key}`);
        },
        gcTime: 3000,
        staleTime: 3000,
    });
}
export default useDetails