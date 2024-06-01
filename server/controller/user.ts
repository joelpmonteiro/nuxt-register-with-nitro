import { mssqlConnection } from "../mssql";
import { H3Event } from "h3";

export const createAccount = async (event: H3Event): Promise<any> => {
  try {
    const request = await readBody(event);

    const connection = await mssqlConnection();
    const procedure = connection?.client.query(
      `exec cabal_tool_registerAccount ${request.id}, ${request.password}`
    );
    return "";
  } catch (error: any) {
    console.log("asdasdsad: ", error);
    throw createError({
      statusCode: 500,
      name: "Erro ao criar conta",
    });
  }
};
