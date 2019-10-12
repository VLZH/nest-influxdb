import { Inject, Injectable } from "@nestjs/common";
import { InfluxDB } from "influx";
import { InfluxModuleOptions } from "./interfaces";

@Injectable()
export class InfluxDbService extends InfluxDB {
    constructor(
        @Inject("INFLUX_DB_OPTIONS")
        private readonly config: InfluxModuleOptions
    ) {
        super(config);
    }
}
