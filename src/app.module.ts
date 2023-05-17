import { Module } from '@nestjs/common';
import { ProductModule } from './Product/product.module';
import { WorkerModule } from './Worker/worker.module';
import { TechnicModule } from './Technic/technic.module';
import { DatasourceModule } from './datasource/datasource.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [ProductModule, 
       DatasourceModule,
       TechnicModule,
        TypeOrmModule.forRoot({
          type: 'postgres', 
          port: 5432,
          username: 'education',
          password: '2356',
          host: 'localhost',
          synchronize: false,
          logging: 'all',
          entities: ['dist/**/*.entity{.ts,.js}'],
        })],
  controllers: [],
  providers: [],
})
export class AppModule {}
