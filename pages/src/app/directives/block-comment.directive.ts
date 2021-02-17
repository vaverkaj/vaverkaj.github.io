import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockComment]'
})
export class BlockCommentDirective implements OnInit{

  constructor(private el: ElementRef, private renderer: Renderer2) {
  
 }
  ngOnInit(): void {
    let text = this.el.nativeElement.innerHTML;
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', text);
    this.renderer.addClass(this.el.nativeElement,'c-mono-3');
    const top = this.renderer.createElement('span');
    this.renderer.appendChild(top, this.renderer.createText('/**'));
    this.renderer.appendChild(top, this.renderer.createElement('br'));
    this.renderer.appendChild(top, this.renderer.createText('\u00A0*\u00A0'));
    
    const bot = this.renderer.createElement('span');
    this.renderer.appendChild(bot, this.renderer.createText('\u00A0*/'));
    
    this.renderer.insertBefore(this.el.nativeElement,top, this.el.nativeElement.childNodes[0], false);
    this.renderer.appendChild(this.el.nativeElement, this.renderer.createElement('br'));
    this.renderer.appendChild(this.el.nativeElement, bot);
    //this.renderer.insertBefore(, top);
    //this.renderer.setValue(el.nativeElement.childNodes.item[0], 'nothing');
  }

}
