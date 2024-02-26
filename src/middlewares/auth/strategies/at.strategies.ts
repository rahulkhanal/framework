import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from 'src/modules/auth/auth.service';

type JwtPayload = {
    sub: string;
    email: string;
};


@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt-access') {
    constructor(
        private readonly authService: AuthService,
        config: ConfigService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get<string>('AT_SECRET'),
            ignoreExpiration: false
        });
    }

    async validate(payload: JwtPayload) {
        // const user = await this.authService.validateUser(+payload.sub, payload.email);
        const user = {}
        if (!user) {
            throw new UnauthorizedException('Unauthorized and Invalid token.');
        }
        return payload;
    }
}