import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './bootstrap.min.css'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProfileScreen from './screens/ProfileScreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/' exact component={HomeScreen} />
          <Route path='/login' exact component={LoginScreen} />
          <Route path='/register' exact component={RegisterScreen} />
          <Route path='/product/:id' exact component={ProductScreen} />
          <Route path='/cart/:id?' exact component={CartScreen} />
          <Route path='/profile' exact component={ProfileScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
