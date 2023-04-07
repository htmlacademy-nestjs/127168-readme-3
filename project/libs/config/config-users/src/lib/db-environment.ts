import {IsNumber, IsString, Max, Min} from 'class-validator';
import { DbEnvValidationMessage, MAX_PORT, MIN_PORT } from './constant';

export class DbEnvironment {
  @IsString({
    message: DbEnvValidationMessage.DBNameRequired
  })
  public name: string;

  @IsString({
    message: DbEnvValidationMessage.DBHostRequired
  })
  public host: string;

  @IsNumber({}, {
    message: DbEnvValidationMessage.DBPortRequired
  })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public port: number;

  @IsString({
    message: DbEnvValidationMessage.DBUserRequired
  })
  public user: string;

  @IsString({
    message: DbEnvValidationMessage.DBPasswordRequired
  })
  public password: string;

  @IsString({
    message: DbEnvValidationMessage.DBBaseAuthRequired
  })
  public authBase: string;
}
