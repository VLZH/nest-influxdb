![npm version](https://badgen.net/npm/v/nest-influxdb)
![downloads](https://badgen.net/npm/dm/nest-influxdb)
![issues](https://badgen.net/github/issues/vlzh/nest-influxdb)

# Description

InfluxDB module for Nest based on the official [InfluxDb package](https://yarnpkg.com/en/package/influx).

# Installation

```bash
npm install nest-influxdb --save
```

or

```bash
yarn add nest-influxdb
```

# Usage

```javascript
import { Module } from "@nestjs/common";
import { InfluxDbModule, InfluxModuleOptions } from "nest-influxdb";
import { UtilsModule } from "./utils/utils.module";
import { ConfigService } from "./utils/config/config.service";

@Module({
    imports: [
        InfluxDbModule.forRootAsync({
            imports: [UtilsModule],
            inject: [ConfigService],
            useFactory: async (
                config_servie: ConfigService
            ): Promise<InfluxModuleOptions> => {
                return {
                    host: config_servie.get("INFLUX_HOST")
                };
            }
        }),
        BlogModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
```
