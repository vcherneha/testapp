import { Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    component.user = { 
      name: 'Jhon', 
      secondname: 'Doe'
    }
    fixture.detectChanges();
  });

  it('should create component', ()=> {
    component.changeTitle()
    expect(component.title).toBe('Title changed')
  })

  it('shoud send user name on click', ()=> {
    const event = spyOn(component.clickEvent, "emit");
    component.click();
    expect(event).toHaveBeenCalledWith('Jhon')
  })
  it('shoud send user name on click 2', ()=> {
    const event = spyOn(component.clickEvent, "emit");
    event.calls.reset();
    const button = fixture.debugElement.query(By.css('button'));
    button.nativeElement.click();
    
    expect(event).toHaveBeenCalledWith('Jhon')
  })
  it('add class fill ', ()=> {
    const newUser = {
      name: 'Jo',
      secondname: undefined
    }
    component.user = newUser;

    fixture.detectChanges();
    const span = fixture.debugElement.query(By.css('span.fill'))

    expect(span).toBeNull()

  })
});
