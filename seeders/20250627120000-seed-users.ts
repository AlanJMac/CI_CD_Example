export async function up(config: { context: any }) {
  await config.context.bulkInsert(
    'Users',
    [
      {
        name: 'Alice Example',
        email: 'alice@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob Example',
        email: 'bob@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
    {}
  );
}

export async function down(config: { context: any }) {
  await config.context.bulkDelete('Users', null, {});
}
