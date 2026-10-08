function Header (){ 
    return(
    <div className="absolute w-full px-8 py-2 bg-gradient-to-t from-black flex justify-between items-center">
        <img className="w-45"
         src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-05-14/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="Logo" />
         <div>
            <nav>
                <ul className="flex gap-4 text-white items-center">
                    <li><a className="border border-white px-4 py-2 rounded-md text-white inline-block hover:scale-110 transition duration-300"
                         href="/"> English</a></li>
                     <li><a className="border border-white bg-red-600 px-4 py-2 rounded-md text-white inline-block  hover:scale-110 transition duration-300" href="/">Sign In</a></li>
                </ul>
            </nav>
         </div>
    </div>
    );
};
export default Header;