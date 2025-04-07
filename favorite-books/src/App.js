import React from 'react';
import Book from './Book';
import MasteringReact from './mastering react.svg';
import PracticalReact from './practical react.svg';
import ReactInAction from './react in action.svg';
import './style.css';

export const App = () => {
  return (
    <main>
      <h1>Favorite Books</h1>
      <div className="book-list">
        <Book
          title="Mastering React"
          author="Anthony Pham"
          cover={MasteringReact}
        />
        <Book
          title="Practical React"
          author="Alex Johnson"
          cover={PracticalReact}
        />
        <Book
          title="React in Action"
          author="Bob Climo"
          cover={ReactInAction}
        />
      </div>
    </main>
  );
};

export default App;
