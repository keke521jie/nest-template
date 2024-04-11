// notification.service.ts
import { Injectable } from '@nestjs/common';
import { WebSocketModule } from '../websocket/websocket.module';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
    private readonly webSocketModule: WebSocketModule,
  ) {}

  async sendNotification(message: MessageDto) {
    // 发送消息给所有连接的客户端
    const newMsg = this.messageRepository.create(message);
    this.messageRepository.save({
      message: newMsg.message,
      date: new Date(),
    });
    this.webSocketModule.server.emit('notification', message.message);
  }
}
