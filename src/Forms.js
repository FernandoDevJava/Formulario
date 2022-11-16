import { useState } from 'react';

function Forms() {
  const [formValues, setFormValues] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const isCheckbox = type === 'checkbox';

    /* para as caixas de checkbox */
    const data = formValues[name] || {};
      if (isCheckbox) {
        data[value] = checked;
      }

    const newValue = (isCheckbox) ? data : value;
    console.log('*** handleInputChange', data);
    setFormValues({ ...formValues, [name]: newValue })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    console.log('*** handleSubmit', data);
  };

  console.log('*** formValues', formValues);
    return (
        <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder="name" onChange={handleInputChange} value={formValues.name || ''} />
        <input type="text" name='email' placeholder="email" onChange={handleInputChange} value={formValues.email || ''} />

        <div>
        <textarea name="bio" placeholder="Bio" onChange={handleInputChange} value={formValues.bio || ''}></textarea>
        </div>

        <select name="language" >
        <option value="java">Java</option>
        <option value="Javascript">JavaScript</option>
        <option value="Python">Python</option>
        <option value="php">PHP</option>
        <option value="ruby">Ruby</option>
      </select>

        <div>
        <button type='submit'>Enviar</button>
        </div>      

      </form>
    )
}

export default Forms