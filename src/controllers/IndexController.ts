import { Controller, Get } from 'koa-autoboot'

@Controller('/')
export default class IndexController {
  @Get()
  public async greeting(): Promise<string> {
    return 'Hello world'
  }
}