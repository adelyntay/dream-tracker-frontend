import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

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
          navigate("/posts");
        } else {
          throw new Error("Create post failed");
        }
      } catch (error) {
        console.error(error);
      }
    };


  return (
    <>
      <div className="card-body">
      
      <form onSubmit={handleSubmit}>

      <div className="form-control">
      <label>Date
      <DatePicker 
        showIcon selected={startDate} 
        onChange={(date) => setStartDate(date)}
        className="text-black"/>
      </label>
      </div>
      <br />
      
      <div className="form-control">
        <label>Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="bg-black border-b-2 border-red py-2"
          required
        />
        </div>
 
      <br />
        <div className="form-control">
        <label>Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          className="bg-black border-b-2 border-red py-2"
          required
        />
        </div>
    <br/>
      <div className="form-control">
        <label>Type </label>
          <label>
            <input
              type="radio"
              name="type"
              value="Normal"
              checked={type === "Normal"}
              onChange={(event) => setType(event.target.value)} 
              className="radio-sm"
              required
            />
            Normal 
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="Lucid"
              checked={type === "Lucid"}
              onChange={(event) => setType(event.target.value)}
              className="radio-sm"
              required
            />
            Lucid
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="Recurring"
              checked={type === "Recurring"}
              onChange={(event) => setType(event.target.value)}
              className="radio-sm"
              required
            />
            Recurring
          </label>

          <label>
            <input
              type="radio"
              name="type"
              value="Nightmare"
              checked={type === "Nightmare"}
              onChange={(event) => setType(event.target.value)}
              className="radio-sm"
              required
            />
            Nightmare
          </label>
      </div>
   
    <br />
      <div className="form-control">
        <label>Sleep Quality</label>
         
        <label>
          <input
            type="radio"
            name="quality"
            value="Good"
            checked={quality === "Good"}
            onChange={(event) => setQuality(event.target.value)}
            className="radio-sm"
            required
          />
          Good
        </label>

        <label>
          <input
            type="radio"
            name="quality"
            value="Average"
            checked={quality === "Average"}
            onChange={(event) => setQuality(event.target.value)}
            className="radio-sm"
            required
          />
          Average
        </label>

        <label>
          <input
            type="radio"
            name="quality"
            value="Poor"
            checked={quality === "Poor"}
            onChange={(event) => setQuality(event.target.value)}
            className="radio-sm"
            required
          />
          Poor
        </label>
      </div>

      <div className="form-control">
      <label>Privacy 
        <input 
          type="checkbox" 
          checked={isPublic} 
          onChange={(event) => setIsPublic(event.target.checked)} 
          className="checkbox-sm m-2"
          />{isPublic ? "Public" : "Private"}
          </label>
      </div>

      <div className="form-control">
      <button type="submit" className="rounded-md py-2 px-8 mt-2 bg-orange">Create Post</button>
      </div>
      </form>
      </div>
     
    </>
  );
}
