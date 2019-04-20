import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast.service';
import { UiStateService } from '../services/ui-state.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(formBuilder, , httpService, toastService, uiState) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.toastService = toastService;
        this.uiState = uiState;
        this.now = new Date();
        this.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm', 'en');
        this.lifesatisfaction = this.formBuilder.group({
            lifesatisfationValue: ['', Validators.required],
            date: [this.date]
        });
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.uiState.happiChange.subscribe(function (value) { _this.isHappiDone = value; });
    };
    Tab1Page.prototype.sendForm = function () {
        this.httpService.save_measurement(this.lifesatisfaction.value);
        this.toastService.presentToast('Erfolg', 'Vielen Dank!');
        this.uiState.verify_doneHappiness();
        this.lifesatisfaction.reset();
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, Object, HttpService, ToastService,
            UiStateService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map