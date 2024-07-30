import { db, Comment } from 'astro:db';

// https://astro.build/db/seed
export default async function seed() {
  await db.insert(Comment).values([
    {
      author: 'Cody',
      body: 'This is a comment',
    },
    {
      author: 'Brayan',
      body: 'This is another comment',
    },
    {
      author: 'Brayan',
      body: 'This is another comment',
    },
  ]);
}
