import { Link } from 'react-router-dom'
import './BoxLink.css'

function BoxLink({img, link, title, description}) {
  return (
    <>
        <Link to={link} className='container'>
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          <img src={img} alt="" />
        </Link>
    </>
  )
}

export default BoxLink
