const format = require("pg-format");
const db = require("./RDSConnect");
const seedData = require('./seedData.json')
const createTables = async () => {
    const topicsTablePromise = db.query(`
        CREATE TABLE tickets (
            ID SERIAL PRIMARY KEY, 
            name VARCHAR(120), 
            description VARCHAR(300), 
            category VARCHAR(7) 
        );`);
}

const dropTables = async () => {
    await db.query(`DROP TABLE IF EXISTS tickets;`)
  };

  const seed = async ({ticketsData}) => {
    await dropTables();
    await createTables();

    const insertTicketsQueryStr = format(
        "INSERT INTO tickets (name, description, category) VALUES %L RETURNING *;",
        ticketsData.map(({ name, description, category }) => [name, description, category])
      );

    console.log(insertTicketsQueryStr)

    db.query(insertTicketsQueryStr)
         .then((result) => result.rows);

  }

  seed(seedData)