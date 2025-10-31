import { ErrorDetailsDto } from '../../Dtos/ErrorDetailsDto';

export const CODE_ERROR_SERVER_INTERNAL_ERROR: ErrorDetailsDto = {
  code: 'SERVER_INTERNAL_ERROR',
  message: 'Internal error in service',
};

export const CODE_ERROR_RESOURCE_NOT_FOUND: ErrorDetailsDto = {
  code: 'RESOURCE_NOT_FOUND',
  message: 'Resource not found',
};

export const CODE_ERROR_NOT_FOUND: ErrorDetailsDto = {
  code: 'NOT_FOUND',
  message: 'Route not found',
};

export const CODE_ERROR_FIELDS_INVALID: ErrorDetailsDto = {
  code: 'INVALID_FIELDS',
  message: 'Invalid/required fields',
};
