"use strict";


// import React from 'react';
// import ReactDOM from 'react-dom';
// // import createReactClass from 'create-react-class';
//
// import './index.css';
// // import App from './App';
// // import registerServiceWorker from './registerServiceWorker';
//
// // ReactDOM.render(<App />, document.getElementById('root'));
// // registerServiceWorker();
//
// const myNews = [
//     {
//         author: 'Саша Печкин',
//         text: 'В четверг, четвертого числа...',
//         bigText: 'В четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
//     },
//     {
//         author: 'Просто Вася',
//         text: 'Считаю, что $ должен стоить 35 рублей!',
//         bigText: 'А евро 42!'
//     },
//     {
//         author: 'Гость',
//         text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
//         bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
//     }
// ];
//
// const Article = React.createClass({
//     propTypes: {
//         data: React.PropTypes.shape({
//             author: React.PropTypes.string.isRequired,
//             text: React.PropTypes.string.isRequired,
//             bigText: React.PropTypes.string.isRequired
//         })
//     },
//     getInitialState: function () {
//         return {
//             visible: false
//         };
//     },
//     readmoreClick: function (e) {
//         e.preventDefault();
//         this.setState({visible: true})
//     },
//     render: function () {
//         const author = this.props.item.author;
//         const text = this.props.item.text;
//         const bigText = this.props.item.bigText;
//         const visible = this.state.visible;
//
//         return (
//             <div className="article">
//                 <p className="news-author">{author}</p>
//                 <p className="news-text">{text}</p>
//                 <a href="#"
//                    onClick={this.readmoreClick}
//                    className={'news-readmore ' + (visible ? 'none' : '')}>Подробнее</a>
//                 <p className={'news-big-text ' + (visible ? '' : 'none')}>{bigText}</p>
//             </div>
//         );
//     }
// });
//
// const News = React.createClass({
//     propTypes: {
//         data: React.PropTypes.array.isRequired,
//     },
//     getInitialState: function () {
//         return {
//             counter: 0
//         };
//     },
//
//     render: function () {
//         var newsTemplates;
//         const data = this.props.data;
//
//         if (data.length > 0) {
//             newsTemplates = data.map((item, index) => {
//                 return (
//                     <div key={index}>
//                         <Article item={item}/>
//                     </div>
//                 )
//             });
//         } else {
//             newsTemplates = <p>К сожалению, новостей - нет.</p>
//         }
//
//         console.log(newsTemplates);
//         return (
//             <div className="news"
//             >
//                 {newsTemplates}
//                 <strong className={'news-count ' + (data.length > 0 ? '' : 'none')}>Всего
//                     новостей: {data.length}</strong>
//             </div>
//
//         );
//     }
// });
//
// // --- добавили test input ---
// const Add = React.createClass({
//     // getInitialState: function () {                // для контролируемого компонента
//     //     return {
//     //         myValue: ''
//     //     };
//     // },
//     // onChangeHandler(e) {
//     //     this.setState({myValue: e.target.value})
//     // },
//     // onClickHandler() {
//     //     alert(this.state.myValue);
//     // },
//
//     getInitialState: function() { //устанавливаем начальное состояние (state)
//         return {
//             agreeNotChecked: true,
//             authorIsEmpty: true,
//             textIsEmpty: true
//         };
//     },
//     componentDidMount: function () {
//       ReactDOM.findDOMNode(this.refs.author).focus();   // ставим фокус в поле, как только компонент примонтировался
//     },
//     onBtnClickHandler(e) {
//         e.preventDefault();
//         // alert(ReactDOM.findDOMNode(this.refs.myTestInput).value)
//         const author = ReactDOM.findDOMNode(this.refs.author).value;
//         const text = ReactDOM.findDOMNode(this.refs.text).value;
//         alert(author + '\n' + text);
//     },
//     onCheckRuleClick(e) {
//       // ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked;
//         this.setState({agreeNotChecked: !this.state.agreeNotChecked})
//     },
//     // onAuthorChange: function(e) {
//     //     if (e.target.value.trim().length > 0) {
//     //         this.setState({authorIsEmpty: false})
//     //     } else {
//     //         this.setState({authorIsEmpty: true})
//     //     }
//     // },
//     // onTextChange: function(e) {
//     //     if (e.target.value.trim().length > 0) {
//     //         this.setState({textIsEmpty: false})
//     //     } else {
//     //         this.setState({textIsEmpty: true})
//     //     }
//     // },
//     onFieldChange: function(fieldValue, e) {
//         if (e.target.value.trim().length > 0) {
//             this.setState({[fieldValue]: false})
//         } else {
//             this.setState({[fieldValue]: true})
//         }
//     },
//
//     render: function () {
//         return (
//             <form className='add cf'>
//                 <input
//                     type='text'
//                     className='add-author'
//                     defaultValue=''
//                     placeholder='Ваше имя'
//                     ref='author'
//                     // onChange={this.onAuthorChange}
//                     onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
//                 />
//                 <textarea
//                     className='add-text'
//                     defaultValue=''
//                     placeholder='Текст новости'
//                     ref='text'
//                     // onChange={this.onTextChange}
//                     onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
//                 ></textarea>
//                 <label className='add-checkrule'>
//                     <input type='checkbox'
//                            defaultChecked={false}
//                            ref='checkrule'
//                            onChange={this.onCheckRuleClick}
//                     />Я согласен с
//                     правилами
//                 </label>
//                 <button
//                     className='add-btn'
//                     onClick={this.onBtnClickHandler}
//                     ref='alert_button'
//                     disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
//                 >
//                     Показать alert
//                 </button>
//             </form>
//         );
//     }
// });
//
// {/*<div>*/}
// {/*<input*/}
// {/*className='test-input'*/}
// {/*defaultValue=''*/}
// {/*ref="myTestInput"*/}
// {/*// onChange={this.onChangeHandler}  // для контролируемого компонента*/}
// {/*// value={this.state.myValue}*/}
// {/*// value={this.state.myValue}*/}
// {/*placeholder="Введите значение"/>*/}
// {/*<button*/}
// {/*// onClick={this.onClickHandler}       // для контролируемого компонента*/}
// {/*onClick={this.onBtnClickHandler}*/}
// {/*ref='alert-button'*/}
// {/*>Показать значение</button>*/}
// {/*/!*<div>{this.state.myValue}</div>*!/*/}
// {/*</div>*/}
//
// const App = React.createClass({
//     render: function () {
//         return (
//             <div className="app">
//                 <Add/>
//                 <h3>Новости</h3>
//                 <News data={myNews}/>
//             </div>
//         );
//     }
// });
//
//
//
// ReactDOM.render(
//     <App/>,
//     document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const myNews = [
    {
        author: 'Саша Печкин',
        text: 'В четверг, четвертого числа...',
        bigText: 'В четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что $ должен стоить 35 рублей!',
        bigText: 'А евро 42!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000',
        bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

// window.ee = new EventEmitter();
window.ee = require('event-emitter');

console.log(window.ee);

const Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    getInitialState: function () {
        return {
            visible: false
        };
    },
    readmoreClick: function (e) {
        e.preventDefault();
        this.setState({visible: true})
    },
    render: function () {
        const author = this.props.item.author;
        const text = this.props.item.text;
        const bigText = this.props.item.bigText;
        const visible = this.state.visible;

        return (
            <div className="article">
                <p className="news-author">{author}</p>
                <p className="news-text">{text}</p>
                <a href="#"
                   onClick={this.readmoreClick}
                   className={'news-readmore ' + (visible ? 'none' : '')}>Подробнее</a>
                <p className={'news-big-text ' + (visible ? '' : 'none')}>{bigText}</p>
            </div>
        );
    }
});

