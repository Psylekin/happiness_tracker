import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var UiStateService = /** @class */ (function () {
    function UiStateService() {
        var _this = this;
        this.isHappiDone = false;
        this.happiChange = new Subject();
        this.isActSatDone = false;
        this.ActSatChange = new Subject();
        this.happiChange.subscribe(function (value) { return _this.isHappiDone = value; });
        this.ActSatChange.subscribe(function (value) { return _this.isActSatDone = value; });
    }
    UiStateService.prototype.verify_doneHappiness = function () {
        this.happiChange.next(true);
    };
    UiStateService.prototype.verify_doneAct = function () {
        this.ActSatChange.next(true);
    };
    UiStateService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UiStateService);
    return UiStateService;
}());
export { UiStateService };
//# sourceMappingURL=ui-state.service.js.map