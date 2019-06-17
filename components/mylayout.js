import Header from './header'
// import DynaHeader from '../components/dynamicheader.js'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = props => (
  <div style={layoutStyle}>
    <Header />
    {/* <DynaHeader json="My dynamic header" /> */}
    {props.children}
  </div>
)

export default Layout