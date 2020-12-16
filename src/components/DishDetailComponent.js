import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
class DishDetail extends Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }

    renderDish(dish){
        return(
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        )
    }

    renderComments(comments){
        const commentsL = comments.map(comment =>{
            return(
                <div key={comment.id} className="col-12 col-md-5 mt-1">
                    <p>--{comment.author}, {comment.date}</p>
                    <p>{comment.comment}</p>
                </div>
            )
        })
        if(comments != null){
            return(

                <div className="list-unstyled">
                    <h4>Comments</h4>
                    {commentsL}
                </div>
            )
        }
        else{
            return(
                <div></div>
            )
        }

    }



    render(){
        return(
            <div className="row" >
                <div className="col-12 col-md-5 mt-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {this.renderComments(this.props.dish.comments)}
            </div>
        )
    }

}
export default DishDetail;