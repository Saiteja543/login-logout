import './index.css'

const Logout = props => {
  const {login} = props
  return (
    <button className="logout-button" type="button" onClick={login}>
      Logout
    </button>
  )
}
export default Logout
