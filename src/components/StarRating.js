import "./StarRating.css"



const StarRating = ({rating}) => { 
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
            let className = "star" 
            if(index<rating){
                className += ' on';
            } else{
                className += ' off';
            }
          index += 1;
          return (
           
              <span className={className} key={index}>&#9733;</span>
            
          );
        })}
      </div>
    );
  };

  export default StarRating