import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`py-2 px-3 rounded-md  text-[17px] duration-300 font-medium hover:bg-slate-800 hover:text-white ${
          match ? 'bg-slate-800 text-white' : ' '
        }`}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}
export default CustomLink