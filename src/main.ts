import dotenv from 'dotenv'

import './utils/unhandled-error-handling'
import logger from './utils/log'
import envVar from './utils/env'

dotenv.config()

logger.info(`Hello world! Running in '${envVar('NODE_ENV')}' mode, port ${envVar('PORT')}`)
