import { Inject, Injectable } from "@nestjs/common";
import { InfluxDB, IPingStats, IResults, IQueryOptions } from "influx";
import { InfluxModuleOptions } from "./interfaces";

@Injectable()
export class InfluxDbService {
    connection: InfluxDB | null;
    constructor(
        @Inject("INFLUX_DB_OPTIONS")
        private readonly config: InfluxModuleOptions
    ) {
        this.connection = null;
        this.connect();
    }

    public connect(): void {
        this.connection = new InfluxDB(this.config);
    }

    public async alterRetentionPolicy(
        ...args: Parameters<InfluxDB["alterRetentionPolicy"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.alterRetentionPolicy(...args);
        }
    }
    public async createContinuousQuery(
        ...args: Parameters<InfluxDB["createContinuousQuery"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.createContinuousQuery(...args);
        }
    }
    public async createDatabase(
        ...args: Parameters<InfluxDB["createDatabase"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.createDatabase(...args);
        }
    }
    public async createRetentionPolicy(
        ...args: Parameters<InfluxDB["createRetentionPolicy"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.createRetentionPolicy(...args);
        }
    }
    public async createUser(
        ...args: Parameters<InfluxDB["createUser"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.createUser(...args);
        }
    }
    public async dropContinuousQuery(
        ...args: Parameters<InfluxDB["dropContinuousQuery"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.dropContinuousQuery(...args);
        }
    }
    public async dropDatabase(
        ...args: Parameters<InfluxDB["dropDatabase"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.dropDatabase(...args);
        }
    }
    public async dropMeasurement(
        ...args: Parameters<InfluxDB["dropMeasurement"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.dropMeasurement(...args);
        }
    }
    public async dropRetentionPolicy(
        ...args: Parameters<InfluxDB["dropRetentionPolicy"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.dropRetentionPolicy(...args);
        }
    }
    public async dropSeries(
        ...args: Parameters<InfluxDB["dropSeries"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.dropSeries(...args);
        }
    }
    public async dropUser(
        ...args: Parameters<InfluxDB["dropUser"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.dropUser(...args);
        }
    }
    public async getDatabaseNames(
        ...args: Parameters<InfluxDB["getDatabaseNames"]>
    ): Promise<string[]> {
        if (this.connection) {
            return this.connection.getDatabaseNames(...args);
        }
        return [];
    }
    public async getMeasurements(
        ...args: Parameters<InfluxDB["getMeasurements"]>
    ): Promise<string[]> {
        if (this.connection) {
            return this.connection.getMeasurements(...args);
        }
        return [];
    }
    public async getSeries(
        ...args: Parameters<InfluxDB["getSeries"]>
    ): Promise<string[]> {
        if (this.connection) {
            return this.connection.getSeries(...args);
        }
        return [];
    }
    public async getUsers(
        ...args: Parameters<InfluxDB["getUsers"]>
    ): Promise<Array<{ user: string; admin: boolean }>> {
        if (this.connection) {
            return this.connection.getUsers(...args);
        }
        return [];
    }
    public async grantAdminPrivilege(
        ...args: Parameters<InfluxDB["grantAdminPrivilege"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.grantAdminPrivilege(...args);
        }
    }
    public async grantPrivilege(
        ...args: Parameters<InfluxDB["grantPrivilege"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.grantPrivilege(...args);
        }
    }
    public async ping(
        ...args: Parameters<InfluxDB["ping"]>
    ): Promise<IPingStats[]> {
        if (this.connection) {
            return this.connection.ping(...args);
        }
        return [];
    }
    query<T>(query: string, options?: IQueryOptions): Promise<IResults<T>> {
        return (this.connection as InfluxDB).query(query, options);
    }
    queryRaw<T>(query: string, options?: IQueryOptions): Promise<any> {
        return (this.connection as InfluxDB).queryRaw(query, options);
    }
    public async revokeAdminPrivilege(
        ...args: Parameters<InfluxDB["revokeAdminPrivilege"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.revokeAdminPrivilege(...args);
        }
    }
    public async revokePrivilege(
        ...args: Parameters<InfluxDB["revokePrivilege"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.revokePrivilege(...args);
        }
    }
    public async setPassword(
        ...args: Parameters<InfluxDB["setPassword"]>
    ): Promise<void> {
        if (this.connection) {
            return this.connection.setPassword(...args);
        }
    }
    public showContinousQueries(
        ...args: Parameters<InfluxDB["showContinousQueries"]>
    ): Promise<
        IResults<{
            name: string;
            query: string;
        }>
    > {
        return (this.connection as InfluxDB).showContinousQueries(...args);
    }
    public showRetentionPolicies(
        ...args: Parameters<InfluxDB["showRetentionPolicies"]>
    ): Promise<
        IResults<{
            default: boolean;
            duration: string;
            name: string;
            replicaN: number;
            shardGroupDuration: string;
        }>
    > {
        return (this.connection as InfluxDB).showRetentionPolicies(...args);
    }
    public writeMeasurement(
        ...args: Parameters<InfluxDB["writeMeasurement"]>
    ): Promise<void> {
        return (this.connection as InfluxDB).writeMeasurement(...args);
    }
    public writePoints(
        ...args: Parameters<InfluxDB["writePoints"]>
    ): Promise<void> {
        return (this.connection as InfluxDB).writePoints(...args);
    }
}
