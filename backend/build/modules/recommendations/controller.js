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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecommendationsController = void 0;
var common_1 = require("@nestjs/common");
var service_1 = require("./service");
var get_places_dto_1 = require("./dto/get.places.dto");
var create_place_dto_1 = require("./dto/create.place.dto");
var remove_place_dto_1 = require("./dto/remove.place.dto");
var RecommendationsController = /** @class */ (function () {
    function RecommendationsController(recommendationsService) {
        this.recommendationsService = recommendationsService;
    }
    RecommendationsController.prototype.getRecommendedPlaces = function (dto) {
        return this.recommendationsService.getPlaces(dto);
    };
    RecommendationsController.prototype.createRecommendedPlace = function (dto) {
        return this.recommendationsService.createPlace(dto);
    };
    RecommendationsController.prototype.removePlace = function (dto) {
        return this.removePlace(dto);
    };
    __decorate([
        (0, common_1.Get)('places'),
        __param(0, (0, common_1.Query)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [get_places_dto_1.GetPlacesDTO]),
        __metadata("design:returntype", void 0)
    ], RecommendationsController.prototype, "getRecommendedPlaces", null);
    __decorate([
        (0, common_1.Post)('places'),
        __param(0, (0, common_1.Body)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [create_place_dto_1.CreatePlaceDTO]),
        __metadata("design:returntype", void 0)
    ], RecommendationsController.prototype, "createRecommendedPlace", null);
    __decorate([
        (0, common_1.Delete)('place'),
        __param(0, (0, common_1.Query)()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [remove_place_dto_1.RemovePlaceDTO]),
        __metadata("design:returntype", void 0)
    ], RecommendationsController.prototype, "removePlace", null);
    RecommendationsController = __decorate([
        (0, common_1.Controller)('recommendations'),
        __metadata("design:paramtypes", [service_1.RecommendationsService])
    ], RecommendationsController);
    return RecommendationsController;
}());
exports.RecommendationsController = RecommendationsController;
//# sourceMappingURL=controller.js.map