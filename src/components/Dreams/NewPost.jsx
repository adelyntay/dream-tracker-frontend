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
  const [type, setType] = useState("");
  const [quality, setQuality] = useState(""); 


  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  event.preventDefault();

    try {
        const token = localStorage.getItem("token")
        const response = await fetch("/api/posts/create", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
          },
          body: JSON.stringify({ 
            date: startDate,
            title: title,
            body: description,
            type: type,
            quality: quality,
            isPublic: isPublic,
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
        <label>Type</label>
        <div>
          <label>
            <input
              type="radio"
              name="type"
              value="normal"
              checked={type === "normal"}
              onChange={(event) => setType(event.target.value)}
            />
            Normal
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="lucid"
              checked={type === "lucid"}
              onChange={(event) => setType(event.target.value)}
            />
            Lucid
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="false awakening"
              checked={type === "false awakening"}
              onChange={(event) => setType(event.target.value)}
            />
            False Awakening
          </label>
          <label>
            <input
              type="radio"
              name="type"
              value="nightmare"
              checked={type === "nightmare"}
              onChange={(event) => setType(event.target.value)}
            />
            Nightmare
          </label>
        </div>
      </div>
      <div>
      <label>Sleep Quality</label>
      <div>
        <label>
          <input
            type="radio"
            name="quality"
            value="good"
            checked={quality === "good"}
            onChange={(event) => setQuality(event.target.value)}
          />
          Good
        </label>
        <label>
          <input
            type="radio"
            name="quality"
            value="average"
            checked={quality === "average"}
            onChange={(event) => setQuality(event.target.value)}
          />
          Average
        </label>
        <label>
          <input
            type="radio"
            name="quality"
            value="poor"
            checked={quality === "poor"}
            onChange={(event) => setQuality(event.target.value)}
          />
          Poor
        </label>
      </div>
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
