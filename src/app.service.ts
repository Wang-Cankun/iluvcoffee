import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    const a: string = '1' + 0
    return 'Hello Nest!' + a + 1
  }
}
