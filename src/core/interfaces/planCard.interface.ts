import type { DataPlan } from "../interfaces/plan.interface";

export interface PlanCard {
  plan: DataPlan;
  onChangePlan: (e:DataPlan)=>void
  forWhom: string;
}
