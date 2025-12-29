import React,{useEffect,useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Container,Postform } from '../components'
import service from '../appwrite/config'


function Editpost() {
    const [posts, setposts] = useState([])
    const {slug} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if(slug){
            service.getPost(slug)
            .then((post)=>{
                if(post){
                    setposts(post)
                }
            })
        }
        else{
            navigate("/")
        }
      
    }, [slug,navigate])
    

  return posts ? 
    (<div
     className="py-8">
        <Container>
            <Postform post={posts} />
        </Container>
    </div>)
    : null

}

export default Editpost
