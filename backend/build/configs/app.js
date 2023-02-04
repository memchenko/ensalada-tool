"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var db_1 = require("./db");
exports.default = (function () { return ({
    environment: process.env.NODE_ENV ? process.env.NODE_ENV : 'dev',
    port: 3000,
    database: (0, db_1.default)(),
}); });
//# sourceMappingURL=app.js.map