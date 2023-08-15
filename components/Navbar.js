import Link from "next/link";
const Navbar = () => 
(
  <nav  className="navbar navbar-expand-lg bg-dark  navbar-dark">

  <div  className="container">
    <Link href="/" legacyBehavior>
    <a  className="navbar-brand">Simple porfolio</a>
    </Link>
    <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span  className="navbar-toggler-icon"></span>
    </button>
    <div  className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div  className="navbar-nav ml-auto">
       
        <Link href="/blog " legacyBehavior>
        <a  className="nav-link" >Blog</a>
        </Link> 
        <Link href="/github" legacyBehavior >
        <a  className="nav-link">Github</a>
        </Link>
       
      </div>
    </div>
  </div>

</nav>
);
export default Navbar;