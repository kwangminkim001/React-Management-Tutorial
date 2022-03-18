import './App.css';
import { Component } from 'react';
import Customer from './components/Customer';

const customer = [
  {
    'id' : '1',
    'image' : 'https://placeimg.com/64/64/1',
    'name' : '홍길동',
    'birthday' : '1111111',
    'gender' : '남자',
    'job' : '학생1'
  },
  {
    'id' : '2',
    'image' : 'https://placeimg.com/64/64/2',
    'name' : '둘리',
    'birthday' : '2222222',
    'gender' : '남자',
    'job' : '학생2'
  },
  {
    'id' : '3',
    'image' : 'https://placeimg.com/64/64/3',
    'name' : '루피',
    'birthday' : '3333333',
    'gender' : '남자',
    'job' : '학생3'
  }
]

class App extends Component{

  render(){
    return (
      <div>
        {
          customer.map(c => {
            return (
              <Customer 
              key={c.id}
              id={c.id}
              image={c.image}
              name={c.name}
              birthday={c.birthday}
              job={c.job}
              gender={c.gender}
              />
            );
          })
        }
      </div>
      
      
    );
  }
}

export default App;
