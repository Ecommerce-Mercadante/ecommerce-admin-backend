module.exports = {
  type: "mysql",
  username: "root",
  password: "root",
  database: process.env.DB_NAME,
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true,
  synchronize: true,
};
