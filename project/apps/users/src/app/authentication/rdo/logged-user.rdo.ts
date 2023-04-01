import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class LoggedUserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '7aef6925-4fe5-4057-b5cc-cc7cf214df05'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'Access token',
    example: '8agd98agyd9kcbod.asfyga9s8ga9s87.fsg9s68ft9'
  })
  @Expose()
  public accessToken: string;
}
