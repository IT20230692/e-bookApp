import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Add = () => {
  const [book, setBook] = useState({
    title: '',
    desc: '',
    price: null,
    cover: '',
  });

const navigate = useNavigate()

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async e =>{
    e.preventDefault();
    try{
      await axios.post("http://localhost:8800/books", book)
      navigate("/")
    }catch(err){
console.log(err);
    }
  }
  console.log(book);
  return (
    <div className='form'>
      <h1> Add New Books</h1>
      <input
        type='text'
        placeholder='Title'
        onChange={handleChange}
        name='title'
      />
      <input
        type='text'
        placeholder='Description'
        onChange={handleChange}
        name='desc'
      />
      <input
        type='number'
        placeholder='Price'
        onChange={handleChange}
        name='price'
      />
      <input
        type='file'
        placeholder='Cover Photo'
        onChange={handleChange}
        name='cover'
      />
      <button className='formButton' onClick={handleClick}>Add </button>
    </div>
  );
};

export default Add;
