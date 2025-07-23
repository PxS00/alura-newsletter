const Form = ({ onSubmit }) => {
  const safeSubmit = event => {
    event.preventDefault()
    event.stopPropagation()
    const name = event.target[0].value
    const email = event.target[1].value
    onSubmit({ name, email })
  }
  return (
    <form onSubmit={safeSubmit}>
      <input type="text" className="alura-input" required placeholder="Insira seu nome..." />
      <input type="email" className="alura-input" required placeholder="Insira seu e-mail..." />
      <button type="submit" className="alura-button">
        Seguir
      </button>
    </form>
  )
}

export default Form
