import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { WhatsappService } from './whatsapp.service';
import { OnEvent } from '@nestjs/event-emitter';
import { Response } from 'express';
import * as QRCode from 'qrcode';

@Controller('whatsapp')
export class WhatsappController {
  private qrCode: string;

  constructor(private readonly whatsappService: WhatsappService) {}

  @OnEvent('qrcode.created')
  handleQrcodeCreatedEvent(qrCode: string) {
    this.qrCode = qrCode;
  }

  @Get('qrcode')
  getQrCode(@Res() response: Response) {
    if (!this.qrCode) {
      return response.status(404).send('QR code not found');
    }

    response.setHeader('Content-Type', 'image/png');

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    QRCode.toFileStream(response, this.qrCode);
  }

  @Post('send')
  async sendMessage(@Body() body: { number: string; message: string }) {
    await this.whatsappService.sendMessage(body.number, body.message);
    return { status: 'Mensaje enviado' };
  }

  @Get('groups')
  async getGroups() {
    return this.whatsappService.getGroups();
  }
}
