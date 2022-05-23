import React from "react";
import './canva.css';

class Canvas extends React.Component {
    state = { X: 0, Y: 0, iX: 0, iY: 0, rX: 0, rY: 0, rW: 0, rH: 0 };
  
    getMousePositionOnCanvas = (event) => {
      const rect = this.refs.canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
      };
    }
  
    onMouseMove = (event) => {
      const pos = this.getMousePositionOnCanvas(event);
      this.setState({ X: pos.x, Y: pos.y, iX: this.state.iX, iY: this.state.iY, rX: Math.min(this.state.iX, pos.x), rY: Math.min(this.state.iY, pos.y), rW: this.state.iX ? Math.abs(this.state.iX-pos.x) : 0, rH: this.state.iY ? Math.abs(this.state.iY-pos.y) : 0 });
    }
  
    onMouseOut = (event) => {
        this.setState({ X: 0, Y: 0, iX: 0, iY: 0, rX: 0, rY: 0, rW: 0, rH: 0 });		
    }
  
    startDraw = (event) => {
      const pos = this.getMousePositionOnCanvas(event);
      this.setState({X: pos.x, Y: pos.y, iX: pos.x, iY: pos.y, rX: 0, rY: 0, rW: 0, rH: 0})
    //   this.drawRectangle();
    }
  
    endDraw = (event) => {
      if(this.state.iX && this.state.iY) {
        const pos = this.getMousePositionOnCanvas(event);     
        this.drawRectangle();
      }
    }
  
    drawRectangle = () => {
        const context = this.refs.canvas.getContext("2d");
        context.beginPath();
        context.lineWidth = "4";
        context.strokeStyle = "red";
        context.rect(this.state.rX,this.state.rY,this.state.rW,this.state.rH);
        context.stroke();  	
    }
  
    resetCanvas = (event) => {
      this.setState({ X: 0, Y: 0, iX: 0, iY: 0, rX: 0, rY: 0, rW: 0, rH: 0 });
      const context = this.refs.canvas.getContext("2d");
      context.clearRect(0, 0, this.refs.canvas.width, this.refs.canvas.height);
      context.beginPath();
    }
    
    render() {
      const imageUrl = 'https://f1.media.brightcove.com/8/234507581/234507581_5106927173001_5106903722001-vs.jpg?pubId=234507581&videoId=5106903722001';
      return (
          <div class="container">
              <canvas id="reactCanvas" style={{ background: `url(${imageUrl}) no-repeat`}} width="700" height="700" ref="canvas" onMouseMove={this.onMouseMove} onMouseDown={this.startDraw} onMouseUp={this.endDraw} onMouseOut={this.onMouseOut} />
              <button type="button" class="btn btn-primary" onClick={this.resetCanvas}>Reset</button>        
              {/* { this.state.rW ? <Metrics {...this.state} /> : null }	       */}
          </div>
        );
    }
  }

  export default Canvas;
  
  class Metrics extends React.Component {
    render() {
      return (	
              <ul class="list-group">
                <li class="list-group-item">{`X: ${this.props.rX}`}</li>
                <li class="list-group-item">{`Y: ${this.props.rY}`}</li>
                <li class="list-group-item">{`W: ${this.props.rW}`}</li>
                <li class="list-group-item">{`H: ${this.props.rH}`}</li>
              </ul>		
      );
    }
  }
  
//   ReactDOM.render(<Canva/>, document.querySelector('#root'));