import React from 'react'
import { Helmet } from 'react-helmet';
import ShareThis from '../ShareThis';

const Fdownload = () => {
  return (
    <div>
    <Helmet>
    <meta name="robots" content="noindex,nofollow"></meta>
    </Helmet>
    <h1>Click to DOWNLOAD NOW LINK BELOW</h1>
    <div><p></p></div>
   
    <button type="button" className="btn btn-outline-warning">
<a className='button' href="https://sblongvu.com/dl?op=download_orig&id=snbs47eau794&mode=n&hash=20988657-207-244-1670978031-af2429016048a1f9cd3892f5d2262d13" target={"_blamk"} id="download_link" > <strong>Download Now</strong></a></button>
<div><p></p></div>
<h2>Thank you for Dowloading and Enjoy. </h2>
<h2>Please Share the Link.</h2>
<img  src="against-the-ice-2022.webp" className="card-img-top" style={{height:"20rem"}} alt="..." />
<nav aria-label="Page navigation example" >
  
<ul className="pagination justify-content-center" >
  <li className="page-item enable">
    <a className="page-link" href="Againsttheice" tabindex="-1" aria-disabled="true"><button type="button" class="btn btn-danger btn-lg">Back</button></a>
  </li>
 
</ul>
</nav>

<ShareThis/>  
    </div>
  )
}

export default Fdownload
