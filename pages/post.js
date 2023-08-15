import Layout from "../components/Layout";
import { useRouter } from "next/router";
import { posts } from "../profile";

const Post = () =>
{
    const router = useRouter();
    console.log(router.query.title)

    const currenPost = posts.filter( post => post.title === router.query.title)[0]
    console.log(currenPost)
    return (
            <Layout footer={false} title={currenPost.title}>
                <div className="text-center">
                    <img src={currenPost.imageURL} alt=" " className="img-fluid" style={{width: '50%'}}/>
                    <p>{currenPost.content}</p>

                </div>
            </Layout>
    )
}
export default Post