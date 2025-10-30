import { BaseErrorException } from './BaseErrorException';
import { ErrorDetailsDto } from '../Dtos/ErrorDetailsDto';

export class InvalidFieldsException extends BaseErrorException {
  constructor(errors: ErrorDetailsDto[]) {
    super(400, errors);
  }
}
