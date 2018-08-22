import React from 'react';
import ReactDOM from 'react-dom';
// import createReactClass from 'create-react-class';

import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

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

        console.log('State', this);

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
    addCounter: function () {
        this.setState({
            counter: ++this.state.counter
        });
        console.log(this.state.counter);
    },
    render: function () {
        const data = this.props.data;
        var newsTemplates;

        if (data.length > 0) {
            newsTemplates = data.map((item, index) => {
                return (
                    <div key={index} >
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
                 onClick={this.addCounter}
            >
                {newsTemplates}
                <strong className={'news-count ' + (data.length > 0 ? '' : 'none')}>Всего
                    новостей: {data.length}</strong>
            </div>

        );
    }
});

const App = React.createClass({
    render: function () {
        return (
            <div className="app">
                <h3>Новости</h3>
                <News data={myNews}/>
            </div>
        );
    }
});

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
