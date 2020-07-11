import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase/app';
import ReactIdSwiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import shortid from 'shortid';

import './App.css';
import MainImage from './images/main.jpg';
import Image1 from './images/1.jpg';
import Image2 from './images/2.jpg';
import Image3 from './images/3.jpg';
import Image4 from './images/4.jpg';
import Image5 from './images/5.jpg';
import Image6 from './images/6.jpg';
import Image7 from './images/7.jpg';


function App() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function writeUserData(name, comment) {
    const id = shortid.generate();
    firebase.database().ref('comments/' + id).set({
      name,
      comment,
      createTime : new Date().getTime()
    });
  }

  function readUserData() {
    firebase.database().ref('comments')
        .on('value', (snapshot) => {
          const value = snapshot.val()
          console.log(value)
          if(!value) return;

          setComments(Object.values(value).map(val => val));
        });
  }

  function handleOnSubmit() {
    writeUserData(name, comment);
    setName('');
    setComment('');
  }

  useEffect(() => {
    readUserData();
  }, []);

  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
  ];

  return (
    <div className="App">
      <h1>08 / 30</h1>
      <div>최재근ㆍ김초록</div>
      <div>결혼합니다</div>
      <img src={MainImage} />
      <div>2020년 8월 30일 일요일 오후 3시</div>
      <div>삼성금융캠퍼스 지하 1층 비전홀</div>
      <div>∨</div>
      <div>INVITATION</div>
      <div>{
        `
        두 사람이 사랑으로 만나\n
        진실과 이해로써 하나를 이루려 합니다.\n
        이 두사람을 지성으로 아끼고 돌봐주신\n
        여러분들을 모시고 서약을 맺고자 하오니\n
        바쁘신 가운데 두 사람의 앞날을\n
        가까이에서 축복해 주시면 고맙겠습니다.\n
        `
      }</div>

      <div>최용호 ㆍ 황해순 의 장남 재근</div>
      <div>김석종 ㆍ 조정애 의 장녀 초록</div>

      <div>2020년 8월 30일 일요일 오후 3시</div>
      <div>삼성금융캠퍼스 지하 1층 비전홀</div>

      <div>ㆍ</div>

      <div>our photo</div>
      <ReactIdSwiper>
        {
          images.map(({image}, index) => (
              <img
                  src={image}
                  key={'image-' + index}
                  width={100}
                  height={100}
              />
          ))
        }
      </ReactIdSwiper>
      <div>
        <div>
          name: <input value={name} onChange={(e) => setName(e.target.value)}/>
        </div>
        <div>
          comment: <input value={comment} onChange={(e) => setComment(e.target.value)}/>
        </div>
        <button onClick={handleOnSubmit}>submit</button>
      </div>
      <div>
        {
          comments.map(({name, comment, createTime}) => {
            return <div>{`${name}, ${comment}, ${createTime}`}</div>
          })
        }
      </div>
    </div>
  );
}

export default App;