const News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,
    },
    getInitialState: function () {
        return {
            counter: 0
        };
    },

    render: function () {
        var newsTemplates;
        const data = this.props.data;

        if (data.length > 0) {
            newsTemplates = data.map((item, index) => {
                return (
                    <div key={index}>
                        <Article item={item}/>
                    </div>
                )
            });
        } else {
            newsTemplates = <p>К сожалению, новостей - нет.</p>
        }

        console.log(newsTemplates);
        return (
            <div className="news"
            >
                {newsTemplates}
                <strong className={'news-count ' + (data.length > 0 ? '' : 'none')}>Всего
                    новостей: {data.length}</strong>
            </div>

        );
    }
});

// --- добавили test input ---
const Add = React.createClass({
    getInitialState: function() { //устанавливаем начальное состояние (state)
        return {
            agreeNotChecked: true,
            authorIsEmpty: true,
            textIsEmpty: true
        };
    },
    componentDidMount: function () {
        ReactDOM.findDOMNode(this.refs.author).focus();   // ставим фокус в поле, как только компонент примонтировался
    },
    onBtnClickHandler: function(e) {
        e.preventDefault();
        var textEl = ReactDOM.findDOMNode(this.refs.text);
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = textEl.value;
        var item = [{
            author: author,
            text: text,
            bigText: '...'
        }];
        window.ee.emit('News.add', item);
        textEl.value = '';
        this.setState({textIsEmpty: true});
    },
    onCheckRuleClick(e) {
        this.setState({agreeNotChecked: !this.state.agreeNotChecked})
    },
    onFieldChange: function(fieldValue, e) {
        if (e.target.value.trim().length > 0) {
            this.setState({[fieldValue]: false})
        } else {
            this.setState({[fieldValue]: true})
        }
    },

    render: function () {
        return (
            <form className='add cf'>
                <input
                    type='text'
                    className='add-author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                    onChange={this.onFieldChange.bind(this, 'authorIsEmpty')}
                />
                <textarea
                    className='add-text'
                    defaultValue=''
                    placeholder='Текст новости'
                    ref='text'
                    onChange={this.onFieldChange.bind(this, 'textIsEmpty')}
                ></textarea>
                <label className='add-checkrule'>
                    <input type='checkbox'
                           defaultChecked={false}
                           ref='checkrule'
                           onChange={this.onCheckRuleClick}
                    />Я согласен с
                    правилами
                </label>
                <button
                    className='add-btn'
                    onClick={this.onBtnClickHandler}
                    ref='alert_button'
                    disabled={this.state.agreeNotChecked || this.state.authorIsEmpty || this.state.textIsEmpty}
                >
                    Добавить новость
                </button>
            </form>
        );
    }
});

const App = React.createClass({
    getInitialState() {
        return {
            news: myNews
        }
    },

    componentDidMount: function() {
        var self = this;
        // window.ee.addListener('News.add', function(item) {
        //     var nextNews = item.concat(self.state.news);
        //     self.setState({news: nextNews});
        // });
    },
    componentWillUnmount: function() {
        window.ee.removeListener('News.add');
    },

    render: function () {
        return (
            <div className="app">
                <Add/>
                <h3>Новости</h3>
                <h3>Щас попробуем скинуть на удаленную ветку повторно and once more time.</h3>
                <News data={this.state.news}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


// приложение не работает, поскольку автор применял EventEmitter. У меня он не сработал, я решил оставить все как есть
// EventEmitter нужен был для примера облегчения работы с передачей данных и событий. что предоставляет Редакс.
// Редакс будет рассмотрен в следующих примерах.
