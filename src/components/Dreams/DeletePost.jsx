import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function DeleteButton({ id, delPost }) {
  const [deleting, setDeleting] = useState(false);
  const navigate = useNavigate()

  const handleDelete = async () => {
    setDeleting(true);
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers:{
            "Content-Type" :"application/json",
        }
      });
      await response.json();
        delPost(id);
        navigate("/posts")

    } catch (error) {
      console.error(error);
    } finally {
      setDeleting(false);
    }
  };

  return (
    <button onClick={handleDelete} disabled={deleting} className="btn border-none bg-orange text-black hover:text-white">
      {deleting ? 'Deleting...' : 'Delete Post'}
    </button>
  );
}
