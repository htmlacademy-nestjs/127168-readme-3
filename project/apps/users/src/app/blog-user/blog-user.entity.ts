import { User } from '@project/shared/shared-types'
import { compare, genSalt, hash } from 'bcrypt';
import { SALT_ROUNDS } from './blog-user.constant';

export class BlogUserEntity implements User {
  _id?: string;
  email: string;
  login: string;
  firstname: string;
  lastname: string;
  avatar: string;
  passwordHash: string;

  constructor(blogUser: User) {
    this.fillEntity(blogUser);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(blogUser: User) {
    this._id = blogUser._id;
    this.email = blogUser.email;
    this.login = blogUser.login;
    this.firstname = blogUser.firstname;
    this.lastname = blogUser.lastname;
    this.avatar = blogUser.avatar;
    this.passwordHash = blogUser.passwordHash;
  }

  public async setPassword(password: string): Promise<BlogUserEntity> {
    const salt = await genSalt(SALT_ROUNDS);
    this.passwordHash = await hash(password, salt);
    return this;
  }

  public async comparePassword(password: string): Promise<boolean> {
    return compare(password, this.passwordHash);
  }
}
