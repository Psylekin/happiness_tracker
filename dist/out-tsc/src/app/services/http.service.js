import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var HttpService = /** @class */ (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.save_measurement = function (data) {
        return this.http.post('https://happiness-tracker-e04b8.firebaseio.com/test.json', data)
            .subscribe(function (result) { return console.log(result); });
    };
    HttpService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], HttpService);
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map