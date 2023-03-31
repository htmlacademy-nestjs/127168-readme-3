import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '7aef6925-4fe5-4057-b5cc-cc7cf214df05'
  })
  @Expose({ name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User login',
    example: 'john_99'
  })
  @Expose()
  public login: string;

  @ApiProperty({
    description: 'User email',
    example: 'user@user.local'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John'
  })
  @Expose()
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Stivenson'
  })
  @Expose()
  public lastname: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user.png'
  })
  @Expose()
  public avatar: string;
}
