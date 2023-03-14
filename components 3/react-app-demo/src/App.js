// 如果当前文件中用到jsx，需要import from 'react'
import React from 'react';
import FriendList from './components/FriendList'

/**
 * 函数式组件
 *  返回的值就是要渲染的 jsx 结构
 */
// function App() {
//   return (
//     <div className="App">
//       <h1>开课吧</h1>
//     </div>
//   );
// }

/**
 * 类式组件
 *  通过 class 来编写的组件
 *  组件类必须继承 react 提供的一个父类
 *  无论是函数式组件还是类式组件最终都要渲染内容
 *    - 函数：返回值
 *    - 类：类中的一个render方法返回值
 */


import friends1 from './datas/friends_1'
import friend2 from './datas/friends_2'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <h1>开课吧 - 类组件</h1>
        <hr/>

        {/* {
          [].map( v=> {
            return (<FriendList datas={v} />);
          })
        } */}

        <FriendList datas={friends1} />

        <hr/>

        <FriendList datas={friend2} />

      </div>
    )
  }

}

export default App;
