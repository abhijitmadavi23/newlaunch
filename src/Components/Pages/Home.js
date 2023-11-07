import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



function Home() {
  return (
    <div>
        <div className='transparent' >
            <Navbar bg="transparent fixed" data-bs-theme="light">
            <Container>
            <Navbar.Brand href="#home"><img src='../../Images/logo.jpg'/></Navbar.Brand>
            <Nav className="me-auto ms-5 ">
                <Nav.Link href="#topProducts">Top Products</Nav.Link>
                <Nav.Link href="#newLaunches">New Launches</Nav.Link>
                <Nav.Link href="#showpByCatogery">Showp By Catogery</Nav.Link>
                <Nav.Link href="#sale">Sale</Nav.Link>
                <Nav.Link href="#trackOrder">Track Order</Nav.Link>
            </Nav>
            <div>
                <i className="fa-regular fa-user p-3 fs-5 cursor-pointer"></i>
                <i className="fa-solid fa-magnifying-glass p-3 fs-5 cursor-pointer"></i>
                
                <i className="fa-solid fa-bag-shopping p-3 fs-5 cursor-pointer "></i>
            </div>

            
            </Container>
           </Navbar>
        </div>

        <div>
            <Carousel>
                <Carousel.Item>
                    <img src='../../Images/1.jpg '  alt='1'/>
                    <Carousel.Caption>
                
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src='../../Images/2.jpg'  alt='2'/>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                <img src='../../Images/3.jpg' alt='3'/>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>

        <div className='m-3 p-5'>
            <h1><i>New On The Shelf</i></h1>
            <button className='rounded-pill bg-white border p-2 m-3  '>View All</button>
        </div>

        <div className='d-flex justify-content-between border-0'>
          <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p1.jpg" />
                    <Card.Body>
                        <Card.Title>Jemima Black Flats</Card.Title>
                        <Card.Text>
                        ₹ 2,199
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p2.jpg" />
                    <Card.Body>
                        <Card.Title>Madelyn Gold Block Heels</Card.Title>
                        <Card.Text>
                        ₹ 2,199
                        </Card.Text>
                      
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p3.jpg" />
                    <Card.Body>
                        <Card.Title>Adalynn Cream Block Heels</Card.Title>
                        <Card.Text>
                        ₹ 2,199
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p4.jpg" />
                    <Card.Body>
                        <Card.Title>Lucia Cream Kitten Heels</Card.Title>
                        <Card.Text>
                        ₹ 2,199
                        </Card.Text>
                    
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '17rem' }} className='border-0 cursor-pointer'>
                    <Card.Img variant="top" src="../../Images/products/p5.jpg"  />
                    <Card.Body>
                        <Card.Title>Angelica Multicolor Wedges</Card.Title>
                        <Card.Text>
                        ₹ 2,299
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

            </div>
            
        </div>

        <div className='d-flex justify-content-center ' style={{backgroundColor:"orange"}}>
                <div  className='d-flex justify-contetnt-start p-4 ms-5 h-75 '>
                    <img src='../../Images/b1.jpg' alt='' />
                </div>
                <div className='m-5 w-2 text-center pt-5'>
                    <h2>Be Boldy Comfortable</h2>
                    <h5>FASHION L❤VES COMFORT</h5>
                    <p>Created as an ode to all the women who are the first ones to hustle their way up and the last ones to leave the dance floor.</p>
                    <p>Founded by a fashion lover with a crazy passion for design who's an eternal sucker for comfort.</p>
                    <button className='rounded-pill bg-dark text-white p-2 border-0'>Read ME</button>
                </div>


        </div>

        <div className='m-3 p-5'>
            <h1><i>Selling Hot</i></h1>
            <button className='rounded-pill bg-white border p-2 m-3  '>View All</button>
        </div>

        <div className='d-flex justify-content-between border-0'>
          <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p6.jpg" />
                    <Card.Body>
                        <Card.Title>Inaya Maroon Wedge Heels</Card.Title>
                        <Card.Text>
                            <strike> ₹ 2,299 </strike><span className='ms-2'>₹ 1,699</span>
                            <p className='text-success'>26% OFF</p>
                       
                        
                        </Card.Text>
                        
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p7.jpg" />
                    <Card.Body>
                        <Card.Title>Samaira Maroon Wedge Heels</Card.Title>
                        <Card.Text>
                        <strike>₹ 2,499</strike><span className='ms-2'>₹ 1,699</span>
                        <p className='text-success'>32% OFF</p>

                        </Card.Text>
                      
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p8.jpg" />
                    <Card.Body>
                        <Card.Title>Margot Beige Block Heels</Card.Title>
                        <Card.Text>
                        <strike>₹ 2,699</strike><span className='ms-2'>₹ 1,899</span>
                        <p  className='text-success'>29% OFF</p>


                        </Card.Text>
                        
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '18rem' }} className='border-0'>
                    <Card.Img variant="top" src="../../Images/products/p9.jpg" />
                    <Card.Body>
                        <Card.Title>Inaya Grey Wedge Heels</Card.Title>
                        <Card.Text>
                        <strike>₹ 2,299</strike><span className='ms-2'>₹ 1,599</span>
                        <p  className='text-success'>30% OFF</p>

  
                        </Card.Text>
                    
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '17rem' }} className='border-0 cursor-pointer'>
                    <Card.Img variant="top" src="../../Images/products/p10.jpg"  />
                    <Card.Body>
                        <Card.Title>Natalia Black Block Heels</Card.Title>
                        <Card.Text>
                        <strike>₹ 2,499</strike><span className='ms-2'>₹ 1,499</span>
                        <p  className='text-success'>40% OFF</p>

   
                        </Card.Text>
                       
                    </Card.Body>
                </Card>

            </div>
            
        </div>

        <div className='m-3 p-5'>
            <h1><i>Shope By catogery</i></h1>
           
        </div>

        <div className='d-flex justify-content-between border-0 '>
          <div>
            <Card style={{ width: '15rem' }} className='border-0 col-2'>
                    <Card.Img variant="top" src="../../Images/products/p11.jpg" />
                    <Card.Body>
                        <Card.Title>Flates</Card.Title>
                      
                    </Card.Body>
                    
                   
            </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0  col-2'>
                    <Card.Img variant="top" src="../../Images/products/p12.jpg" />
                    <Card.Body>
                        <Card.Title>Block Heels</Card.Title>
                       

                        
                      
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0 col-2'>
                    <Card.Img variant="top" src="../../Images/products/p13.jpg" />
                    <Card.Body>
                        <Card.Title>Wedge Heels</Card.Title>
                        
                        
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0 col-2'>
                    <Card.Img variant="top" src="../../Images/products/p14.jpg" />
                    <Card.Body>
                        <Card.Title> Kitten Heel</Card.Title>
                      
  
                    
                    
                    </Card.Body>
                </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0 cursor-pointer col-2'>
                    <Card.Img variant="top" src="../../Images/products/p15.jpg"  />
                    <Card.Body>
                        <Card.Title> Loafers</Card.Title>
                        

   
                       
                       
                    </Card.Body>
                </Card>

            </div>
            <div>
            <Card style={{ width: '12rem' }} className='border-0 cursor-pointer'>
                    <Card.Img variant="top" src="../../Images/products/p16.jpg"  />
                    <Card.Body>
                        <Card.Title> All Collection</Card.Title>
                        

   
                       
                       
                    </Card.Body>
                </Card>
            </div>
            
        </div>


        <div className='d-flex justify-content-center ' style={{backgroundColor:"orange"}}>

            <div className='m-5 w-2 text-center pt-5 '>
                        <h2>People Of Monrow</h2>             
                        <p>As a Millennial brand we believe influencer marketing is going to have a golden era of a decade. We're at the beginning of it and are very fond of it. We love to share our trendy women shoes collection.</p>
                        <button className='rounded-pill bg-dark text-white p-2 border-0'>Visit us On Instagram</button>
            </div>
            <div  className='d-flex justify-contetnt-end p-4 ms-5 h-50 '>
                <img src='../../Images/b2.jpg' alt='' />
            </div>
            

        </div>

        <div className='mt-5 p-5 ' style={{backgroundColor:"#EFEBEB"}}> 
            <h1><i>Join Our shoe tribe</i></h1>
            <p>Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <input type='email' placeholder='Enter Your Email'></input>
            <button className=' bg-dark text-white     '>Subscribe</button>
        </div>

        <div className='m-3 p-5'>
            <h1><i>#monrowtribe</i></h1>
           
        </div>


        <div className='d-flex justify-content-between border-0  '>
          <div>
            <Card style={{ width: '15rem' }} className='border-0 col-2'>
                    <Card.Img variant="top" src="../../Images/m1.jpg" />
                  
                    
                   
            </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0  col-2'>
                    <Card.Img variant="top" src="../../Images/m2.jpg" />
                  
                </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0 col-2'>
                    <Card.Img variant="top" src="../../Images/m3.jpg" />
                   
                </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0 col-2'>
                    <Card.Img variant="top" src="../../Images/m4.jpg" />
                 
                </Card>

            </div>

            <div>
            <Card style={{ width: '15rem' }} className='border-0 cursor-pointer col-2'>
                    <Card.Img variant="top" src="../../Images/m5.jpg"  />
                    
                </Card>

            </div>
            <div>
            <Card style={{ width: '12rem' }} className='border-0 cursor-pointer'>
                    <Card.Img variant="top" src="../../Images/m6.jpg"  />
                   
                </Card>
            </div>
            
        </div>

        <div className='p-5 mt-5' style={{backgroundColor:"#EFEBEB"}}>
            <div className='d-flex justify-content-center'>
            <div>
                <h5>INFORMATION</h5>
                <p>About Us</p>
                <p>Careers</p>
                <p>Blogs</p>
                <p>Monrow Celeb Club</p>
                <p>Terms Of Use & Privacy Policy</p>

            </div>
            <div className='ps-5'>
            <h5> CUSTOMER SUPPORT</h5>
                <p>Track Order</p>
                <p>Return & Exchange</p>
                <p>Contact Us</p>
                <p>Return & Exchange Policy</p>
                <p>FAQ</p>
                <p>Store Locator</p>
            </div>

            </div>
            
            <p>© 2023 Monrow Shoes , Welcome to the Monrow world where all our shoes are designed exclusively fusing fashion with comfort. Our shoes, made with vegan friendly materials, foamy footbeds and scientifically balanced heel points are made for hustling all day, everyday! While you live your best life, leave your feet to us as we promise to be the wind beneath your wings,we mean the wind beneath your feet with fab shoes! :)</p>
            <p>Trudel Fashions Pvt Ltd</p>

        </div>


      
    </div>
  )
}

export default Home
