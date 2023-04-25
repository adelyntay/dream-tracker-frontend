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
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
            {...register("comment", {
                required: true})}
                placeholder="write your comment"
                className="text-black"
            />
            {errors.comment && <p>empty post</p>}
            <button type="submit">Submit</button>
        </form>
        <ul>
        {comments.map((comment) => (
            <div>
            <li key={comment._id}>{comment.comment}</li>
            <li key={comment._id}>{comment.user.slice(0, 2) + 
                '*'.repeat(comment.user.length - 4) + 
                comment.user.slice(-2)}</li>
            </div>
        ))}
        </ul>
        </div>
    )
}


