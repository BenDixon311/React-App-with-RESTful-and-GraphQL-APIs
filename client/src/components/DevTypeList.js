import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Query, Mutation } from 'react-apollo';
import gql from 'graphql-tag';

const cardStyle= {
    maxWidth: 345,
    maxHeight: 500
}

const cardMediaStyle = {
    height: 260
}

const rootStyle = {
    flexGrow: 1,
    padding: 20
}



class DevTypeList extends Component {



render() {


    let QUERY = gql`
    query {
        projectType(projectType: ${this.props.match.params.type}){
            title
            devtype
            id
            description
            solo
            imgurl
        }
      }
    `
 

   

    return (
        <Query query={QUERY}>
            {({ loading, error, data }) => {
             if (loading) return <div>Fetching</div>;
            if (error) return <div>Error</div>;

      return (
            <div style = {rootStyle}>
            <h1>{this.props.match.params.type} Projects</h1>
            <Grid container spacing = {40}>
            {data.projectType.map(project => (
                
                <Grid item sm={12} md={3}>
                    <Card style={cardStyle}>
                    <CardActionArea>
                        <CardMedia
                        style={cardMediaStyle}
                        image={project.imgurl}
                        title={project.title}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4" component="h2">
                                {project.title}
                            </Typography>
                            <Typography component="h4">
                                {project.description}
                            </Typography>
                            <Typography component="h5">
                                {project.solo}
                            </Typography>

                        </CardContent>

                    </CardActionArea>
                    <CardActions>
                        <Button 
                        size="small" 
                        color="primary"
                        href={'/ProjectDetail/' + project.id}
                        >
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
            ))}
</Grid>
            </div>
      )
            }
        }
        </Query>
        
    )
}


}

export default DevTypeList;