import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap';

   
    function RenderDish({dish}){
        return(
            <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        );
    }

   function  RenderComments({comments}){
        const commentsL = comments.map(comment =>{
            return(
                <div key={comment.id} className="col-12 col-md-5 mt-1">
                    <p>--{comment.author}, {new Intl.DateTimeFormat('en-US',{year: 'numeric', month: 'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
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


const DishDetail = (props)=>{
    if(props.dish !=null)
    return(
        <div className="row" >
            <div className="col-12 col-md-5 mt-1">
                <RenderDish dish={props.dish} />
            </div>
            <RenderComments comments={props.dish.comments} />
        </div>
    )
    else 
    return(<div>
        
    </div>)
}
    
      
    

export default DishDetail;