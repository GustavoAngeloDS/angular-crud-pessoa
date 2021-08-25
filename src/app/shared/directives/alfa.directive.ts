import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[appAlfa]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: AlfaDirective,
    multi: true
  }]
})
export class AlfaDirective implements ControlValueAccessor{

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyUp($event: any){
    let valor = $event.target.value;

    /* implements regex here */
    valor = valor.replace('X', '');
    $event.target.value = valor;
    this.onChange(valor);
  }

  
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(value: any): void {
    if(value != undefined)
      this.el.nativeElement.value = value;
  }
}
