import { Controller, Post, Body } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessageDto } from './dto/message.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  send(@Body() message: MessageDto): void {
    this.notificationService.sendNotification(message);
  }
}
