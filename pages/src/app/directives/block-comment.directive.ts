import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockComment]'
})
export class BlockCommentDirective implements OnInit{
  context: any;
  originalText: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.initCanvas(); 
    this.renderer.addClass(this.el.nativeElement,'c-mono-3');
    this.originalText = this.el.nativeElement.innerHTML;
    this.drawDecoration();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.drawDecoration();
  }

  private initCanvas() {
    let canvas = this.renderer.createElement('canvas');
    this.context = canvas.getContext('2d');
    this.context.font = window.getComputedStyle(this.el.nativeElement).getPropertyValue('font');
  }

  private insertAtStartOfEachLine(text, elementWidth, value): string {
    elementWidth -= this.context.measureText('\u00A0*\u00A0').width;
    text = text.trim();
    let newText = '';
    let spaceLeft = elementWidth;
    const spaceWidth = this.context.measureText(' ').width;
    const words = text.split(' ');
    words.forEach(element => {
      const wordWidth = this.context.measureText(element).width;
      if(wordWidth + spaceWidth > spaceLeft) {
        newText += '<span class="noselect">'+value+'</span>';
        spaceLeft = elementWidth - wordWidth;
      }else{
        spaceLeft -= wordWidth + spaceWidth;
      }
      newText += element + ' ';
    });

    return newText;
  }

  private drawDecoration() 
  {
    const elementRect = this.el.nativeElement.getBoundingClientRect();
    console.log(elementRect);
    let newText = this.insertAtStartOfEachLine(this.originalText, elementRect.width, '</br>\u00A0*\u00A0');
    newText = '<span class="noselect">/**</br>\u00A0*\u00A0</span>' + newText + '<span class="noselect"></br>\u00A0*/</br></span>'
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newText);
  }
}
