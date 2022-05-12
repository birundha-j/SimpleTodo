import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayList: [],
      name: '',
      isActive: false,
      getId: ''
    };
    this.click = this.click.bind(this)
    this.handlaChange = this.handlaChange.bind(this)
    this.overRide = this.overRide.bind(this)
  }

  handlaChange(e) {
    let data = e.target.value;
    this.setState({ name: data });
  }

  click() {
    if (this.state.isActive) {
      this.setState({
        isActive: false
      })
      this.state.arrayList[this.state.getId] = this.state.name
    } else {
      this.setState({ arrayList: [...this.state.arrayList, this.state.name] })
    }
    this.setState({ name: '' });
  }

  overRide(id, key) {
    this.setState({ getId: id });
    if (key === 'edit') {
      this.setState({
        isActive: true
      })
      this.setState({ name: this.state.arrayList[id] });
    } else {
      let arrayFilter = this.state.arrayList.filter((data, index) => {
        return index !== id
      })
      this.setState({ arrayList: arrayFilter })
    }
  }

  render() {
    return (
      <div className='container'>
        <div>
          <h1 className='heading'>Todo list</h1>
          <input className='customInput' placeholder='Enter Name' onChange={this.handlaChange} value={this.state.name} />
          <button className='btnShow' disabled={this.state.name === '' ? true : false} onClick={this.click}>{this.state.isActive ? 'Update' : 'Add'}</button>
          <div>
            {this.state.arrayList.length > 0 && <div className='showList'>
              <div>Name</div>
              <div>Actions</div>
            </div>}
            {this.state.arrayList.map((data, index) => {
              return (
                <div className='showList'>
                  <div className='userName'>{data}</div>
                  <div className='actionView'>
                    <div className='editIcon' onClick={() => this.overRide(index, 'edit')}>✎</div>
                    <div className='removeIcon' onClick={() => this.overRide(index, 'remove')}>🗑</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;