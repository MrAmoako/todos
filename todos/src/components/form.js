import React, {useState} from 'react';

import './styles.css';

const useInputValue = intialValue => {
  const [value, setValue] = useState(intialValue);
 

  return {
  value,
  onChange: e => setValue(e.target.value),
  resetValue: () => setValue("")
  }
}
export default function Form({onSubmit}) {
 const {resetValue, ...text} = useInputValue("");
  return (
    <form onSubmit={e => {
      e.preventDefault();
      onSubmit(text.value)
      resetValue();
    }}>
        <div class="input-group flex-nowrap">
  <span class="input-group-text" id="addon-wrapping">TODO</span>
  <input type="text" class="sticky-top form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping"{...text}/>
   </div>
        <div></div>
    </form>
  )
}
