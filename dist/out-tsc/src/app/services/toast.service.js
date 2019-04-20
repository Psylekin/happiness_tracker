import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
var ToastService = /** @class */ (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (header, message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var toast;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            header: header,
                            message: message,
                            duration: 1000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=toast.service.js.map