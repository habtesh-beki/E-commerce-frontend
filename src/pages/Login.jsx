

export default function Login(){

    return (
      <div className="flex h-screen w-full justify-center wx-auto items-center">
        <button className="absolute top-4 left-4 p-2 border bg-color_btn">Back</button>
        <div className="flex flex-col bg-color_primary border h-3/6 w-1/5 p-2 border-2">
          <div>
            <h2 className=" text-2xl text-color_btn ">Well come to BW shoes</h2>
          </div>
           <div className="mt-12 flex flex-col">
            <span>Email</span>
             <input className="h-10 w-full mb-2 outline-0" type="email" />
             <span>Password</span>
             <input className="h-10 w-full outline-0" type="password" />
           </div>
           <div className="flex flex-col mt-10">
               <button className="border p-2 bg-color_btn">Login</button>
               <button className="border p-2 bg-color_btn">create new account</button>
           </div>
        </div>
      </div>
       
    )
}