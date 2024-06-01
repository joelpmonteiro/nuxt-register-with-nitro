import mssql from "mssql";

export const mssqlConnection = async () => {
  try {
    const sqlConfig = {
      user: "sa",
      password: "samsung99",
      database: "account",
      server: "109.199.108.65",
      pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
      },
      options: {
        encrypt: false, // for azure
        trustServerCertificate: false, // change to true for local dev / self-signed certs
      },
    };
    const client = await mssql.connect(sqlConfig);

    return { client };
  } catch (error) {
    console.log(error);
    throw createError({
      statusCode: 500,
      name: "Erro ao criar conta",
    });
  }
};
