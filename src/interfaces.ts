import { ModuleMetadata } from "@nestjs/common/interfaces";
import { IClusterConfig, ISingleHostConfig } from "influx";

export type InfluxModuleOptions = IClusterConfig | ISingleHostConfig;

export interface InfluxModuleAsyncOptions
    extends Pick<ModuleMetadata, "imports"> {
    useFactory: (
        ...args: any[]
    ) => Promise<InfluxModuleOptions> | InfluxModuleOptions;
    inject: any[];
}
