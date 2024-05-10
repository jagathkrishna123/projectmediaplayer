import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage(){
    return(
    <div className='container mb-5 mt-5'>
        <Row className='d-flex align-center justify-content-evenly'>
        <Col>
        <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
        <p style={{textAlign:"justify"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Consequuntur reprehenderit deserunt sed ipsam numquam 
             explicabo facilis impedit inventore culpa. Voluptate molestias
              ratione architecto deserunt omnis voluptas pariatur, voluptatum 
              quod voluptatem!sit amet consectetur adipisicing elit. Consequuntur
               reprehenderit deserunt sed ipsam numquam explicabo facilis impedit
                inventore culpa. Voluptate molestias ratione architecto deserunt 
                omnis voluptas pariatur, voluptatum quod
        </p>
        <Link to={'/home'}>
        <button className='btn btn-warning mt-5 mb-5'>Get Started <i class="fa-solid fa-arrow-right ms-2"></i></button>
        </Link>
        
        </Col>
        <Col>
            <img className='ms-5'src="https://i.pinimg.com/originals/0a/86/71/0a8671a21422eecab8189a2941bfb132.gif" alt="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" style={{height:"300px"}} />
        </Col>
      </Row>
      <div className='container'>
            <h3>Features</h3>
            <div className='d-flex align-center justify-content-evenly mt-5 mb-5'>
            <Card style={{ width: '18rem',height:'30rem' }}>
      <Card.Img variant="top" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVqcnl2aWhya3IyNjA5M3lwN3dtYmI0cTV5YTJ6bDA4enI2Zjd1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2SpKdrBxH8jp9mhy/giphy.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'25rem' }}>
      <Card.Img variant="top" src="https://media.tenor.com/BOu8ryjIR38AAAAM/sound-wave-wave.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem',height:'30rem' }}>
      <Card.Img variant="top" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXVqcnl2aWhya3IyNjA5M3lwN3dtYmI0cTV5YTJ6bDA4enI2Zjd1dyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2SpKdrBxH8jp9mhy/giphy.gif" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
            </div>
      </div>
      <div className="container mb-5 mt-5 border border-2 border-secondary rounded p-5">
      <Row className='d-flex align-center justify-content-evenly'>
        <div className='col-md-6'>
            <h3 className='text-warning'>Simple and Powerfull</h3>
            <p><span className='fw-bolder fs-5'>Play Everything:</span>
            <span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Aut doloribus laborum eligendi iste beatae quo. Natus aspernatur,
                ut blanditiis ea numquam reprehenderit nam doloribus eaque
                 quisquam iste consectetur voluptate tenetur.
            </span></p>
            <p><span className='fw-bolder fs-5'>Play Everything:</span>
            <span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Aut doloribus laborum eligendi iste beatae quo. Natus aspernatur,
                ut blanditiis ea numquam reprehenderit nam doloribus eaque
                 quisquam iste consectetur voluptate tenetur.
            </span></p>
            <p><span className='fw-bolder fs-5'>Play Everything:</span>
            <span>  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
               Aut doloribus laborum eligendi iste beatae quo. Natus aspernatur,
                ut blanditiis ea numquam reprehenderit nam doloribus eaque
                 quisquam iste consectetur voluptate tenetur.
            </span></p>
        </div>
        <div className='col-md-6'>
        <iframe width="100%" height="450" src="https://www.youtube.com/embed/lV1OOlGwExM?si=pSe9uEjQOc2aqzxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </Row>
      </div>
    </div>
    )
}
export default Landingpage;
//https://media.tenor.com/lhlDEs5fNNEAAAAM/music-beat.gif