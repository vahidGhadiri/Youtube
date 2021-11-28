import React, {Dispatch} from "react"
import {HomePresentation} from "../../../pages";
import {InitialStateInterface} from "../../../config/interfaces.config";
import {fetchVideos} from "../../../redux/actions/videos.action";
import {connect} from "react-redux";


interface getIdInterface {
    (id: number): void
}
export interface HomeProps {
    onGetId?: getIdInterface;
}

class HomeContainer extends React.Component<any> {
    componentDidMount() {
        this.props.fetchVideos()
    }

    getId: getIdInterface = (id) => console.log(id)

    render() {
        return <HomePresentation onGetId={(id) => this.getId(id)}/>
    }
}



const mapStateToProps = (state: InitialStateInterface) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
