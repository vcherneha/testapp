import { TestBed } from "@angular/core/testing";
import { CheckValueService } from "./check-value.service";
import { SimpleService } from "./simple.service"
describe('simple test', ()=> {
    let service: SimpleService;

    const fakeCheckValue = { check: () => true}
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SimpleService,
                {provide: CheckValueService, useValue: fakeCheckValue}
            ],
         

        })
        service =  TestBed.inject(SimpleService)
    }) 

    it('service init', () => {
        expect(service).toBeTruthy()
    })

    it('should add 2 numbers', ()=> {
        const sum = service.sum(2,2);
        expect(sum).toBe(4)
    }) 
    it('should return undfined', ()=> {
        const sum = service.sum(2);
        expect(sum).toBeUndefined()
    }) 
}) 