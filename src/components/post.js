
import '../css/post.css';



import tag from '../images/map-marker.svg';

export default function Post(props){
    return (
        
        <section className="post">
            <img className="image" src={props.coverImg} alt="Fuji" />
            <article className="main-content-container">
                <div>
                    <img src={tag} alt="marker" />
                    <span className="location">{props.location}   </span>
                    
                    <span> <a href="#">View on Google Maps</a></span>
                </div>
                <h3 className="title">{props.title}</h3>
                <div className="date-container">
                    <span>{props.date.dateStart}</span>
                    <span>-</span>
                    <span>{props.date.dateEnd}</span>
                </div>
                <p className="main-text">{props.description}</p>
                    
            </article>
            </section>
                
    )
}

