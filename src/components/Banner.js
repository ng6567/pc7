import "./Banner.css"

function Banner(props){
    return (
        <div className="Banner">
            <img className='Banner-img' src={props.image} alt= 'Banner'/>
            {props.title && <h1 className="Banner-title">{props.title}</h1>}
        </div>
    );
}
export default Banner