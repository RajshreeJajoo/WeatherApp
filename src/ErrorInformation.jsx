import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";

const ErrorInformation=()=>
{
  
    return(
        <>
        <Container>
                <Card style={{marginTop:"40px",backgroundColor:"rgb(248, 153, 153)"}}>

        {/* <Card style={{marginTop:"40px",maxWidth:"500px",marginLeft:"500px",backgroundColor:"rgb(248, 153, 153)"}}> */}
        <div className="errorclass">
            <h1>404 Error </h1>
            <h1 > Data Not found</h1>
            </div>
        </Card>
        </Container>
        </>
    )

}
export default ErrorInformation;