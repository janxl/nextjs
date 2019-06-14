import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Link prefetch href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link prefetch href="/dynamic?id=f012151c-9ed8-495b-9db0-6d3b35696a95">
      <a style={linkStyle}>About</a>
    </Link>
    <Link prefetch href="/dynamic?id=f7182c56-7553-43b0-af98-dd5b04a1b912">
      <a style={linkStyle}>Home</a>
    </Link>
  </div>
)

export default Header