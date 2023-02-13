import { Component } from "react";

class LigneListe extends Component {
    constructor (props){
        
        super(props)
        
        this.state = {
            showData: false,
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e){

        const titre = this.props.titre
        const vide = []
        this.setState({
            showData: !(this.state.showData),
        })
    }

    render(){

        const liste =[]
        const data = this.props.donnees
        data.forEach((dat) => {
            liste.push(<li key={dat}>{dat}</li>)
        })
        return <div className="col-md-12">
        <div className="row">
            <div onClick={this.handleChange} style={{backgroundColor: "#7430f9"}} className="col-md-12">
                {this.props.titre}
            </div>
            <div className="col-md-12">
                <ul>
                    {this.state.showData ? liste : []}
                </ul>
            </div>
        </div>
    </div>
    }
    
}

export default LigneListe