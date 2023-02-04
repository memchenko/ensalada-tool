"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var typeorm_1 = require("typeorm");
var db_1 = require("./db");
dotenv.config();
exports.default = new typeorm_1.DataSource((0, db_1.default)());
// export default DBConfig();
//# sourceMappingURL=typeorm.js.map