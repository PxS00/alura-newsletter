import ToggleTheme from '../ToggleTheme/ToggleTheme'

const Header = ({ user }) => {
  return (
    <div className="alura-header">
      <span className="text-gray-100">Olá, {user?.name || 'Usuário'}</span>
      <h1>Alura Newsletter</h1>
      <ToggleTheme />
    </div>
  )
}

export default Header
