### Steps
***
- npm init -y
- npm install prisma typescript ts-node @types/node --save-dev
- npx tsc --init (tsconfig.json)
- npx prisma (invoke prisma cli)
- npx prisma init (prisma/schema.prisma, .env)
- define schema in schema.prisma
- then npx prisma migrate dev --name init (dependency prisma automatically installed)
- (Whenever you update your Prisma schema, you will have to update your database schema using either prisma migrate dev or prisma db push. This will keep your database schema in sync with your Prisma schema. )

### Connect to Postgres Command Line
- psql -U postgres (then input password)

### Running
- Check in PgAdmin
inside Servers/ Postgres 15 (version)/Databases/proofOfConcept
run
```
SELECT *
FROM pg_catalog.pg_tables
WHERE schemaname != 'pg_catalog' AND 
    schemaname != 'information_schema';
```
- see all databases
```
SELECT datname FROM pg_database;
```

- inside terminal run
- ``` npx ts-node index.ts ```

- Postgres converts everything to lowercase so run
``` SELECT * from "User"; ``` to avoid casing errors
``` SELECT * from User ``` same as ``` SELECT * from user ``` gives postgres users