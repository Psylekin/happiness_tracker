import { TestBed } from '@angular/core/testing';
import { ToastService } from './toast.service';
describe('ToastService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ToastService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=toast.service.spec.js.map