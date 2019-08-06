import dayjs from "dayjs";
import LookEnv from "@mikazuki/lookenv";
import PixelaClient from "@mikazuki/pixela";

import { Variables } from "../types";
import { IFeature, Stats } from "./IFeature";

export class Pixela implements IFeature {
  public async isEnabled(env: LookEnv<Variables>): Promise<boolean> {
    return await env.has("CROUTON_PIXELA_ACCESS_TOKEN", "CROUTON_PIXELA_GRAPH_ID", "CROUTON_PIXELA_USERNAME");
  }

  public async run(stats: Stats, env: LookEnv<Variables>): Promise<void> {
    const graphId = await env.get("CROUTON_PIXELA_GRAPH_ID");
    const client = new PixelaClient(await env.get("CROUTON_PIXELA_USERNAME"), await env.get("CROUTON_PIXELA_ACCESS_TOKEN"));
    const graphs = await client.getGraphs();

    // if graph is not registered, create it
    if (graphs.every(graph => graph.id != graphId)) {
      await client.createGraph({ id: graphId, name: "Tweet Per Day", unit: "tweet(s)", type: "int", color: "shibafu" });
    }

    // pixel it!
    await client.createPixel({ graphId, date: dayjs(stats.date).format("YYYYMMDD"), quantity: stats.count });
  }
}
