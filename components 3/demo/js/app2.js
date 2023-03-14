const App = (
    <div>
        <div>
            <h1>开课吧</h1>
            <p>web前端高级工程师</p>
        </div>
        <div>第一个</div>
    </div>
);


let name = '开课吧';
let title = 'web前端高级工程师';
let mt = {
    username: '莫涛',
    gender: '男'
}
let kkb = 'kaikeba';
let class1 = 'box1';
let ss = {
    width: '100px',
    height: '100px'
}



const App2 = (
    <div>
        {/*注释*/}
        {/*
            多行注释
        */}
        <div>
            <h1>{name}</h1>
            <p>{title}</p>
        </div>
        <div>第二个</div>
        <p>{'title'}</p>
        <p>{12}</p>
        <p>{['kai','ke','ba']}</p>
        <p>true: {true}</p>
        {/* 如果你们没看明白这里，去回顾数组方法：map */}
        <ul>{Object.keys(mt).map( key => {
            return <li key={key}>{key} : {mt[key]}</li> 
        } )}</ul>

        <hr/>

        <p id={kkb} className={class1}>开课吧</p>
        <p style={{width: '100px', color: 'red'}}>开课吧</p>
        <p style={ss}>开课吧</p>

    </div>
);




let zMouse = {
    name: '子鼠',
    gender: '男',
    skills: ['JavaScript', 'Node.js'],
    interests: ['音乐', '足球', '编程']
};

function showVal(val) {
    if (Array.isArray(val)) {
        return <dd>{val.join('-')}</dd>
    } else {
        return <dd>{val}</dd>
    }
}

const App3 = (
    <div>
        {
            Object.keys(zMouse).map( key => {
                return (
                    <dl key={key}>
                        <dt>{key}</dt>
                        {showVal(zMouse[key])}
                    </dl>
                )
            } )
        }
    </div>
);

ReactDOM.render(
    App3,
    document.querySelector('#app')
);