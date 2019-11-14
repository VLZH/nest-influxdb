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

Register module:

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
        TrafficModule
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
```

Get access to `InfluxDbService` in some your service:

```javascript
@Injectable()
export class TrafficService {
    constructor(private readonly influx_service: InfluxDbService) {}

    public async getLastDay(): Promise<ResponseDto> {
        const results = await this.influx_service.query(`
            select MEAN(*) from traffic WHERE time > now() - 1d GROUP BY time(10m);
        `);

        return results.map(pointToDto);
    }
}
```
