import React, {Dispatch} from "react"
import {HomePresentation} from "../../../pages";
import {InitialStateInterface} from "../../../config/interfaces.config";
import {fetchVideos} from "../../../redux/actions/videos.action";
import {connect} from "react-redux";


interface getIdInterface {
    (id: number): void
}

interface getValueInterface {
    (value: string): void
}

export interface HomeProps {
    onGetId: getIdInterface;
    onGetValue: getValueInterface
}


class HomeContainer extends React.Component<any> {
    componentDidMount() {
        this.props.fetchVideos()
    }

    getId: getIdInterface = (id) => console.log(id)
    getValue: getValueInterface = (value) => console.log(value)

    render() {
        return <HomePresentation
            onGetId={(id) => this.getId(id)}
            onGetValue={(value => this.getValue(value))}/>
    }
}



const mapStateToProps = (state: InitialStateInterface) => ({
    videos: state.videos
})

const mapDispatchToProps = (dispatch: Dispatch<any>) => ({
    fetchVideos: () => dispatch(fetchVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer)
