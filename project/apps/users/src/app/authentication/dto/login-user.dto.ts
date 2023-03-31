import { ApiProperty } from "@nestjs/swagger";

export class LoginUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'newuser@gmail.com'
  })
  public email: string;

  @ApiProperty({
    description: 'User password',
    example: 'superPassword1'
  })
  public password: string;
}
