
import './Input.styles.css'

function Input({ children, label = "", ...props }) {
  return (
    <fieldset style={{ marginTop: 4 }}>
      <label>
      {label}
      <input {...props} className='input' />
      </label>
    </fieldset>
  )
}

export default Input