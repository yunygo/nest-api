import { Utils } from '../src/core/utils';
import { ConfigService } from '../src/core/config/config.service';
import { PrismaService } from '../src/core/prisma/prisma.service';

const prisma = new PrismaService();
const config = new ConfigService();
const utils = new Utils(config);

async function main() {
  try {
    const adminPwd = await utils.hash(config.get('ADMIN_PWD'));

    const existedAdmin = await prisma.admin.findFirst({
      where: {
        isSuper: true,
      },
    });
    if (existedAdmin) {
      await prisma.admin.update({
        where: {
          id: existedAdmin.id,
        },
        data: {
          password: adminPwd,
        },
      });
    } else {
      await prisma.admin.create({
        data: {
          name: 'admin',
          password: adminPwd,
          roleId: 0,
          isSuper: true,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
