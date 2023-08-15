import Link from "next/link";
import Layout from "../components/Layout"
import { skills, experiences, proyects} from "../profile";
console.log(skills);
console.log(experiences);
const Index = () => (
<Layout>
{/** header card */}
<header className="row">
    <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
            <div className="row"> 
                <div className="col-md-3">
                    <img src="/imagen1.jpeg" alt=""  className="img-fluid img-thumbnail rounded"  width="200" height="200" />
                 </div>
                 <div className="col-md-8">
                    <h1>Noelia F. Mamani E.</h1>
                    <h3>FullStack Developer</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae atque ullam perferendis harum, nisi porro voluptate,
                        iste consequuntur enim reprehenderit architecto consectetur cum?
                        Totam ad molestias natus illum illo officia.</p>
                        <a href="/hireme">Hire me</a>

                 </div>
            </div>

        </div>

    </div>

</header>
{/**Segunda seccion */}

<div className="row py-2">
    <div className="col-md-4">
        <div className="card bg-light">
            <div className="card-body">
                <h1>Skills</h1>
                {skills.map(({ skill, percentage }, i) => (
                         <div className="py-3" key={i}>
                                <h5>{skill}</h5>
                                <div className="progress ">
                                 <div
                                    className="progress-bar"
                                    role="progressbar"
                                    style={{ width: `${percentage}%` }}
                                    aria-valuenow="50"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    ></div>
                                </div>
                       </div>
                    ))
                }
                
            </div>
        </div>
    </div>
    <div className="col-md-8">
        <div className="card bg-light"> 
            <div className="card-body">
                <h1>Experiencia</h1>
                <ul>
                   {
                    experiences.map(({title, description, from, to}, index) =>(
                        <li key={index}>
                        <h3>{title}</h3>
                        <h5>{from}-{to}</h5>
                        <p>{description}</p>
                    </li>
                    ))
                   }
                </ul>
                <Link href="/experiences" legacyBehavior>
                  <a className="btn btn-ligght">Know More</a>
                </Link>
              
            </div>

        </div>
    </div>
</div>

{/** Porfolio */}
<div className="row">
    <div className="col-md-12">

        <div className="card card-body bg-dark">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center text-light">Portfolio</h1>

                </div>
              {
                proyects.map(({name, description, image}, i) => (
                    <div className="col-md-4 p-2" key={i}>
                    <div className="card h-100" >
                        <div className="overflow">
                             <img src={`/${image}`} alt="" className="card-img-top"/>
                        </div>
                        <div className="card-body">
                            <h3>{name}</h3>
                            <p>{description}</p>
                            <a href="#!">Know More</a>
                        </div>
                    </div>
                </div>

                ))
              }
            </div>
            
        <div className="text-center mt-4">
            <Link href="/portfolio"legacyBehavior>
            <a className="btn btn-outline-light">More proyects</a>
            </Link>
        </div>
   
        </div>
   
    
    </div>


</div>

</Layout>
)
export default Index;