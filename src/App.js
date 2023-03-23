import { useState } from "react"
import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import Logo from './components/Logo';

function App() {
  const [form1, setform1] = useState({ email: '', name: '', number: '', home: '', referral: '' })

  const handleform1 = () => {
    console.log(form1);
    setform1({ "email": "", "home": "", "name": "", "number": "", "referral": "" });
  }

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <h3>Join our waiting list</h3>
      </header>
      <div className='App-container'>
        <Input
          name="name"
          placeholder="Full Name"
          type="Full Name"
          value={form1.name}
          onChange={e => setform1(v => ({ ...v, name: e.target.value }))}
        />
        <Input
          name="email"
          placeholder="Email address"
          type="Email address"
          value={form1.email}
          onChange={e => setform1(v => ({ ...v, email: e.target.value }))}
        />
        <Input
          name="number"
          placeholder="Phone Number"
          type="Phone Number"
          value={form1.number}
          onChange={e => setform1(v => ({ ...v, number: e.target.value }))}
        />
        <Input
          name="home"
          placeholder="Home Address"
          type="Home Address"
          value={form1.home}
          onChange={e => setform1(v => ({ ...v, home: e.target.value }))}
        />
        <Input
          name="referral"
          placeholder="Referral"
          type="Referral"
          value={form1.referral}
          onChange={e => setform1(v => ({ ...v, referral: e.target.value }))}
        />
        <Button onClick={handleform1}>Submit</Button>
      </div>
    </div>
  );
}

export default App;
