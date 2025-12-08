const Menu = () => {
  return (
    <div>
      <ul className="hidden md:flex items-center gap-4 font-semibold text-[16px]">
        <li className="hover:text-red-500 duration-200 ease-in">
          <a href="#">MENU</a>
        </li>
        <li className="hover:text-red-500 duration-200 ease-in">
          <a href="#">LOCATION</a>
        </li>
        <li className="hover:text-red-500 duration-200 ease-in">
          <a href="#">ABOUT</a>
        </li>
        <li className="hover:text-red-500 duration-200 ease-in">
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
};
export default Menu;
