import { Global, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
@Global()
export class PrismaService extends PrismaClient {}
