const { db } = require('@vercel/postgres');
const {
  moonPhases,
} = require('../src/app/lib/placeholder-data.ts');

async function seedMoonPhases(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS moon_phases (
        date DATE NOT NULL PRIMARY KEY,
        phase DECIMAL(3,2) NOT NULL
      );
    `;

    console.log(`Created "moon_phases" table`);

    // Insert data into the "users" table
    const insertedMoonPhases = await Promise.all(
      moonPhases.map(async (moonPhase) => {
        return client.sql`
        INSERT INTO moon_phases (date, phase)
        VALUES (${moonPhase.date}, ${moonPhase.phase})
        ON CONFLICT (date) DO UPDATE 
        SET phase=EXCLUDED.phase
      `;
      }),
    );

    console.log(`Seeded ${insertedMoonPhases.length} moon phases`);

    return {
      createTable,
      moonPhases: insertedMoonPhases,
    };
  } catch (error) {
    console.error('Error seeding moon phases:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedMoonPhases(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});