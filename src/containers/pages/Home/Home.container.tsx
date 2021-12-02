import React, {Dispatch} from "react"
import {HomePresentation} from "../../../pages";
import {InitialStateInterface} from "../../../config/interfaces.config";
import {fetchVideos} from "../../../redux/actions/videos.action";
import {connect} from "react-redux";


interface OnGetIdInterface {
    (id: number): void,
}

export interface HomeProps {
    onGetId?: OnGetIdInterface;
}

class HomeContainer extends React.Component<any> {
    componentDidMount() {
        this.props.fetchVideos()
    }

    onGetId = (id: number) => {
        console.log(`vahid-${id}`)
    }

    render() {
        return <HomePresentation onGetId={(id) => this.onGetId(id)}/>
    }
}



const mapStateToProps = (state: InitialStateInterface) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
