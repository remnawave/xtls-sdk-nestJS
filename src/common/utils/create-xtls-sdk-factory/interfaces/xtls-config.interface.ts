import { ChannelOptions } from 'nice-grpc';

export interface IXtlsConfig {
    ip: string;
    port: string;
    options?: ChannelOptions;
}
