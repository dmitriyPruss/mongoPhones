const CONSTANTS = {
  HOST: '127.0.0.1',
  MONGO_PORT: 27017,
  DBMS: 'mongodb',
  DATABASE_CURRENT_NAME: 'phones_db',
  PROCESS_DEV: 'development',
  PHONE_PROPS: [
    '_id',
    'model',
    'brand',
    'prodYear',
    'RAMsize',
    'CPU_id',
    'isNFC'
  ],
  CPU_PROPS: ['name', 'cores', 'frequency', 'GPU'],
  ERRORS: {
    ERROR_400: {
      ERROR_CODE: 400,
      ERROR_MESSAGE: 'Bad Request'
    },
    ERROR_404: {
      ERROR_CODE: 404,
      ERROR_MESSAGE: 'Not Found'
    },
    ERROR_500: {
      ERROR_CODE: 500,
      ERROR_MESSAGE: 'Internal Server Error'
    }
  }
};

module.exports = CONSTANTS;
