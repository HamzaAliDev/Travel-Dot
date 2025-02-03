import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuttleVan, faHotel, faUtensils, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Button, Tag } from 'antd';
import { WifiOutlined } from '@ant-design/icons';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import { collection, doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from '../../../config/firebase';
import { useAuthContext } from '../../../context/AuthContext';

const initialState = { name: '', email: '', travelers: 1, date: '', specialRequests: '', };
const Bookings = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useAuthContext();
  const [destination, setDestination] = useState(null);
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Retrieve the destination details passed via state
    if (location.state && location.state.destination) {
      setDestination(location.state.destination);
    } else {
      // If no destination is passed, redirect back to the destinations page
      navigate('/destinations');
    }
  }, [location, navigate]);


  // Mapping of facilities to their respective icons
  const facilityIcons = {
    'Hotel': <FontAwesomeIcon icon={faHotel} />,
    'Food': <FontAwesomeIcon icon={faUtensils} />,
    'Shuttle': <FontAwesomeIcon icon={faShuttleVan} />,
    'Wi-Fi': <WifiOutlined />,
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleBookingSubmit = async (e) => {
    if (!isAuthenticated) {
      window.toastify('Please login to book', "error")
      return navigate('/auth/login');
    }
    e.preventDefault();
    // Handle the booking submission logic here
    let userId = null;
    if (user && user.id) {
      userId = user.id;
    }
    const data = {
      userId,
      destination: destination.title,
      ...state,
      status: 'pending',
      totalPrice: destination.price * state.travelers, // Calculate total price
      createdAt: serverTimestamp(),
    };
    // console.log("data", data);
    setLoading(true);
    try {
      const newDocRef = await doc(collection(firestore, "bookings"));

      // Get the generated document ID
      const documentId = newDocRef.id;

      // Set the document data with the document ID included
      await setDoc(newDocRef, {
        ...data,
        id: documentId,  // Include the ID in the document data
      });

      window.toastify('Booking add Successfully', "success");
    } catch (e) {
      console.error("Error adding document: ", e);
      window.toastify('Something went wrong while booking', "error");
    } finally {
      setState(initialState);
      setLoading(false);
    }
  };

  if (!destination) {
    return null; // or a loading spinner
  }

  // Calculate total price based on the number of travelers
  const totalPrice = destination.price * state.travelers;

  return (
    <>
      <Header title="Booking Details" description="Complete your booking for the selected destination" />
      <main>
        <div className="container">
          <div className="row mt-5">
            <div className="col d-flex justify-content-center align-items-center">
              <h2 className=''>Booking Details</h2>
              <div className='line-card ms-5' style={{ width: 45, }}></div>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-lg-12 ">
              <div className="card rounded-3 p-4">
                <div className="row">
                  {/* Destination Details */}
                  <div className="col-md-6">
                    <div className="card-body">
                      <div className='d-flex justify-content-between'>
                        <div className='d-flex align-items-center'>
                          <h5 className="card-text fw-semibold">{destination.title}</h5>
                          <div className='line-card ms-4'></div>
                        </div>
                        <h5 className="card-text text-primary">.Dot</h5>
                      </div>
                      <div className='destination-description mt-3'>
                        <p className='mb-0 pb-0 fw-semibold'>Places to Visit</p>
                        <p className='text-muted'>
                          Explore iconic landmarks such as {destination.places.join(', ')}. Enjoy a memorable experience with our eco-friendly travel packages.
                        </p>
                      </div>
                      <div>
                        <p className='fw-semibold'>Complete Package</p>
                        <div className='d-flex flex-column flex-wrap  my-1'>
                          <Tag className='mb-2 px-2'><FontAwesomeIcon icon={faCalendarAlt} /> {destination.days} Days</Tag>
                          {destination.facilities.map((facility, index) => (
                            <Tag key={index} className='mb-2 px-2'>
                              {facilityIcons[facility]} {facility}
                            </Tag>
                          ))}
                        </div>
                      </div>
                      <div className="d-flex align-items-center justify-content-between mt-3">
                        <div>
                          <p className='destination-price ms-2 mb-0'>
                            <span className='text-muted'>Price per person:</span> ${destination.price}
                          </p>
                          <p className='destination-price ms-2 mb-0'>
                            <span className='text-muted'>Total price:</span> ${totalPrice}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Booking Form */}
                  <div className="col-md-6">
                    <h4 className="mb-4">Booking Form</h4>
                    <form onSubmit={handleBookingSubmit}>
                      <div className="mb-3">
                        <label htmlFor="name" className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          value={state.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email Address</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={state.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="travelers" className="form-label">Number of Travelers</label>
                        <input
                          type="number"
                          className="form-control"
                          id="travelers"
                          name="travelers"
                          value={state.travelers}
                          onChange={handleInputChange}
                          min="1"
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="date" className="form-label">Travel Date</label>
                        <input
                          type="date"
                          className="form-control"
                          id="date"
                          name="date"
                          value={state.date}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label htmlFor="specialRequests" className="form-label">Special Requests</label>
                        <textarea
                          className="form-control"
                          id="specialRequests"
                          name="specialRequests"
                          value={state.specialRequests}
                          onChange={handleInputChange}
                          rows="3"
                        ></textarea>
                      </div>
                      <Button htmlType="submit" className="btn btn-primary auth-btn w-100" loading={loading} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                      }}>
                        Confirm Booking
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Bookings;