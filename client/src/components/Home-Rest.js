import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { classExpression } from '@babel/types';

const styles = {
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  };



const proxyurl = "https://cors-anywhere.herokuapp.com/";

class HomeRest extends Component{
    state = {
        playerData: []
    }

    
   

    componentDidMount() {
        axios.get(proxyurl + 'https://restful-crud-node-server.herokuapp.com/')
            .then(res => {
                const playerData = res.data;
                this.setState({ playerData });
            })
    }


    render() {
        return (
            <div>
                { this.state.playerData.map(player =>
                    <Card>
                    <CardActionArea>
                        <CardMedia
                         
                          image={player.imgurl}
                          title={player.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {player.name}
                            </Typography>
                            <Typography component="h4">
                                {player.team}
                            </Typography>
                            <Typography component="h5">
                                {player.position}
                            </Typography>

                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>


                )}
            </div>
        )
    }
}



export default HomeRest;