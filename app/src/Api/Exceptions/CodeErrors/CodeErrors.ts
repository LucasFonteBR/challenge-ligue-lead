import { ErrorDetailsDto } from '../../Dtos/ErrorDetailsDto';

export const CODE_ERROR_SERVER_INTERNAL_ERROR: ErrorDetailsDto = {
  code: 'SERVER_INTERNAL_ERROR',
  message: 'Internal error in service',
};

export const CODE_ERROR_RESOURCE_NOT_FOUND: ErrorDetailsDto = {
  code: 'RESOURCE_NOT_FOUND',
  message: 'Resource not found',
};

export const CODE_ERROR_USER_ENABLE: ErrorDetailsDto = {
  code: 'USER_ENABLE',
  message: 'Falhe ao ativar usuário',
};

export const CODE_ERROR_USER_DISABLE: ErrorDetailsDto = {
  code: 'USER_DISABLE',
  message: 'Falhe ao bloquear usuário',
};

export const CODE_ERROR_RESOURCE_ALREADY_EXISTS: ErrorDetailsDto = {
  code: 'RESOURCE_ALREADY_EXISTS',
  message: 'Registro já existente',
};

export const CODE_ERROR_NOT_FOUND: ErrorDetailsDto = {
  code: 'NOT_FOUND',
  message: 'Route not found',
};

export const CODE_ERROR_JSON_MAPPING: ErrorDetailsDto = {
  code: 'JSON_MAPPING',
  message: 'Incorrect json mapping',
};

export const CODE_ERROR_UNAUTHORIZED: ErrorDetailsDto = {
  code: 'UNAUTHORIZED',
  message: 'Não Autorizado',
};

export const CODE_ERROR_ACCESS_DENIED: ErrorDetailsDto = {
  code: 'ACCESS_DENIED',
  message: 'Acesso Negado',
};

export const CODE_ERROR_FIELDS_INVALID: ErrorDetailsDto = {
  code: 'INVALID_FIELDS',
  message: 'Os campos inválidos/obrigatórios',
};

export const CODE_ERROR_MONGODB_DUPLICATE_KEY: ErrorDetailsDto = {
  code: 'DUPLICATE_KEY',
  message: 'Registro duplicados',
};

export const CODE_ERROR_UPLOAD_FILE: ErrorDetailsDto = {
  code: 'UPLOAD_FILE',
  message: 'Falha no upload do arquivo',
};

export const CODE_ERROR_DOWNLOAD_FILE: ErrorDetailsDto = {
  code: 'DOWNLOAD_FILE',
  message: 'Falha no download do arquivo',
};

export const CODE_ERROR_FIELDS_INVALID_PROFILE: ErrorDetailsDto = {
  code: 'PROFILE_INVALID',
  message: 'Perfil inválido',
};
