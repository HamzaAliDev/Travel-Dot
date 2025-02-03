import React, {useState, useEffect, createContext, useContext} from 'react'
import { getDocs, collection } from 'firebase/firestore';
import { firestore } from '../config/firebase';


const Destination = createContext();

export default function DestinationContext({ children }) {
    const [destinations, setDestinations] = useState([])

    const fetchDestinations = async () => {
        try {
          const querySnapshot = await getDocs(collection(firestore, "Destinations"));
          const items = [];
          querySnapshot.forEach((doc) => {
            items.push({ ...doc.data() });
          });
          setDestinations(items);
        } catch (error) {
          console.error("Error fetching Destinations ", error);
          window.toastify("Error fetching Destinations ", error);
        }
      };
    
    
      useEffect(() => {
        fetchDestinations();
      }, []);
  return (
    <Destination.Provider value={{ destinations, setDestinations }}>
        {children}
    </Destination.Provider>
  )
}

export const useDestinationContext = () => useContext(Destination);