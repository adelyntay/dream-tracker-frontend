import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [isPublic, setIsPublic] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
        const token = localStorage.getItem("token")
        const response = await fetch("/api/posts/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`,
          },
          body: JSON.stringify({ 
            date: startDate,
            title: title,
            body: description,
            isPublic: isPublic
         })
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          navigate("/list");
        } else {
          throw new Error("Create post failed");
        }
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <>
      <form onSubmit={handleSubmit}>
      <div>
      <label>Date
      <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)}/>
      </label>
      </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
        </div>
        <div>
          <label>Privacy</label>
          <input type="checkbox" checked={isPublic} onChange={(event) => setIsPublic(event.target.checked)} />
          <span>{isPublic ? "Public" : "Private"}</span>
        </div>
        <div>
          <label>Wake Up Feeling Like:</label>
          <Picker data={data} categories={["people"]}/>
        </div>
        <button type="submit">Create Post</button>
      </form>
    </>
  );
}
