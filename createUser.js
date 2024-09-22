import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'utente@esempio.com';
  const plainPassword = 'testPassword123';

  try {
    // Cerca l'utente esistente
    const existingUser = await prisma.user.findUnique({
      where: { email: email }
    });

    if (existingUser) {
      // Aggiorna l'utente esistente
      const updatedUser = await prisma.user.update({
        where: { email: email },
        data: {
          name: 'Nome Utente Aggiornato',
          password: plainPassword, // Password non hashata per il test
          role: 'USER'
        }
      });
      console.log('Utente aggiornato:', updatedUser);
    } else {
      // Crea un nuovo utente
      const newUser = await prisma.user.create({
        data: {
          name: 'Nome Utente',
          email: email,
          password: plainPassword, // Password non hashata per il test
          role: 'USER'
        },
      });
      console.log('Nuovo utente creato:', newUser);
    }
  } catch (error) {
    console.error('Errore durante la creazione/aggiornamento dell\'utente:', error);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });