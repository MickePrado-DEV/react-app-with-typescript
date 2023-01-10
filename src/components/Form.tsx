
import React, { ChangeEvent, FormEvent} from 'react'
import useNewSubForm from '../hooks/useNewSubForm'
import { Sub } from '../types/Sub'


interface FormProps {
  onNewSub: (newSub:Sub) => void
}
  
const Form = ({onNewSub} : FormProps) => {

  //const [inputValues, setInputValues] = useState<FormState['inputValues']>(INITIAL_STATE)

  const [inputValues, dispatch] = useNewSubForm()

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault()
    onNewSub( inputValues)
    dispatch({
      type: 'clear',
    })
  }

  const handleChange = (evt :ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = evt.target
    dispatch({
      type: 'change_value',
      payload: {
        inputName: name,
        inputValue:value,
      }
    })
    // setInputValues({
    //   ...inputValues,
    //   [evt.target.name]: evt.target.value,
    // })
   
  }

  const handlerClear = () => {
    dispatch({
      type: 'clear',
    })
   // setInputValues(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={inputValues.nick} type="text" name='nick' placeholder="nick" />
      <input onChange={handleChange} value={inputValues.subMonths} type="text" name='subMonths' placeholder="subMonths" />
      <textarea onChange={handleChange} value={inputValues.description}  name='description' placeholder="description" />
      <input onChange={handleChange} value={inputValues.avatar} type="text" name='avatar' placeholder="avatar" />
      <button onClick={handlerClear} type="button">clear the form </button>
      <button type="submit">Save new Sub!</button>
          </form> 
    )
}

export default Form