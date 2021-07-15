import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  height: 140px;
  border-radius: 3px;
  background-size: cover;
  background-position: center center;
  transition: 0.3s linear;
`;

const Rating = styled.span`
  font-size: 10px;
  position: absolute;
  bottom: 3px;
  right: 3px;
  opacity: 0;
  transition: 0.2s linear;
`;

const ImageContainer = styled.div`
  position: relative;
  margin-bottom: 5px;
  &:hover {
    ${Image} {
      opacity: 0.6;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin-bottom: 3px;
`;

const Year = styled.span`
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
`;

const Poster = ({ id, title, year, rating, imgUrl, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imgUrl
              ? `https://image.tmdb.org/t/p/w500/${imgUrl}`
              : require(`../assets/noPosterSmall.png` /*object형태로 반환되기 때문에 뒤에 default를 더 호출한다.*/)
                  .default
          }
        />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 17 ? `${title.substring(0, 17)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  rating: PropTypes.number,
  imgUrl: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
