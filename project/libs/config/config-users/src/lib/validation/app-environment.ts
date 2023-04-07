import { IsIn, IsNumber, IsString, Max, Min } from 'class-validator';
import { AppEnvValidationMessage, MAX_PORT, MIN_PORT, environmentModes } from '../constant';

export class AppEnvironment {
  @IsString({
    message: AppEnvValidationMessage.AppEnvironmentRequired
  })
  @IsIn(environmentModes)
  public environment: string;

  @IsNumber({}, {
    message: AppEnvValidationMessage.AppEnvironmentRequired
  })
  @Min(MIN_PORT)
  @Max(MAX_PORT)
  public port: number;
}
