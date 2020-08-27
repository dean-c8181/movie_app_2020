import React from 'react';
import { nominalTypeHack } from 'prop-types';

class Detail extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('/')
        }
    }
    render(){
        const { location } = this.props;
        if(location.state){
            return(
                <div>
                    <h3>{location.state.title}</h3>;
                </div>
            );  
        }else{
            return null;
        }
                      
    }
}



export default Detail;