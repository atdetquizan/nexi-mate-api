import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from '@nestjs/event-emitter';
import { Client, LocalAuth } from 'whatsapp-web.js';
import * as path from 'path';

/**
 * Servicio para interactuar con WhatsApp a través de whatsapp-web.js.
 * Inicializa el cliente, maneja eventos y permite enviar mensajes a contactos y grupos.
 */
@Injectable()
export class WhatsappService implements OnModuleInit {
  /**
   * Instancia del cliente de WhatsApp.
   * @type {Client}
   */
  private client: Client = new Client({
    authStrategy: new LocalAuth({
      dataPath: path.join('/tmp', '.wwebjs_auth'), // Almacenar sesiones en /tmp
    }),
    puppeteer: {
      headless: true,
      args: ['--no-sandbox'],
    },
  });

  /**
   * Logger para el servicio de WhatsApp.
   * @type {Logger}
   */
  private readonly logger = new Logger(WhatsappService.name);

  /**
   * Constructor del servicio.
   * @param {EventEmitter2} eventEmitter - Emisor de eventos para comunicar el QR generado.
   */
  constructor(private eventEmitter: EventEmitter2) {}

  /**
   * Inicializa el cliente de WhatsApp y configura los listeners de eventos.
   * Emite el evento 'qrcode.created' cuando se genera un nuevo QR.
   */
  async onModuleInit() {
    this.client.on('qr', (qr) => {
      this.logger.debug(`QrCode: http://localhost:${3000}/bot/qrcode`);
      this.eventEmitter.emit('qrcode.created', qr);
    });

    this.client.on('ready', () => {
      this.logger.debug("You're connected successfully!");
    });

    await this.client.initialize();
  }

  /**
   * Envía un mensaje a un chat de WhatsApp.
   * @param {string} chatId - ID del chat al que se enviará el mensaje.
   *   - Para un contacto individual, el ID debe terminar en `@c.us` (ejemplo: 51999999999@c.us).
   *   - Para un grupo, el ID debe terminar en `@g.us` (ejemplo: 1234567890-123456789@g.us).
   * @param {string} message - Mensaje a enviar.
   * @returns {Promise<void>}
   */
  async sendMessage(chatId: string, message: string): Promise<void> {
    await this.client.sendMessage(chatId, message);
  }

  /**
   * Obtiene la lista de grupos disponibles en el WhatsApp conectado.
   * @returns {Promise<Array<{name: string, id: string}>>} - Array con el nombre y el ID de cada grupo.
   */
  async getGroups(): Promise<Array<{ name: string; id: string }>> {
    const chats = await this.client.getChats();
    // Filtra solo los grupos (ID termina en @g.us)
    const groups = chats.filter((chat) => chat.isGroup);
    // Devuelve un array con el nombre y el ID del grupo
    return groups.map((group) => ({
      name: group.name,
      id: group.id._serialized,
    }));
  }
}
