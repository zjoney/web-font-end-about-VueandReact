let h1 = <h1 id="title"><span>Hello Kaikeba</span></h1>;

// dom : 文档对象模型，把文档（一堆字符，一堆有格式的字符）中的内容解析转变成 js 中的对象格式，并且还提供许多的方法和特性来操作这些对象，对这些对象的操作还会同步反馈（更新到）这些对象对应的html
console.dir(document.querySelector('#app'));
console.log(h1);

ReactDOM.render(
    h1,
    document.querySelector('#app')
);


// document.querySelector('#app2').innerHTML = '<style>#app {display: none;}</style>';