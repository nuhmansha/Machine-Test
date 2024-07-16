import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import LoadingSpinner from './Loading';

const DetailViewPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading,setLoading] = useState(true)

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false)
      })
      .catch(error => { 
        console.error("There was an error fetching the post!", error);
        setLoading(false)
      });
  }, [id]);

  if(loading){
    return <LoadingSpinner/>
  }


  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded shadow-md p-6">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </div>
  );
};

export default DetailViewPage;
