import Information from './components/Information';
import './App.css'

const peopleList= [
  {
    firstName : "Josh",
    lastName : "Stone",
    age: 23,
    hairColor: "Blonde",
  },
  {
    firstName : "Aidan",
    lastName : "Castellanos",
    age: 22,
    hairColor: "Dirt Blonde",
  },
  {
    firstName : "Joe",
    lastName : "Dixon",
    age: 22,
    hairColor: "Brown",
  },
  {
    firstName : "Blake",
    lastName : "Koeble",
    age: 23,
    hairColor: "Dirt Blonde",
  }
];

function App() {

  return (
    <div className='App'>
      {peopleList.map((person, index) => (
        <Information key={index} firstName={person.firstName} lastName={person.lastName} age={person.age} hairColor={person.hairColor}/>
      ))}
    </div>
  )
}

export default App
