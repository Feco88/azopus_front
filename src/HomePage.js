import React from "react";
import axios from 'axios';

export default class ArtDatas extends React.Component{
    state = {
        arts: []
    }

componentDidMount(){
    axios.get(`https://gist.githubusercontent.com/calvez/56bec47cb9c97d9999574adc65ef5368/raw/51f01cb2a160748d87dd40eae7d3785272a87355/all.json`)
    .then(res => {
        const arts = res.data;
        this.setState({arts});
    })
}

render() {
    return (
        <ul>
            {
             this.state.arts.map(art => <li key={art.id}>{art.name}</li>
             )
            }
        </ul>
    )
}
}