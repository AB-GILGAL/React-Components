import logo from './logo.svg';
import './App.css';
import {Navbar} from "./components/Navbar";
import {Paragraph} from "./components/Paragraph";
import {Input} from "./components/Input";
import { MySelf } from './components/MySelf';
import {Counter} from './components/Counter';
import Container from './components/container/Container';


function App() {
  return (
    <div
    className="App">
      <Navbar></Navbar>
      <Paragraph />
      <Input />
      <MySelf name = "Abraham" age = {20} gender = "male" />
      <MySelf name = "Yaa baby" age = {27} gender = "female" />
      <MySelf name = "Boateng" age = {23} gender = "male" />
      <MySelf name = "Talata" age = {32} gender = "female" />
      <MySelf name = "Dorcas" age = {20} gender = "female" />
      <Counter/>
      <Container/>
      {/* <Card/> */}
    </div>
  );
}

export default App;
