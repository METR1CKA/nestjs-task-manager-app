import { ConfigModule } from '@nestjs/config'
import { UsersModule } from './users/users.module'
import { TasksModule } from './tasks/tasks.module'
import { Module } from '@nestjs/common'
import env from '../config/env'
import * as Joi from 'joi'

@Module({
    imports: [
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: 'apps/main-service/.env',
            load: [env],
            validationSchema: Joi.object({
                HOST: Joi.string().required().default('localhost'),
                PORT: Joi.number().required().default(3000),
                USER_SERVICE_HOST: Joi.string().required().default('localhost'),
                USER_SERVICE_PORT: Joi.number().required().default(3001),
            }),
        }),
        UsersModule,
        TasksModule,
    ],
    controllers: [],
    providers: [],
    exports: [],
})
export class AppModule {}
