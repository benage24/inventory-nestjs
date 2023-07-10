import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product/entities/product.entity';

@Module({
  //imports: [MongooseModule.forRoot('mongodb://localhost:27017'),ProductModule],
//   imports:[MongooseModule.forRoot('mongodb://localhost:27017',{
//     dbName: 'inventory'
//  }),ProductModule],


  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'stock',
      entities: [Product],
      synchronize: true,
    }),
     ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
