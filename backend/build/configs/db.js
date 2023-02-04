"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var url = process.env.URL ||
    'postgresql://pandora:0T_YXogxVHuiV2FdJnNbzQ@nutty-cricket-5919.7tc.cockroachlabs.cloud:26257/defaultdb?sslmode=verify-full';
exports.default = (function () { return ({
    type: 'cockroachdb',
    url: url,
    entities: [__dirname + '/../entities/**/*.entity.ts'],
    migrations: [__dirname + '/../migrations/*.ts'],
    synchronize: true,
    autoLoadEntities: true,
    ssl: {
        requestCert: true,
        rejectUnauthorized: process.env.NODE_ENV === 'prod' ? true : false,
        ca: process.env.NODE_ENV === 'prod' ? process.env.CA_CERT : '',
    },
    cli: {
        entitiesDir: __dirname + '/../entities',
        migrationsDir: __dirname + '/../migrations',
    },
}); });
//# sourceMappingURL=db.js.map