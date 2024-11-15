import { XtlsApi } from '@remnawave/xtls-sdk';
import { Logger } from '@nestjs/common';
import { IXtlsConfig } from './interfaces';
const logger = new Logger('xtls-sdk.util');

export function createXtlsSdkFactory(moduleOptions: IXtlsConfig): XtlsApi {
    const xtlsApi = new XtlsApi(moduleOptions.ip, moduleOptions.port);
    logger.debug(`createXtlsSdkFactory creating XtlsSdk: `);
    return xtlsApi;
}
