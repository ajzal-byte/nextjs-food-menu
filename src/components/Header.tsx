const Header: React.FC = () => (
  <div className="relative h-64 bg-gradient-to-r from-purple-600 to-blue-600 overflow-hidden">
    <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
    <div className="relative h-full flex items-center justify-center">
      <h1 className="text-5xl font-bold text-white tracking-tight">Our Menu</h1>
    </div>
  </div>
);

export default Header;
