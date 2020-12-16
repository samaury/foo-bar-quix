import { HttpClient, HttpHandler } from "@angular/common/http";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { Observable, of } from "rxjs";
import { AppModule } from "../app.module";
import { FooBarQuixFormComponent } from "../foo-bar-quix-form/foo-bar-quix-form.component";
import { FooBarQuixService } from "../foo-bar-quix.service";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { FooBarQuixComponent } from "./foo-bar-quix.component";

describe('FooBarQuixComponent',() => {
    let fooBarQuickFix: ComponentFixture<FooBarQuixComponent>;
    let component: FooBarQuixComponent;
    let mckFBQService: FooBarQuixService;

    beforeEach(()=>{
        TestBed.configureTestingModule(
            {
                providers: [FooBarQuixService, HttpClient,HttpHandler],
                declarations: [FooBarQuixComponent,FooBarQuixFormComponent]
            }
        ).compileComponents();

        mckFBQService = TestBed.get(FooBarQuixService);
        fooBarQuickFix = TestBed.createComponent(FooBarQuixComponent);

        spyOn(mckFBQService, 'convertNumber').withArgs(12).and.returnValue(of('Foo'));

        component = fooBarQuickFix.componentInstance;
        
    })
    it('convertNumber(12)',()=>{
        component.convertNumber(12);
        expect(component.submitedNumbers.length).toEqual(1);
        component.convertNumber(12);
        expect(component.submitedNumbers.length).toEqual(2);
    })
});