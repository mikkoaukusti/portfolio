function Footer() {
  return (
    <footer className="flex items-center justify-center pb-8">
      <span className="tracking-tighter text-gray-500 md:text-lg">
        {new Date().getFullYear()} - Mikko Jokipuu
      </span>
    </footer>
  );
}

export default Footer;
