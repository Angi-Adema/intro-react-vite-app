export function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          {/* We can replace the "a" tag with the "link" tag and instead of using an href, we us a "to" property. "to" property works exactly like an href */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
