import { TestBed } from '@angular/core/testing';
import { LogService } from './log.service';
describe('LogService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(LogService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=log.service.spec.js.map