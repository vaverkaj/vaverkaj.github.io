import { AfterViewInit, Component, ElementRef, HostListener, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-block-comment',
  templateUrl: './block-comment.component.html',
  styleUrls: ['./block-comment.component.scss']
})
export class BlockCommentComponent implements AfterViewInit {
  @ViewChild('bar') verticalBar: ElementRef;

  constructor(private renderer: Renderer2, private window: Window) { }

  ngAfterViewInit(): void {
      const contentHeight = this.verticalBar.nativeElement.offsetHeight;
      const style = window.getComputedStyle(this.verticalBar.nativeElement, null);
      const elementHeight = parseFloat(style.lineHeight);
      for (let index = 0; index < Math.round(contentHeight / elementHeight); index++) {
        this.renderer.appendChild(this.verticalBar.nativeElement, this.renderer.createText('\u00A0*\u00A0\n'));
      }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    const contentHeight = this.verticalBar.nativeElement.offsetHeight;
    const style = window.getComputedStyle(this.verticalBar.nativeElement, null);
    const elementHeight = parseFloat(style.lineHeight);
    this.renderer.setProperty(this.verticalBar.nativeElement, 'innerHTML', '');
    for (let index = 0; index < Math.round(contentHeight / elementHeight); index++) {
      this.renderer.appendChild(this.verticalBar.nativeElement, this.renderer.createText('\u00A0*\u00A0\n'));
    }
  }

}
