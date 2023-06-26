import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';
import { HomeService } from './home.service';

describe('HomeController', () => {
  let controller: HomeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
      providers: [HomeService],
    }).compile();

    controller = module.get<HomeController>(HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should have a method called getHome', () => {
    expect(controller.getHome).toBeDefined();
  });

  it('should return "Hello Home!"', () => {
    expect(controller.getHome()).toStrictEqual({ message: 'Hello Home!' });
  });
});
