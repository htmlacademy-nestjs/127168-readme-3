import { Expose } from 'class-transformer';

export class UserRdo {
  @Expose({ name: '_id'})
  public id: string;

  @Expose()
  public login: string;

  @Expose()
  public email: string;

  @Expose()
  public firstname: string;

  @Expose()
  public lastname: string;

  @Expose()
  public avatar: string;
}
