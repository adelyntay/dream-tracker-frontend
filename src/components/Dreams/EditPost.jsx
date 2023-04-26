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
      <div className="card-body">

      <form onSubmit={handleSubmit(onSubmit)}>

      <div className="form-control">
      <label>Date:
      <Controller
        name="date"
        control={control}
        rules={{ required: true }}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            defaultValue={post.date}
            selected={value}
            onChange={onChange}
            showIcon
            className="text-black"
          />
        )}
      />
      {errors.date && <p className="text-pink">Date is required</p>}
      </label>
      </div>
      <br/>

      <div className="form-control">
      <label>Title:</label>
        <input
          {...register("title", {
            required: true})}
          defaultValue={post.title}
          className="bg-black border-b-2 border-red py-2"
        />    
        {errors.title && <p className="text-pink">Title is required</p>}
       </div>   
       <br />

       <div className="form-control">
       <label>Description:</label>
        <input
          {...register("description", {
            required: true})}
          defaultValue={post.body}
          className="bg-black border-b-2 border-red py-2"
        />    
        {errors.description && <p className="text-pink">Description is required</p>}
       </div>
       <br/>

       <div className="form-control">
       <label>Type</label>

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
                  value="Normal"
                  checked={value === "Normal"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Normal
              </label>
              <label>
                <input
                  type="radio"
                  value="Lucid"
                  checked={value === "Lucid"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Lucid
              </label>
              <label>
                <input
                  type="radio"
                  value="Recurring"
                  checked={value === "Recurring"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Recurring
              </label>
              <label>
                <input
                  type="radio"
                  value="Nightmare"
                  checked={value === "Nightmare"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Nightmare
                
              </label>
              
              {errors.type && <p className="text-pink">Type is required</p>}
              </>
              )}
              />
        </div>
      
        <div className="form-control">
        <label>Sleep Quality</label>

        <Controller
          name="quality"
          control={control}
          defaultValue={post.quality}
          rules={{required: true}}
          render={({ field: { onChange, value } }) => (
            <>
              <label>
                <input
                  type="radio"
                  value="Good"
                  checked={value === "Good"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Good
              </label>

              <label>
                <input
                  type="radio"
                  value="Average"
                  checked={value === "Average"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Average
              </label>

              <label>
                <input
                  type="radio"
                  value="Poor"
                  checked={value === "Poor"}
                  onChange={onChange}
                  className="radio-sm"
                />
                Poor
              </label>
              {errors.quality && <p className="text-pink">Sleep Quality is required</p>}
              
              </>
              
          )}
        />
        </div> 

      <div className="form-control">
        <label>Privacy
        <Controller
          name="isPublic"
          control={control}
          defaultValue={post.isPublic}
          render={({ field: { onChange, value } }) => (
            <span>
              <input 
                type="checkbox" 
                checked={value} 
                onChange={onChange} 
                className="checkbox-sm m-2"
                />
              {value ? "Public" : "Private"}
            </span>
          )}
        />
        </label>
      </div>
      
      <div className="form-control">
      <button type="submit" className="rounded-md py-2 px-8 mt-2 bg-orange">Save Changes</button>
      </div>
      </form>
       </div>
     
</>
    )
          }