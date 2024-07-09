import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SkillsModule } from './skills/skills.module';
import { EducationModule } from './education/education.module';
import { SocialMediaModule } from './social-media/social-media.module';
import { RelationsModule } from './relations/relations.module';
import { UserModule } from './user/user.module';
import { ExperienceModule } from './experience/experience.module';
import { WorkModule } from './work/work.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'cvmaker',
      autoLoadModels: true,
      synchronize: true,
    }),
    SkillsModule,
    EducationModule,
    SocialMediaModule,
    RelationsModule,
    UserModule,
    ExperienceModule,
    WorkModule,
    AuthModule,
  ],
})
export class AppModule {}
