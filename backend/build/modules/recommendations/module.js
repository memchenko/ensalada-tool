"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationsModule = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("@nestjs/typeorm");
var controller_1 = require("./controller");
var service_1 = require("./service");
var place_1 = require("../../entities/place");
var RecommendationsModule = /** @class */ (function () {
    function RecommendationsModule() {
    }
    RecommendationsModule = __decorate([
        (0, common_1.Module)({
            imports: [typeorm_1.TypeOrmModule.forFeature([place_1.Place])],
            providers: [service_1.RecommendationsService],
            controllers: [controller_1.RecommendationsController],
            exports: [service_1.RecommendationsService],
        })
    ], RecommendationsModule);
    return RecommendationsModule;
}());
exports.RecommendationsModule = RecommendationsModule;
//# sourceMappingURL=module.js.map