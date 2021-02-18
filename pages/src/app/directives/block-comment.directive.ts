import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBlockComment]'
})
export class BlockCommentDirective implements OnInit{
  canvas: any;
  originalText: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.initCanvas(); 
    this.renderer.addClass(this.el.nativeElement,'c-mono-3');
    this.originalText = this.el.nativeElement.innerText;
    this.drawDecoration();
    this.drawDebugRect();
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.drawDecoration();
    this.drawDebugRect();
  }

  private initCanvas() {
    this.canvas = this.renderer.createElement('canvas');
    const context = this.canvas.getContext('2d');
    this.renderer.appendChild(this.el.nativeElement.parentElement, this.canvas);
    context.font = window.getComputedStyle(this.el.nativeElement).getPropertyValue('font');
  }

  private insertAtStartOfEachLine(text, elementWidth, value): string {
    const context = this.canvas.getContext('2d');
    elementWidth -= context.measureText('\u00A0*\u00A0').width;
    text = text.trim();
    let newText = '';
    let spaceLeft = elementWidth;
    const spaceWidth = context.measureText(' ').width;
    const words = text.split(' ');
    words.forEach(element => {
      const wordWidth = context.measureText(element).width;
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

  private drawDecoration() {
    const elementRect = this.el.nativeElement.getBoundingClientRect();
    let newText = this.insertAtStartOfEachLine(this.originalText, elementRect.width, '</br>\u00A0*\u00A0');
    newText = '<span class="noselect">/**</br>\u00A0*\u00A0</span>' + newText + '<span class="noselect"></br>\u00A0*/</br></span>'
    this.renderer.setProperty(this.el.nativeElement, 'innerHTML', newText);
  }

  private drawDebugRect() {
    const bounds = this.el.nativeElement.getBoundingClientRect();
    this.renderer.setStyle(this.canvas, 'position', 'absolute');
    this.renderer.setStyle(this.canvas, 'left', bounds.left +'px');
    this.renderer.setStyle(this.canvas, 'top', bounds.top +'px');
    this.renderer.setStyle(this.canvas, 'width', bounds.width +'px');
    this.renderer.setStyle(this.canvas, 'height', bounds.height +'px');
    this.renderer.setStyle(this.canvas, 'background-color', 'rgba(255, 0, 0, 0.2)');
  }
}
