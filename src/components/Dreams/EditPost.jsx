import { useForm, Controller } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"

export default function EditPost() {
  const { id } = useParams();
  const [post, setPost] = useState({ 
    date: "",
    title: "", 
    description: "",
    type:"",
    quality:"",
    isPublic:"" 
  });

  const {
    register, 
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(`/api/posts/${id}`, {
          headers: { 
            "Authorization": `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const postData = await response.json();
          setPost(postData);
        } else {
          throw new Error("Error fetching post");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(`/api/posts/${id}`, {
        method: "PUT",
        headers: { 
          "Content-Type": "application/json", 
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(data),
        });
    
        if (response.ok) {
          navigate("/posts")
        } else {
          throw new Error("not updating");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return(
      <>

      <form onSubmit={handleSubmit(onSubmit)}>

      <label className="text-pink">Date:</label>
      <Controller
        name="date"
        control={control}
        defaultValue={post.date}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            selected={value}
            onChange={onChange}
            showIcon
            className="bg-black border-b-2 border-red"
          />
        )}
      />
      {errors.date && <p>Date is required</p>}
      

      <label>Title:</label>
        <input
          {...register("title", {
            required: true})}
          defaultValue={post.title}
          className="bg-black border-b-2 border-red"
        />    
        {errors.title && <p>Title is required</p>}
        

      <label>Description:</label>
        <input
          {...register("description", {
            required: true})}
          defaultValue={post.body}
          className="bg-black border-b-2 border-red"
        />    
        {errors.description && <p>Description is required</p>}
        

      <label className="text-pink">Type</label>

        <Controller
          name="type"
          control={control}
          defaultValue={post.type}
          rules={{ required: true }}
          render={({ field: { onChange, value } }) => (
            <>
              <label>
                <input
                  type="radio"
                  value="normal"
                  checked={value === "normal"}
                  onChange={onChange}
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  value="lucid"
                  checked={value === "lucid"}
                  onChange={onChange}
                />
                Lucid
              </label>
              <label>
                <input
                  type="radio"
                  value="false awakening"
                  checked={value === "false awakening"}
                  onChange={onChange}
                />
                False Awakening
              </label>
              <label>
                <input
                  type="radio"
                  value="nightmare"
                  checked={value === "nightmare"}
                  onChange={onChange}
                />
                Nightmare
              </label>
              {errors.type && <p>Type is required</p>}

          
        <label className="text-pink">Sleep Quality</label>

        <Controller
          name="quality"
          control={control}
          defaultValue={post.quality}
          render={({ field: { onChange, value } }) => (
            <>
              <label>
                <input
                  type="radio"
                  value="good"
                  checked={value === "good"}
                  onChange={onChange}
                />
                Good
              </label>

              <label>
                <input
                  type="radio"
                  value="average"
                  checked={value === "average"}
                  onChange={onChange}
                />
                Average
              </label>

              <label>
                <input
                  type="radio"
                  value="poor"
                  checked={value === "poor"}
                  onChange={onChange}
                />
                Poor
              </label>
              {errors.quality && <p>Sleep Quality is required</p>}
            </>
          )}
        />


      <div>
        <label className="text-pink">Privacy</label>
        <Controller
          name="isPublic"
          control={control}
          defaultValue={post.isPublic}
          render={({ field: { onChange, value } }) => (
            <div>
              <input type="checkbox" checked={value} onChange={onChange} />
              <span>{value ? "Public" : "Private"}</span>
            </div>
          )}
        />
      </div>

      <button type="submit">Submit</button>
            </>
          )}
        />
      </form>
</>
    )
          }