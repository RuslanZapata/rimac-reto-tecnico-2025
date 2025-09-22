import { useQuery } from "@tanstack/react-query";
import api from "../api/rimacChallenge";
import { DataUser } from "../interfaces/user.interface";

async function fetchUsers() {
  const {data} = await api.get<DataUser>("/user.json");
  return data;
}

export function useFetchUsers(){
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUsers
  })
}