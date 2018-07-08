import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {TestService} from "../services/test.service";

@Directive({
  selector: '[appAccordion]'
})
export class AccordionDirective implements OnInit{

  @Input('accord') accord: string;
  @Output('another') onChange = new EventEmitter<string>();

  animate: any = null;
  tabOpen: boolean = false;
  children: Array<HTMLElement>;

  constructor(private elRef: ElementRef, private testService: TestService) {
    this.children = elRef.nativeElement.children;
    testService.accordChange.subscribe(e=>{
      if(this.elRef.nativeElement.className.split(' ')[1] === e){
        return;
      }else{
        this.close();
      }
    })
  }

  ngOnInit(): void {}

  @HostListener('click',['$event']) onClick(e){
  this.testService.useAccChange(this.elRef.nativeElement.className.split(' ')[1]);
    if(this.tabOpen){
      this.close();
    }else{
      this.open();
    }
  }

  open(){
    if(this.animate !== null) return;
    if(this.tabOpen) return;
    let height = this.elRef.nativeElement.offsetHeight;
    this.animate = setInterval(()=>{
      height+=1;
      this.elRef.nativeElement.style.height = height+"px";
      if(height > (this.children[0].offsetHeight + this.children[1].offsetHeight)){
        clearInterval(this.animate);
        this.animate = null;
        this.tabOpen = true;
      }
    },4)
  }

  close(){
    if(this.animate !== null) return;
    if(!this.tabOpen) return;
    let height = this.elRef.nativeElement.offsetHeight;
    this.animate = setInterval(()=>{
      height-=1;
      this.elRef.nativeElement.style.height = height+"px";
      if(height <= 40){
        clearInterval(this.animate);
        this.animate = null;
        this.tabOpen = false;
      }
    },4)
  }
}
