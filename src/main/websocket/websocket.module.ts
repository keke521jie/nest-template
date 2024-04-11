// websocket.module.ts
import { Module } from '@nestjs/common';
import { WebSocketGateway, WebSocketServer } from '@nestjs/websockets';
import { Server } from 'socket.io';

@WebSocketGateway()
export class WebSocketModule {
  @WebSocketServer()
  server: Server;
}

@Module({
  providers: [WebSocketModule],
  exports: [WebSocketModule],
})
export class WebSocketAppModule {}
