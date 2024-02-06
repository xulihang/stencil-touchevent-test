import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @State() text:string = "touch me";
  times:number = 0;
  onTouchMove(e:TouchEvent){
    console.log(e);
    this.times = this.times + 1;
    this.text = "touched "+this.times+" times";
  }
  
  render() {
    return (
      <div 
        class="touch-container"
        onTouchMove={(e:TouchEvent)=>this.onTouchMove(e)}
      >
        {this.text}
      </div>
    );
  }
}
