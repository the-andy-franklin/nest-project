import { Injectable } from '@nestjs/common';

@Injectable()
export class HomeService {
  getMessage(): string {
    return 'Hello Home!';
  }
}
