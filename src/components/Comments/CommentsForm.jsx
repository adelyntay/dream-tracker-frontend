import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

export default function CommentsForm () {
    const { id } = useParams();
    
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();

    const [comments, setComments] = useState([]);
    
    const onSubmit = async (data) => {
        try {
            const token = localStorage.getItem("token")
            const response = await fetch(`/api/posts/${id}/comments`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const getComments = async () => {
        try {
            const response = await fetch(`/api/posts/${id}/comments`);
          if (response.ok) {
            const responseData = await response.json();
            setComments(responseData);
          }
        } catch (error) {
          console.error(error);
        }

      setTimeout(getComments, 5000)
    };

    useEffect(() => {
        getComments();
    },[]);

    return (
        <div className="flex flex-col place-items-center">
        <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
            {...register("comment", {
                required: true})}
                placeholder="write your comment"
                className="textarea textarea-bordered textarea-lg w-full max-w-xs"
            />
            {errors.comment && <p>empty post</p>}
            <br/>
            <div className="text-right">
            <button type="submit" className="btn btn-link text-orange">Submit</button>
            </div>
        </form>

        <ul className="flex-1 w-1/2">
        {comments.map((comment) => (
            <div>
            <li key={comment._id}>{comment.comment}</li>
            <li className="text-right pb-2 text-[#9fc5e8]" key={comment._id}>{comment.user.slice(0, 2) + 
                '*'.repeat(comment.user.length - 4) + 
                comment.user.slice(-2)}</li>
            </div>
        ))}
        </ul>

        </div>
    )
}


