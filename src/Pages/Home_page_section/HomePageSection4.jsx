import React from 'react'
import './HomePageSection4.css';
import male from '../images/male.png'
import pharma from '../images/hospital.png';
import money from '../images/money.png';
import clock from '../images/clock.png';

function HomePageSection4() {
  return (
    <div className="ChooseUS_section">
        <h1 className='chooseUS_header'>Why Choose Us?</h1>

        <div className='choose_card_section'>
                <div className='choose_card1'>
                    <div>
                        <img src={male} alt='' className='card-img'></img>
                    </div>
                    <div>
                        <h1 className='card_header'>Happy Patients</h1>
                        <p>Our number one priority is customer satisfaction. We provide premium and primary health care to everyone. Our courteous and amiable nursing staff are specifically trained to assist and help the customer in whatever way possible.</p>
                    </div>

                </div>

                <div className='choose_card1'>
                    <div>
                        <img src={pharma} alt='' className='card-img'></img>
                    </div>
                    <div>
                        <h1 className='card_header'>Pharmacy</h1>
                        <p>We have pharmacies called the “Family Pharma” opened right next to our clinics, for customer convenience. Our pharmacies are well stocked with the latest medicines and health products. Our pharmacies are operational 365 days a year, from 7:30 AM to 10.00 PM everyday, including Sundays and Government Holidays.</p>
                    </div>

                </div>

                <div className='choose_card1'>
                    <div>
                        <img src={money} alt='' className='card-img'></img>
                    </div>
                    <div>
                        <h1 className='card_header'>Affordable Healthcare</h1>
                        <p>Our mission is to make good primary health care affordable and available to everyone. All our services are at affordable prices, and we run offers and discounts every month to promote our services at even lower prices.</p>
                    </div>

                </div>


                <div className='choose_card1'>
                    <div>
                        <img src={clock} alt='' className='card-img'></img>
                    </div>
                    <div>
                        <h1 className='card_header'>Working all 7 days</h1>
                        <p>Our clinics are open throughout the week and on Government holidays, as we are always putting the health of people as the number one priority. Our clinics are open from 7:30 AM to 8:30 PM everyday.</p>
                    </div>

                </div>
        </div>
    </div>
  )
}

export default HomePageSection4