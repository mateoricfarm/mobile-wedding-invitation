import { useState } from 'react';
import styled from '@emotion/styled';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase'; // ← Firestore 인스턴스 경로 맞게 수정하세요

const CommentForm = () => {
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !message) {
      alert('이름과 메시지를 채워주세요. 🥹');
      return;
    }

    try {
      const guestbookMessage = {
        sender: name,
        message: message,
        createdAt: serverTimestamp(),
        date: new Date().toLocaleString(),
      };

      await addDoc(collection(db, 'guestbook'), guestbookMessage);
      alert('메시지를 보냈습니다. 💌');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('🔥 메시지 저장 실패:', error);
      alert('메시지 전송 중 문제가 발생했습니다.');
    }
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <NameInput
        placeholder="이름"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <MessageInput
        placeholder="메시지"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <SubmitButton type="submit">등록</SubmitButton>
    </FormWrapper>
  );
};

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: visible;
  align-items: center;
`;

const NameInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1;
  outline: none;
  border: 1px solid #ccc;
  font-family: inherit;
  font-weight: 300;
`;

const MessageInput = styled.textarea`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 4px;
  font-size: 1rem;
  line-height: 1.5;
  outline: none;
  border: 1px solid #ccc;
  resize: none;
  font-family: inherit;
  font-weight: 300;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  background-color: white;
  font-family: inherit;
  font-weight: inherit;
  color: inherit;
`;

export default CommentForm;