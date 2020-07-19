import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase/app';
import shortid from 'shortid';
import styled from 'styled-components';
import { ReactComponent as SubmitIcon } from '../../assets/submit.svg';
import randomEmoji from '../../utils/random-emoji'
const S = {};
S.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 64px;
`;

S.Header = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: #585151;
  text-align: center;
`;
S.List = styled.div`
  width: 360px;
`;
S.MessageWrapper = styled.div`
  font-size: 13px;
  line-height: 25px;
  color: #585151;
  text-align: center;
  border: 1px solid #9e9999;
  width: calc(100% - 80px);
  min-height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 30px;
  padding: 10px;
`;
S.Emoji = styled.div`
  width: 40px;
  text-align: center;
`;
S.Comment = styled.div`
  width: 100%;
  height: fit-content;
`;

S.InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  height: 120px;
  margin-top: 30px;
`;

S.TextArea = styled.textarea`
  resize: none;
  font-size: 13px;
  line-height: 25px;
  color: #585151;
  padding: 9px;
  border: 1px solid #9e9999;
  width: calc(100% - 80px);
  height: 60px;
  background-color: #f4f4f4;
  outline: none;
  z-index: 2;
  &::placeholder {
    text-align: center;
    word-break: keep-all;
    white-space: pre;
  }
`;

S.TextAreaShadow = styled.div`
  border: 1px solid #9e9999;
  width: calc(100% - 60px);
  height: 82px;
  margin-top: -74px;
  margin-left: 16px;
  z-index: 1;
`;

S.Submit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  position: absolute;
  bottom: 0;
  right: 16px;
  background-color: #f4f4f4;
  border: 1px solid #9e9999;
  z-index: 3;
`;
S.SubmitShadow = styled.div`
  width: 54px;
  height: 54px;
  position: absolute;
  bottom: 6px;
  right: 10px;
  background-color: #f4f4f4;
  border: 1px solid #9e9999;
  z-index: 2;
`;
S.More = styled.div`
 text-align: center;
 padding-top: 36px;
 font-size: 13px;
`;
const placeholder = `여기를 눌러 신랑 신부에게
축하 메시지를 전해주세요
`;

const BASE_COUNT= 8;
const CongratulatoryMessage = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [sliceNum, setSliceNum] = useState(1);

  // useEffect(() => {
  //   const commentList = [];
  //   for(let i=1; i< 32; i+=1) {
  //     commentList.push({comment : '일이삼사오육칠팔구십일이삼사오육칠팔\n' +
  //           '구십일이삼사오육칠팔구십일이삼사오육' + i, createTime: i, emoji: randomEmoji()})
  //   }
  //   setComments(commentList);
  // }, []);

  function writeUserData(name, comment, emoji) {
    if(!comment) return;

    const id = shortid.generate();
    firebase.database().ref('anna0803/comments/' + id).set({
      name,
      comment,
      emoji,
      createTime : new Date().getTime()
    });
  }

  function readUserData() {
    firebase.database().ref('anna0803/comments')
        .on('value', (snapshot) => {
          const value = snapshot.val()
          console.log(value)
          if(!value) return;

          setComments(Object.values(value).map(val => val).sort((v1, v2) => v2.createTime - v1.createTime));
        });
  }

  function handleOnSubmit() {
    const emoji = randomEmoji();
    writeUserData(name, comment, emoji);
    setName('');
    setComment('');
  }

  useEffect(() => {
    readUserData();
  }, []);

  return (
    <S.Wrapper>
      <S.Header>축하 메시지</S.Header>

      <S.InputWrapper>
        <>
          <S.TextArea
            placeholder={placeholder}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <S.TextAreaShadow />
        </>
        <>
          <S.Submit onClick={handleOnSubmit}>
            <SubmitIcon />
          </S.Submit>
          <S.SubmitShadow />
        </>
      </S.InputWrapper>

      <S.List>
        {
          comments.slice(0, sliceNum * BASE_COUNT).map(({emoji='✨', comment, createTime}) => {
            return (
                <S.MessageWrapper key={createTime}>
                  <S.Emoji>{emoji}</S.Emoji>
                  <S.Comment>{comment}</S.Comment>
                  <S.Emoji>{emoji}</S.Emoji>
                </S.MessageWrapper>
            );
          })
        }
        <S.More onClick={() => setSliceNum(sliceNum + 1)}>
          {(sliceNum * BASE_COUNT <= comments.length) ? '더보기' : ''}
        </S.More>
      </S.List>
    </S.Wrapper>
  );
};

export default CongratulatoryMessage;
