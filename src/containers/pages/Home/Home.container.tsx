import React, {Dispatch} from "react"
import {HomePresentation} from "../../../pages";
import {InitialStateInterface} from "../../../config/interfaces.config";
import {fetchVideos} from "../../../redux/actions/videos.action";
import {connect} from "react-redux";

class HomeContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.fetchVideos()
    }

    onDownload = (id: number): void => {
        console.log(id)
    }


    render() {
        return <HomePresentation onDownload={(id) => this.onDownload(id)}/>
    }
}

const mapStateToProps = (state: InitialStateInterface) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)