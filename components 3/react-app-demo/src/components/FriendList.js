import React from 'react'
import './FriendList.css'

class FriendList extends React.Component {

    render() {
        // 通过 组件对象的 props 属性获取到传入的属性数据
        // console.log(this.props);

        let {datas: friends1} = this.props;

        return (
            <div className="friend-list">
                {
                    Object.keys(friends1).map( key => {
                        return (
                            <div key={key} className="friend-group">
                                <dt>{friends1[key].title}</dt>
                                {
                                    friends1[key].list.map((item) => {
                                        return <dd key={item.name}>{item.name}</dd>
                                    })
                                }
                            </div>
                        )
                    } )
                }
            </div>
        )
    }

}

export default FriendList;