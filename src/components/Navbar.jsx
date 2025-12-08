import Menu from "./Menu.jsx";

const Navbar = () => {
  return (
    <header className="logo">
      <nav className="max-w-7xl h-[72px] mx-auto flex justify-between items-center px-2 md:px-0">
        <div>
          <img src="/brand_logo.png" alt="logo" width={76} height={42} />
        </div>

        <Menu />

        <button className="bg-red-600 py-1 px-4 h-8 text-white font-semibold rounded">
          login
        </button>
      </nav>
    </header>
  );
};
export default Navbar;
