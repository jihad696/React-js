import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Form, Button, ListGroup, Card, Modal } from "react-bootstrap";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const addTodo = (e) => {
   e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const removeTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodoComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  
  const openEditModal = (todo) => {
    setEditingTodo(todo);
    setShowEditModal(true);
  };

  const saveEditedTodo = () => {
    if (!editingTodo.text.trim()) return;
    setTodos(todos.map((todo) => (todo.id === editingTodo.id ? editingTodo : todo)));
    closeEditModal();
  };

  const closeEditModal = () => {
    setShowEditModal(false);
    setEditingTodo(null);
  };

  return (
    <Container className="mt-5">
      <Card>
        <Card.Header as="h2" className="text-center">Todo List</Card.Header>
        <Card.Body>
          <Form onSubmit={addTodo}>
            <Row>
              <Col xs={9}>
                <Form.Control type="text" placeholder="Enter a new todo" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
              </Col>
              <Col xs={3}>
                <Button variant="primary" type="submit" className="w-100">Add</Button>
              </Col>
            </Row>
          </Form>

          <ListGroup className="mt-3">
            {todos.map((todo) => (
              <ListGroup.Item key={todo.id} className="d-flex justify-content-between align-items-center">
                <Form.Check 
                  type="checkbox" 
                  checked={todo.completed} 
                  onChange={() => toggleTodoComplete(todo.id)} 
                  label={<span style={{ textDecoration: todo.completed ? "line-through" : "none", color: todo.completed ? "gray" : "black" }}>{todo.text}</span>}
                />
                <div>
                  <Button variant="warning" size="sm" className="me-2" onClick={() => openEditModal(todo)}>Edit</Button>
                  <Button variant="danger" size="sm" onClick={() => removeTodo(todo.id)}>Delete</Button>
                </div>
              </ListGroup.Item>
            ))}
          </ListGroup>

          {todos.length === 0 && <p className="text-center text-muted mt-3">No todos yet. Add a new todo!</p>}
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between">
          <strong>Total: {todos.length}</strong>
          <strong>Completed: {todos.filter(todo => todo.completed).length}</strong>
        </Card.Footer>
      </Card>

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={closeEditModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Todo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control type="text" value={editingTodo?.text || ""} onChange={(e) => setEditingTodo({ ...editingTodo, text: e.target.value })} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeEditModal}>Cancel</Button>
          <Button variant="primary" onClick={saveEditedTodo}>Save</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
