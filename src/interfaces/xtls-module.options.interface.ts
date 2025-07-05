import { ChannelOptions } from 'nice-grpc';

export interface XtlsModuleOptions {
    ip: string;
    port: string;
    options?: ChannelOptions;
}
