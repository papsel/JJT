import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const defaultFlashcards = [
  {
    id: uuidv4(),
    question: 'What is the capital of France?',
    answer: 'Paris',
    imageUrl: 'https://avatars.githubusercontent.com/u/52585016?v=4',
  },
  {
    id: uuidv4(),
    question: 'What is 2 + 2?',
    answer: '4',
    imageUrl: 'https://avatars.githubusercontent.com/u/52585016?v=4',
  },
  {
    id: uuidv4(),
    question: 'Who wrote "Romeo and Juliet"?',
    answer: 'William Shakespeare',
    imageUrl: 'https://avatars.githubusercontent.com/u/52585016?v=4',
  },
  {
    id: uuidv4(),
    question: 'Sikutambui',
    answer: 'Wakadinali',
    imageUrl: 'https://avatars.githubusercontent.com/u/52585016?v=4',
  },
  // Add more flashcards as needed
];

function Flashcard() {
  const [flashcards, setFlashcards] = useState(defaultFlashcards);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredFlashcards = flashcards.filter(
    (card) =>
      card.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      card.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Flashcards</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search flashcards..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flashcards-container">
        {filteredFlashcards.map((flashcard) => (
          <div key={flashcard.id} className="flashcard">
            <div className="question">{flashcard.question}</div>
            <img src={flashcard.imageUrl} alt={flashcard.question} className="flashcard-image" />
            <div className="answer">{flashcard.answer}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashcard;