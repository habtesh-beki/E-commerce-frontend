

export function Signup(){
    return (
        <div className="flex h-screen w-full justify-center wx-auto items-center">
          <div className="flex flex-col bg-color_primary border h-4/6 w-3/12 p-2 border-2 rounded-xl">
            <div className="mb-6">
              <span className="text-2xl  text-color_btn">Well come to BW Shoes</span>
            </div>
            <div className="flex flex-col mb-4">
              <span>First Name</span>
              <input className="mb-3 h-10 outline-0" type="text" />
              <span>Last Name</span>
              <input className="mb-3 h-10 outline-0" type="text" />
              <span>Email</span>
              <input className="mb-3 h-10 outline-0" type="Email" />
              <span>Password</span>
              <input className="mb-3 h-10 outline-0" type="password" />
            </div>
            <div>
               <button className="bg-color_btn px-4 py-2">Sign up</button>
            </div> 
          </div>
        </div>
    )
}