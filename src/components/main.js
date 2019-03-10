import React from 'react';
import { connect } from 'react-redux';
import postsActionCreator from '../actions/postsActionCreator';

class Main extends React.Component {

    state = {
        loading: false,
        loaded: false,
        data: [],
        error: ''
    };

    counter = 0;

    componentDidMount = () => {
        this.props.loadPosts();
    }

    showMore = (start) => (
           
            this.props.data.slice(start, start+25).map(item => {
                console.log('post=> ', item.id);
                return(
                    <div className="post-item" key={item.id}>
                        <div>{item.id}</div>
                        <div className="post-title">{item.title}</div>
                        <div className="post-body">{item.body}</div>
                        <div className="user">user - {item.userId}</div>
                    </div>
                )
            })
    )

    showPostsList = () => {
        const {loaded, data } = this.props;
        console.log(loaded);

        let start = 0;
        if (loaded){
            console.log("counter showPostsList -> ", this.counter);
            start = this.counter;
            console.log("start showPostsList -> ", start);
            this.counter += 25;
            console.log("counter +25  -> ", this.counter);
        }
        return(
            loaded ? 
            data.slice(start, this.counter).map(item => {
                console.log('post=> ', item.id);
                return(
                    <div className="post-item" key={item.id}>
                        <div>{item.id}</div>
                        <div className="post-title">{item.title}</div>
                        <div className="post-body">{item.body}</div>
                        <div className="user">user - {item.userId}</div>
                    </div>
                )
            }) :
            <div>data is loading</div>
        )

    }
    render() {
        return(
            <div>
                <div className="list-posts">
                    {this.showPostsList()}    
                </div>
                <button onClick={this.showMore(25)}>show more</button>
                
            </div>

        )
    }
}

/* REDUX */

const MapStatetoProps = (state, ownProps) => {
    return {
        data: state.data,
        loaded: state.loaded,
        loading: state.loading
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loadPosts: () => {
            dispatch(postsActionCreator.loadData());
        }  
    };
};

const ConnectedMain = connect (MapStatetoProps, mapDispatchToProps) (Main);

export default ConnectedMain;

// Задание:
//   1. Создать редьюсер для ваших данных (сообщение) с состояниями:
//     loading
//     loaded
//     data
//     error

//   2. Создть компонент в который передавать эти данные через connect.
//   3. Создать ActionCreator в котором будет находится fetchRequest на получение данных с API
//   4. Вызывать этот экшн в componentDidMount вашегосозданого компонента.
//   5. Рендерить список полученных данных

//   AppMap ->
//     / -> Список из 50 постов, и кнопочка "показать еще" - подгружает по 25 постов. По умолчению грузит все, показывает по 25
//     /post/:postid -> страничка конкретного поста.
//       -> На страничке выводим все данные которые есть в объекте поста
//         И делаем ссылку на автора поста которая будет вести на роут
//     /user/:userid -> получить все посты пользователя
//       -> Возле каждого поста в списке делаем ссылку на сам пост /post/1
