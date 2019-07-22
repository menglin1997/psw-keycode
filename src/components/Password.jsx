import React, { Component } from 'react';
import '../assets/css/password.css'
class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      len: [],
      divs: [0,1,2,3,4,5],
      boardlists: [{
        id: 1,
        con: 1,
        checked: false
        }, {
          id: 2,
          con: 2,
          checked: false
        }, {
          id: 3,
          con: 3,
          checked: false
        }, {
          id: 4,
          con: 4,
          checked: false
        }, {
          id: 5,
          con: 5,
          checked: false
        }, {
          id: 6,
          con: 6,
          checked: false
        }, {
          id: 7,
          con: 7,
          checked: false
        }, {
          id: 8,
          con: 8,
          checked: false
        }, {
          id: 9,
          con: 9,
          checked: false
        }, {
          id: 10,
          con: "提交",
          checked: false
        }, {
          id: 0,
          con: 0,
          checked: false
        },
        {
          id: 12,
          con: "x",
          checked: false
        }
      ]
    };
  }
  handleKey= (id) => {
    var value = this.state.len
    // 判断点击的数字 然后讲数字赋值给div
    if(value.length < 6 && id !== 10) {
      // 删除
      if(id === 12) {
        value.pop()
        this.setState({
          len: value
        })
      } else {
        value.push(id)
        this.setState({
          len: value
        })
      }
    } else if(id === 10 && value.length < 6) {
        console.log(value.length, 81)
        alert('点击了提交,但是密码不完整')
        return
    } else if(id === 10 && value.length === 6) {
      alert('点击了提交,密码完整')
    } else {
      alert('密码输入完毕')
    }
  }
  // 关闭(点击关闭让键盘隐藏)
  close =() => {
    let keyBoard = this.refs.keyBoard
    keyBoard.style.display = 'none'
  }
  // 点击显示键盘
  divBox=()=>{
    let keyBoard = this.refs.keyBoard
    keyBoard.style.display = 'block'
  }
  render() {
    return (
      <div>
        {/* 密码框布局 */}
        <div className="password">
          <div className="divBox" ref="divBox" onClick={this.divBox}>
            <div ref="div1" className={!this.state.len[0] ? 'boxShadow' : ''}>
              { this.state.len[0] }
            </div>
            <div ref="div2" className={this.state.len[0] && !this.state.len[1] ? 'boxShadow' : ''}>
              { this.state.len[1] }
            </div>
            <div ref="div3" className={this.state.len[1] && !this.state.len[2] ? 'boxShadow' : ''}>
              { this.state.len[2] }
            </div>
            <div ref="div4" className={this.state.len[2] && !this.state.len[3] ? 'boxShadow' : ''}>
              { this.state.len[3] }
            </div>
            <div ref="div5" className={this.state.len[3] && !this.state.len[4] ? 'boxShadow' : ''}>
              { this.state.len[4] }
            </div>
            <div ref="div6" className={this.state.len[4] && !this.state.len[5] ? 'boxShadow' : ''}>
              { this.state.len[5] }
            </div>
          </div>
        </div>
        {/* 数字键盘布局 */}
        <div className="keyBoard" ref="keyBoard">
          <div className="close">
            <div>XX软件安全键盘</div>
            <div onClick={this.close}>关闭</div>
          </div>
          <div className="nums">
            {
              this.state.boardlists.map((item, index) => {
                return (
                  <div key={item.id} onClick={this.handleKey.bind(this,item.id)}>{item.con}</div>
                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Password;