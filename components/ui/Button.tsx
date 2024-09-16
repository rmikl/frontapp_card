export const Button = ({ children, variant, className, ...props }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${className} ${
        variant === "ghost" ? "bg-transparent hover:bg-gray-300" : "bg-gray-800 text-white"
      }`}
      {...props}
    >
      {children}
    </button>
  );
};