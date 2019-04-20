import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { formatDate } from '@angular/common';
import { HttpService } from '../services/http.service';
import { ToastService } from '../services/toast.service';
import { UiStateService } from '../services/ui-state.service';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(formBuilder, httpService, toastService, uiState) {
        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.toastService = toastService;
        this.uiState = uiState;
        this.now = new Date();
        this.date = formatDate(new Date(), 'dd.MM.yyyy HH:mm', 'en');
        this.actionsatisfaction = this.formBuilder.group({
            activity: ['', Validators.required],
            actionsatisfactionValue: ['', Validators.required],
            date: [this.date]
        });
    }
    Tab2Page.prototype.sendForm = function () {
        this.httpService.save_measurement(this.actionsatisfaction.value);
        this.toastService.presentToast('Erfolg', 'Vielen Dank!');
        this.uiState.verify_doneAct();
        this.actionsatisfaction.reset();
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder, HttpService, ToastService,
            UiStateService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map