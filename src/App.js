import React from 'react';
import './App.css';

const jsonData = [
  {"id": 1, "name": "John Doe", "email": "john@example.com"},
  {"id": 2, "name": "Jane Smith", "email": "jane@example.com"},
  {"id": 3, "name": "Alice Johnson", "email": "alice@example.com"}
];

const studentData = [
  {"id": 1, "name": "Tom Brown", "email": "tom@example.com"},
  {"id": 2, "name": "Lucy Green", "email": "lucy@example.com"},
  {"id": 3, "name": "Mike White", "email": "mike@example.com"}
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h1>Students Table</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
