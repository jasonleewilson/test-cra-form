// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className='App'>
      <main className='p-8'>
        <form name='contact' method='POST' data-netlify='true'>
          <input type='hidden' name='contact' value='contact' />
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p className='p-4'>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button className='bg-red' type='submit'>
              Send
            </button>
          </p>
        </form>
      </main>
    </div>
  );
}

export default App;
