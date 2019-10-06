import * as path from "path";
import untildify = require("untildify");

export const actuallyResolve = (filePath: string) => path.resolve(untildify(filePath));
