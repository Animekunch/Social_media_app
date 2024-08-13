import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const QAContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background-color: #f8f9fa;
`;

const QAHeader = styled.h1`
  margin-bottom: 2rem;
  font-size: 2rem;
  color: #333;
`;

const QuestionList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
`;

const QuestionCard = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin-bottom: 1rem;
`;

const QuestionTitle = styled.h5`
  margin: 0;
  font-size: 1.25rem;
  color: #007bff;
`;

const QuestionBody = styled.p`
  margin: 0.5rem 0;
  color: #666;
`;

const QA = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('https://api.example.com/questions');
        setQuestions(response.data);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <QAContainer>
      <QAHeader>Q&A</QAHeader>
      <QuestionList>
        {questions.map((question) => (
          <QuestionCard key={question.id}>
            <QuestionTitle>{question.title}</QuestionTitle>
            <QuestionBody>{question.body}</QuestionBody>
          </QuestionCard>
        ))}
      </QuestionList>
    </QAContainer>
  );
};

export default QA;
