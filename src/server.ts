import { SequelizeStorage, Umzug } from 'umzug';
import app from './app';
import config from './config/config';
import { sequelize } from './db';

await sequelize.authenticate();
console.log('DB connected');

const migrationUmzug = new Umzug({
  migrations: { glob: 'migrations/*.{js,ts}' },

  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize: sequelize,
  }),
  logger: console,
});

// Checks migrations and run them if they are not already applied. To keep
// track of the executed migrations, a table (and sequelize model) called SequelizeMeta
// will be automatically created (if it doesn't exist already) and parsed.
await migrationUmzug.up();

const seederUmzug = new Umzug({
  migrations: { glob: 'seeders/*.{js,ts}' },

  context: sequelize.getQueryInterface(),
  storage: new SequelizeStorage({
    sequelize: sequelize,
  }),
  logger: console,
});
await seederUmzug.up();

app.listen(config.port, () => {
  console.log(`Server listening on port ${config.port}`);
});
