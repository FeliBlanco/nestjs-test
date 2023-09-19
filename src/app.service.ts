import { Injectable, Version } from '@nestjs/common';

@Injectable()
export class AppService {

    @Version('1')
    getHello(): string {
        return 'Como tassdd';
    }

    @Version('2')
    getHelloV2(): string {
        return 'asi esss';
    }
}
