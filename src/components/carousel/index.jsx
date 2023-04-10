import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.css";
export default function carousel({movie}) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4 ,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={styles.carousel}>
      <h3 className={styles.new}>最新推薦</h3>
      <Slider {...settings}>
      {movie.map(movie=> (
          <div className={styles.box}
          key={movie.id}
          >
            <img 
              className={styles.image}
            src={movie.image} />
          </div>
        ))}
        
      </Slider>
    </div>
  );
}


