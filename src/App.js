import React from 'react';
import './App.css';

const jsonData = [
  {"id": 1, "name": "John Doe", "email": "john@example.com", "age": 25, "address": "123 Main St"},
  {"id": 2, "name": "Jane Smith", "email": "jane@example.com", "age": 30, "address": "456 Elm St"},
  {"id": 3, "name": "Alice Johnson", "email": "alice@example.com", "age": 28, "address": "789 Maple St"}
];

const studentData = [
  {"id": 1, "name": "Tom Brown", "email": "tom@example.com", "age": 22, "address": "321 Oak St"},
  {"id": 2, "name": "Lucy Green", "email": "lucy@example.com", "age": 24, "address": "654 Pine St"},
  {"id": 3, "name": "Mike White", "email": "mike@example.com", "age": 26, "address": "987 Cedar St"}
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
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.age}</td>
                <td>{user.address}</td>
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
              <th>Age</th>
              <th>Address</th>
            </tr>
          </thead>
          <tbody>
            {studentData.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>{student.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </header>
    </div>
  );
}

export default App;
