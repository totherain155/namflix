import React from "react";
import HomePresenter from "./HomePresenter"


export default class extends React.Component {
    state = {
        nowPlaying : null,
        upcoming : null,
        popular : null,
        error : null,
        isLoading : true

    }

    render() {
        
        const {nowPlaying, upcoming, popular, error, isLoading} = this.state;
        // object destructuring 사용 

        return(
            <HomePresenter 
              nowPlaying = {nowPlaying}
              upcoming = {upcoming}
              popular = {popular}
              error = {error}
              isLoading = {isLoading}
            />
        )
    }
}