import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';

export default function CommentsForm () {
    const { id } = useParams();
    
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm();
    
    const onSubmit = async (data) => {
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
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

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <textarea
            {...register("comment", {
                required: true})}
                placeholder="write your comment"
            />
            {errors.comment && <p>empty post</p>}
            <button type="submit">Submit</button>
        </form>
    )
}


