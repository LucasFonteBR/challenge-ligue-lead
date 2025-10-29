import { LoggerBaseDto } from './LoggerBaseDto';

export class LoggerInternalDto extends LoggerBaseDto {
  constructor(startTime: [number, number], requestId: string, method: string, originalMethod: string, requestBody: any) {
    super(startTime, requestId, 'API_SKELETON', method, requestBody, originalMethod);
  }
}
