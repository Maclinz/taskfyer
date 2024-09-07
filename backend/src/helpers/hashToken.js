import crypto from "node:crypto";

const hashToken = (token) => {
  // hash the token using sha256
  return crypto.createHash("sha256").update(token.toString()).digest("hex");
};

export default hashToken;
