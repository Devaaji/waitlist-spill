import logger from 'redux-logger';
const middleware: any[] = [];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
} 

export default middleware;