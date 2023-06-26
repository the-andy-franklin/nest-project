import { Test, TestingModule } from '@nestjs/testing';
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HomeService],
    }).compile();

    service = module.get<HomeService>(HomeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should have a method called getMessage', () => {
    expect(service.getMessage).toBeDefined();
  });

  it('should return "Hello Home!"', () => {
    expect(service.getMessage()).toBe('Hello Home!');
  });
});
