import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.log = function (information) {
        console.log(information);
    };
    LogService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());
export { LogService };
//# sourceMappingURL=log.service.js.map