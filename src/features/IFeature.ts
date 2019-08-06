import LookEnv from "@mikazuki/lookenv";
import { Variables } from "../types";

export type Stats = {
  count: number;
  date: Date;
  users: { id: string; screen_name: string }[];
};

export interface IFeature {
  isEnabled(env: LookEnv<Variables>): Promise<boolean>;
  run(stats: Stats, env: LookEnv<Variables>): Promise<void>;
}
