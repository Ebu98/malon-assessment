import React, { useState } from "react";
import './User.css'

export const User = ({ title, body,userId, id, onEdit, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = () => {
    setIsEdit(!isEdit);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  const handleOnEditSubmit = (event) => {
    event.preventDefault();
    onEdit(id, event.target.title.value, event.target.body.value, event.target.userId.value);
    setIsEdit(!isEdit);
  };

  return (
    <div className="edit-form-container">
      {isEdit ? (
        <form onSubmit={handleOnEditSubmit}>
          <input placeholder="Title" name="title" defaultValue={title} />
          <input placeholder="Body" name="body" defaultValue={body} />
          <input placeholder="useId" name="userid" defaultValue={userId} />
          <button onSubmit={handleOnEditSubmit}>Save</button>
        </form>
      ) : (
        <div className="user">
          <span className="user-title">{title}</span>
          <span className="user-body">{body}</span>
          <span className="user-userid">{userId}</span>
          <div className="button-container">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};





// import React, { useState } from 'react'
// import './form.css'

// const Form = () => {

//     const [input, setInput] =useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password: ''

//     })
//     fetch('https://jsonplaceholder.typicode.com/posts/1')  
//     .then((response) => response.json())  
//     .then((json) => console.log(json));  
   

//     const editMode = false;

//     const handleChange = (e) => {
//         const value = e.target.value;
//         // const name = e.target.name;
//         setInput(value)
        
//         console.log(input)
//     }
//     const handleSubmit = ()=> {
//         console.log('submited')
//     }  
//     return (
//     <div className="form-wrapper">
//         <h1>{editMode ? "Update your ticket" : "Create a ticket"}</h1>
//         <form onSubmit={handleSubmit}>
//         <section>
//             <input
//             type="text"
//             name="firstName"
//             placeholder="firstname"
//             value={input.firstName}
//             onChange={handleChange}
//             />
//             <input
//             type="text"
//             name="firstName"
//             placeholder="firstname"
//             value={input.lastName}
//             onChange={handleChange}
//             />
//             <input
//             type="text"
//             name="firstName"
//             placeholder="firstname"
//             value={input.email}
//             onChange={handleChange}
//             />
//             <input
//             type="text"
//             name="firstName"
//             placeholder="firstname"
//             value={input.password}
//             onChange={handleChange}
//             />
//         </section>
//         </form>

//     </div>
//   )
// }

// export default Form;