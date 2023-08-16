import { Body, Controller, Post } from '@nestjs/common';
import { AuthCredentialDto } from './dto/auth.credentials.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('/signup')
  createUser(@Body() userData: AuthCredentialDto): Promise<void> {
    return this.authService.createUser(userData);
  }
  @Post('/signin')
  signIn(
    @Body() authCredentialsDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialsDto);
  }
}
