import './App.css'

function App() {
  return (
    <>
       <div className="h-screen w-screen bg-slate-100 flex justify-center items-center ">
     <div className="h-/6 w-3/6   flex flex-col justify-center items-center rounded-md border border-gray-300 bg-white">
     <h1 className="h-full w-full flex  justify-center items-center rounded-t-md color-white text-4xl border text-white border-blue bg-blue-700">SOPHOS</h1>
     <div className="p-10">
     <form action="" className="flex flex-col justify-center items-center gap-4 rounded-md">
      <input type="text"placeholder="Enter your Name" className="border text-center border-blue-950 rounded md"></input>
      <input type="mail" placeholder="Enter your mail"className="border text-center border-blue-950 rounded md"  ></input>
      <input type="password" placeholder="Enter your password" className="border  border-blue-950 text-center rounded md" ></input>
      <button className="h-full w-full rounded md bg-green-500 text-center"type="submit ">Submit</button>
      <a className="text-xs">Create Account</a>
      <a className="text-xs">Forgot Password?</a>
     </form>
     </div>
     </div>
     </div>
    </>
  )
}

export default App
