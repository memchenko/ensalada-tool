"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Place = void 0;
var typeorm_1 = require("typeorm");
var Place = /** @class */ (function () {
    function Place() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
        __metadata("design:type", Number)
    ], Place.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: 'varchar',
        }),
        __metadata("design:type", String)
    ], Place.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar' }),
        __metadata("design:type", String)
    ], Place.prototype, "description", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', nullable: true }),
        __metadata("design:type", String)
    ], Place.prototype, "author", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'varchar', array: true }),
        __metadata("design:type", Array)
    ], Place.prototype, "categories", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric' }),
        __metadata("design:type", Number)
    ], Place.prototype, "latitude", void 0);
    __decorate([
        (0, typeorm_1.Column)({ type: 'numeric' }),
        __metadata("design:type", Number)
    ], Place.prototype, "longitude", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
        __metadata("design:type", Date)
    ], Place.prototype, "createdAt", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
        __metadata("design:type", Date)
    ], Place.prototype, "updatedAt", void 0);
    Place = __decorate([
        (0, typeorm_1.Entity)({ name: 'place' })
    ], Place);
    return Place;
}());
exports.Place = Place;
//# sourceMappingURL=place.entity.js.map