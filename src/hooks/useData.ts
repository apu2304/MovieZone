import { useQueries } from "@tanstack/react-query";
import axios from "axios";

const useData = (urls: string[]) => {
    
    return useQueries({
        queries: urls.map((url, index) => ({
            queryKey: ["data", index],
            queryFn: () => axios.get(url),
            gcTime: 3000,
            staleTime: 3000,
          }))
    });

}
export default useData