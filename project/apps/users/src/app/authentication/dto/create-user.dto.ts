import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'newuser@gmail.com'
  })
  public email: string;

  @ApiProperty({
    description: 'User unique login',
    example: 'UserLogin',
  })
  public login: string;

  @ApiProperty({
    description: 'User first name',
    example: 'John',
  })
  public firstname: string;

  @ApiProperty({
    description: 'User last name',
    example: 'Johnson'
  })
  public lastname: string;

  @ApiProperty({
    description: 'User password',
    example: 'superPassword1'
  })
  public password: string;
}
