import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { UiStateService } from '../services/ui-state.service';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(uiState) {
        this.uiState = uiState;
    }
    Tab3Page.prototype.ngOnInit = function () {
        var _this = this;
        this.uiState.happiChange.subscribe(function (value) { _this.isHappiDone = value; });
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [UiStateService])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map