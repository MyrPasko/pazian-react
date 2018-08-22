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
        text: 'В четверг, четвертого числа...'
    },
    {
        author: 'Просто Вася',
        text: 'Считаю, что 1$ должен стоить 35 рублей!'
    },
    {
        author: 'Гость',
        text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
    }
];

const News = React.createClass({
    render: function () {
        const data = this.props.data;
        var newsTemplates;

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
            <div className="news">
                {newsTemplates}
                <strong className={'news-count ' + (data.length > 0 ? '' : 'none')}>Всего новостей: {data.length}</strong>
            </div>

        );
    }
});

const Article = React.createClass({
    render: function () {
        const author = this.props.item.author;
        const text = this.props.item.text;

        return (
            <div className="article">
                <p className="news-author">{author}</p>
                <p className="news-text">{text}</p>
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
