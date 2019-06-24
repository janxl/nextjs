export default (props) => {
  const {header, text} = props

  return <div>
    <div>{header}</div>
    <div>{text}</div>
  </div>
}