import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  increaseCounter,
  decreaseCounter,
} from './Redux/action';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayList: props.nameList != undefined ? props.nameList : [],
      name: '',
      isActive: false,
      getId: '',
      // list: {
      userName: '',
      age: '',
      mobile: '',
      count: true,
      result: ''
      // }
    };
    this.click = this.click.bind(this)
    this.handlaChange = this.handlaChange.bind(this)
    this.overRide = this.overRide.bind(this)
    this.callApi=this.callApi.bind(this)
    this.cutApi=this.cutApi.bind(this)
    this.textInput = React.createRef(true);
  }

  handlaChange(e, key) {
    let data = e.target.value;
    this.setState(prevState => {
      return {
        ...prevState,
        [key]: data
      }
    })
  }

  click() {
    if (this.state.isActive) {
      this.setState({
        isActive: false
      })
      this.state.arrayList[this.state.getId].userName = this.state.userName
      this.state.arrayList[this.state.getId].age = this.state.age
      this.state.arrayList[this.state.getId].mobile = this.state.mobile
      this.props.onTodoClick([...this.state.arrayList]);

    } else {
      let obj = {}
      obj.userName = this.state.userName
      obj.age = this.state.age
      obj.mobile = this.state.mobile
      this.setState({ arrayList: [...this.state.arrayList, obj] })
      this.props.onTodoClick([...this.state.arrayList, obj]);
    }
    this.setState({ userName: '', age: '', mobile: '' });
  }

  overRide(id, key) {
    this.setState({ getId: id });
    if (key === 'edit') {
      this.setState({
        isActive: true
      })
      this.setState({
        userName: this.state.arrayList[id].userName, age: this.state.arrayList[id].age, mobile: this.state.arrayList[id].mobile
      });
      this.props.onTodoClick(this.state.arrayList)
    } else {
      let arrayFilter = this.state.arrayList.filter((data, index) => {
        return index !== id
      })
      this.setState({ arrayList: arrayFilter })
      this.props.onTodoClick(arrayFilter)
    }
  }

  callApi(){
    this.setState({count: true})
    setTimeout(()=>{
    console.log(this.state.count, "arrayList")

      if (this.state.count) {
        const controller = new AbortController();
        fetch("https://pokeapi.co/api/v2/pokemon/12", {
          signal: controller.signal
        })
          .then((res) => res.json())
          .then((data) => this.setState({result: data}))
          .catch((err) => {
            // Handle error ..
          });
      }
    }, 5000)
  }

  cutApi(){
    this.setState({count: false})
    this.setState({result: ''})
  }

  render() {
    console.log(this.state.result, "arrayList")
    return (
      <div className='container'>
        <div>
          <h1 className='heading'>Todo list</h1>
          <input className='customInput' placeholder='Enter Name' onChange={(e) => this.handlaChange(e, 'userName')} value={this.state.userName} />
          <input type="number" className='customInput' placeholder='Enter Age' onChange={(e) => this.handlaChange(e, 'age')} value={this.state.age} />
          <input type="number" className='customInput' placeholder='Enter Mobile' onChange={(e) => this.handlaChange(e, 'mobile')} value={this.state.mobile} />
          <button className='btnShow' disabled={false} onClick={this.click}>{this.state.isActive ? 'Update' : 'Add'}</button>
          <div>
            {this.state.arrayList.length > 0 && <div className='showList'>
              <div>Name</div>
              <div>Age</div>
              <div>Mobile</div>
              <div>Actions</div>
            </div>}
            {this.state.arrayList?.map((data, index) => {
              return (
                <div className='showList'>
                  <div className='userName'>{data.userName}</div>
                  <div className='userName'>{data.age}</div>
                  <div className='userName'>{data.mobile}</div>
                  <div className='actionView'>
                    <div className='editIcon' onClick={() => this.overRide(index, 'edit')}>✎</div>
                    <div className='removeIcon' onClick={() => this.overRide(index, 'remove')}>🗑</div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div>
          <button onClick={this.callApi}>call api</button>
          <button onClick={this.cutApi}>cut api</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log('state:', state);
  return {
    nameList: state.counter.list,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: (data) => { // handles onTodoClick prop's call here
      dispatch(increaseCounter(data))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
