import { NextApiHandler } from "next";

const handler: NextApiHandler = async (req, res) => {
  res.json({ done: "login" });
};

export default handler;
