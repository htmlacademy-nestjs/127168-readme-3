import { ApiProperty } from "@nestjs/swagger";

export class NewPasswordDto {
  @ApiProperty({
    description: 'Old user password',
    example: 'OLD_Password'
  })
  public oldPassword: string;

  @ApiProperty({
    description: 'New user password',
    example: 'newPassword123'
  })
  public newPassword: string;
}
