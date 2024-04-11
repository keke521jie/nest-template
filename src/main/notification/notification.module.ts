// websocket.module.ts
import { Module } from '@nestjs/common';
import { NotificationController } from './notification.controller';
import { NotificationService } from './notification.service';
import { WebSocketAppModule } from '../websocket/websocket.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';

@Module({
  providers: [NotificationService],
  controllers: [NotificationController],
  imports: [TypeOrmModule.forFeature([Message]), WebSocketAppModule],
})
export class NotificationModule {}
