import './home.css';
import React from 'react';
import iPhone_14_Pro_Max from './images/iPhone_14_Pro_Max.png';
import z_fold from './images/z_fold.jpeg';
import iphone_12 from './images/iphone_12_PNG22.png';
import homeChair from './images/chair.jpg'
import aiImage from './images/AiImage.jpg';
import { Button } from '@mui/material';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Helmet } from 'react-helmet-async';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import card_details from './Components/details';
import card_samsung from './Components/samsung';
import { Icon } from '@iconify/react';
import { useState } from 'react';


export default function Home() {

    const [heart, setHeart] = useState(false);
    function handleHeart(){
        setHeart(!heart)
    }
    const cryptoText = "Simply put, cryptocurrencies (also known as digital currencies, cryptos, virtual assets, or digital assets) are digital forms of currencies. They can be used to pay for goods and services just like conventional currencies. Like how the traditional forms of currencies can be traded against one another on the forex, cryptocurrencies can also be traded against specific pairs on specialized platforms called cryptocurrency exchanges. The difference is that unlike conventional currencies such as the U.S. dollar, cryptocurrencies are often not controlled by a single entity. They are also secured using complex cryptography coupled with a new form of online public ledger called a blockchain. It is distributed to anyone and everyone interested in having a copy. Watch the short video below to understand how blockchain works before we proceed further.";
    const subText1 = " The (authentic) National Chairman of Labour Party, Barr. Julius Abure, has stated that the party is not interested in any government of unity as being canvassed by members of the ruling party. Mr Abure stated this while playing host to Akpabio, some Senators-elect and other members of the APC who came to solicit the support of the Labour Party in order to emerge as the next senate president of the country in the upcoming 10th National Assembly. In the meeting, after stating why they came on the courtesy call, Akpabio made allusion to the pleas of the president-elect for opposition to sheath their sword and support his incoming government to which the National Chairman responded and said that such discussion was “off limit” as the Labour Party is not interested in any such arrangement.";
    const subText2 = " The (authentic) National Chairman of Labour Party, Barr. Julius Abure, has stated that the party is not interested in any government of unity as being canvassed by members of the ruling party. Mr Abure stated this while playing host to Akpabio, some Senators-elect and other members of the APC who came to solicit the support of the Labour Party in order to emerge as the next senate president of the country in the upcoming 10th National Assembly. In the meeting, after stating why they came on the courtesy call, Akpabio made allusion to the pleas of the president-elect for opposition to sheath their sword and support his incoming government to which the National Chairman responded and said that such discussion was “off limit” as the Labour Party is not interested in any such arrangement.";
    const subText3 = " The (authentic) National Chairman of Labour Party, Barr. Julius Abure, has stated that the party is not interested in any government of unity as being canvassed by members of the ruling party. Mr Abure stated this while playing host to Akpabio, some Senators-elect and other members of the APC who came to solicit the support of the Labour Party in order to emerge as the next senate president of the country in the upcoming 10th National Assembly. In the meeting, after stating why they came on the courtesy call, Akpabio made allusion to the pleas of the president-elect for opposition to sheath their sword and support his incoming government to which the National Chairman responded and said that such discussion was “off limit” as the Labour Party is not interested in any such arrangement.";
    return (
      <main className='container'>
        
        <Helmet>
            <title> Crypto Market Place </title>
            <meta name='Crypto Market Place' content='Buy with your coin'/>
        </Helmet>

        <Header/>
    <div className='topImageHome'>
        <LazyLoadImage img src={iphone_12} className="imageTop"/>
         <h1 className="topImageText"> CRYPTO MARKET PLACE! </h1>
    </div>

        <div className="cryptoText"> 
            <div className="cryptoText0">
                <h1> What is cryptocurrency Market place?</h1>
                <p className="cryptoText1" contentEditable="true" spellCheck="true"> {cryptoText} </p>
            </div>
            <div>
                <LazyLoadImage src={homeChair} className="cryptoImage"/>
            </div>
        </div>

        <div className='card-collection'>
        {
            card_details.map((item) =>(
                <div className='card_categories' key={item}>
                    {(item.title === "iPhone 14 Pro Max") ? <LazyLoadImage src={iPhone_14_Pro_Max} className="iPhone_14_image"/>
                                                          : <LazyLoadImage src={iPhone_14_Pro_Max} className="iPhone_14_image"/>                    
                    }
                    <div className='card_text'>
                        <p className="card_title"> <b> {item.title}</b></p>
                        <p className='card_price'> {item.Price} </p>
                        <p className='card_status'> {item.Status}</p>
                        <p className='card_star'> {item.Star}</p>
                        <Button variant="outlined" className="buyNow"> Buy Now </Button>
                        
                    <div className="likeButton">
                            {!heart? <div className="heart">
                            <Icon icon="akar-icons:heart" className="heart" onClick={handleHeart}/>
                            </div> : <div className="heartFilled">
                            <Icon icon="ant-design:heart-filled" className="heartFilled" onClick={handleHeart}/>
                            </div> }
                    </div> 
                        
                    </div>
                </div>
            ))
        }
        </div>

        <div className="middleText"> 
            <div className="subText1"> {subText1}</div>
            <div className="subText1"> {subText2}</div>
            <div className="subText1"> {subText3}</div>
        </div>

        <div className="samsung_card">
            {
                card_samsung.map((item) =>(
                    <div className="samsung_categories">
                        {(item.title === "Samsung z_fold") ? <LazyLoadImage src={z_fold} className="samsung_fold"/>
                                                        : <LazyLoadImage src={z_fold} className="samsung_fold"/>
                }
        <div className="samsung_text">
                <p className="samsung_detail"> {item.title} </p>
                <p className="samsung_detail"> {item.Price} </p>
                <Button variant="success" onClick="alert ('Button was click')" className="samsung_buy_now"> Buy Now </Button>
        </div>
                
         </div>
                ))
            }
        </div>

        <Footer/>
    </main>  
  )
}
