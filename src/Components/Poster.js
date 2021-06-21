import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Container = styled.div`
  font-size: 12px;
`;

const Image = styled.div`
  background-image: ${(props) => props.bgUrl()};
`;

const Rating = styled.span`
  font-size: 10px;
`;

const ImageContainer = styled.div``;

const Title = styled.span`
  display: blcok;
`;

const Year = styled.span``;

const Poster = ({ id, title, year, rating, imgUrl, isMovie = false }) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imgUrl} />
        <Rating>
          <span role="img" aria-label="rating">
            ⭐
          </span>{" "}
          {rating} / 10
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 18 ? `${title.substring(0, 18)}...` : title}
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
