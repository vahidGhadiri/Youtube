import React, {Dispatch} from "react"
import {HomePresentation} from "../../../presentations";
import {InitialStateInterface} from "../../../config/interfaces.config";
import {fetchVideos} from "../../../redux/actions/videos.action";
import {connect} from "react-redux";

class HomeContainer extends React.Component<any, any> {

    componentDidMount() {
        this.props.fetchVideos()
    }

    onDownload = (vahid: string): void => {
        console.log(vahid)
    }

    render() {
        return <HomePresentation data={this.props.videos} onDownload={this.onDownload}/>
    }
}

const mapStateToProps = (state: InitialStateInterface) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)