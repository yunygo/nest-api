import { Transform } from 'class-transformer';
import { IsNotEmpty } from 'class-validator';

export class SignInDto {
  @Transform(({ value }) => value.trim())
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
