import Button from "../button";

const Navbar = () => {
  return (
    <nav className="border-4 border-red-600 flex justify-between items-center p-4">
      <h1 className="font-bold text-2xl">Porfolio</h1>
      <div className="space-x-8">
        <a href="">About me</a>
        <Button
          bgColor="bg-transparent"
          textColor="slate-50"
          label="Download CV"
        />
      </div>
    </nav>
  );
};

export default Navbar;
