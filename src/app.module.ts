import { Module } from '@nestjs/common';
import { ProductModule } from './Product/product.module';
import { WorkerModule } from './Worker/worker.module';
import { TechnicModule } from './Technic/technic.module';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [ProductModule, WorkerModule, TechnicModule, DatasourceModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
