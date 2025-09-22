import { useQuery } from "@tanstack/react-query";
import api from "../api/rimacChallenge";
import { ListDataPlan } from "../interfaces/plan.interface";

async function fetchPlans() {
  const {data: {list}} = await api.get<ListDataPlan>("/plans.json");
  return list;
}

export function useFetchPlans(){
  return useQuery({
    queryKey: ['plan'],
    queryFn: fetchPlans
  })
}