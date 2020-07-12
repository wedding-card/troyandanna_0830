import React, {useEffect, useState} from 'react';
import * as firebase from 'firebase/app';
import shortid from 'shortid';
import styled from 'styled-components';
import { ReactComponent as SubmitIcon } from '../../assets/submit.svg';

const S = {};
S.Wrapper = styled.div`
  padding-top: 64px;
`;
S.Header = styled.div`
  font-size: 19px;
  font-weight: bold;
  color: #585151;
  text-align: center;
`;
S.MessageWrapper = styled.div`
  font-size: 13px;
  line-height: 25px;
  color: #585151;
  text-align: center;
  border: 1px solid #9e9999;
  width: calc(100% - 80px);
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 8px 30px;
  padding: 10px;
`;

S.InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120px;
  margin-top: 30px;
`;

S.TextArea = styled.textarea`
  resize: none;
  font-size: 13px;
  line-height: 25px;
  color: #585151;
  padding: 10px;
  border: 1px solid #9e9999;
  width: calc(100% - 80px);
  height: 60px;
  background-color: #f4f4f4;
  outline: none;
  z-index: 2;
  &::placeholder {
    text-align: center;
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
const placeholder = `여기를 눌러 신랑 신부에게
축하 메시지를 전해주세요
`
const CongratulatoryMessage = () => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  function writeUserData(name, comment) {
    if(!comment) return;

    const id = shortid.generate();
    firebase.database().ref('anna0803/comments/' + id).set({
      name,
      comment,
      createTime : new Date().getTime()
    });
  }

  function readUserData() {
    firebase.database().ref('anna0803/comments')
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

  return (
    <S.Wrapper>
      <S.Header>축하 메시지</S.Header>
      <div>
      {
        comments.map(({comment}) => {
          return (
            <S.MessageWrapper>
              <span>✨</span>
              <span>{comment}</span>
              <span>✨</span>
            </S.MessageWrapper>
          );
        })
      }
      </div>

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
    </S.Wrapper>
  );
};

export default CongratulatoryMessage;
