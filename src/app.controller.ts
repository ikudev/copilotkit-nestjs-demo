import { Controller, Get, Post, Req, Res } from '@nestjs/common';
import { CopilotBackend, OpenAIAdapter } from '@copilotkit/backend';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Post('copilot')
  async copilot(
    @Req() request: Request,
    @Res() response: Response,
  ): Promise<void> {
    const copilotKit = new CopilotBackend();
    await copilotKit.streamHttpServerResponse(
      request,
      response,
      new OpenAIAdapter(),
    );
  }
}
