import { createAccount } from "../controller/user";
const router = createRouter();

router.post("/create", defineEventHandler(createAccount));

export default useBase("/api/v1", router.handler);
