import React from 'react';
import './PostStory.css';
import { useState } from 'react';
import axios from 'axios'

const PostStory = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [textData, setTextData] = useState('');
  
    const handleFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
    };
  
    const handleTextChange = (event) => {
      setTextData(event.target.value);
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      if (!selectedFile) {
        alert('Please select a file!');
        return;
      }
      if (!textData) {
        alert('Please share your story!')
        return;
      }
  
      const formData = new FormData();
      formData.append('file', selectedFile);
      formData.append('textData', textData);
  
      try {
        const response = await axios.post('http://localhost:3000/uploads', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error uploading file and text:', error);
      }
    };
  
    return (
      <div id="poststory">
        <h2 class='tt'>File and Text Upload</h2>
        <form onSubmit={handleSubmit}>
          <div class="lb">
            <label>Select a file:</label>
            <br></br>
            <input type="file" onChange={handleFileChange} />
          </div>
          <div class="lb">
            <label style={{"color" : "black"}}>Enter text:</label>
            <input id="iptext" type="text" value={textData} onChange={handleTextChange} />
          </div>
          <button id="asb" type="submit">Upload</button>
        </form>
      </div>
    );
  };
  
  export default PostStory;