import logo from './logo.svg';
import Random from "./components/Random";
import Tag from "./components/Tag";
import './App.css';

function App() {
  return (
    <div className='w-full min-h-screen bg-blue-300 flex flex-col items-center relative'>
<h1 className='text-center bg-slate-200 mt-3 p-1 border-rose-300 border-2 rounded-lg w-11/12 font-bold text-2xl '>Random gifs Generator</h1>
<div className='flex flex-col items-center w-full mt-4 gap-10'>

<Random/>
<Tag />

</div>


    </div>
  );
}

export default App;
