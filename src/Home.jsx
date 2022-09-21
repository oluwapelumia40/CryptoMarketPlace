import './home.css';
import React from 'react';
import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';
import Footer from './Components/Footer';
import Header from './Components/Header';

export default function Home() {
    const info = [
        {
            id: 1,
            name: "Simon Peter",
            gender: "Male",
            language: "Javascript",
            religion: "Christian",
            teamName: "TeamA"
        },
        {
            id: 2,
            name: "Mary Lazarus",
            gender: "Female",
            language: "C#",
            religion: "Christian",
            teamName: "TeamB"
        },
        {
            id: 3,
            name: "Peter Simone",
            gender: "Male",
            language: "PHP",
            religion: "Christian",
            teamName: "TeamC"
        },
        {
            id: 4,
            name: "Moses Hannah",
            gender: "Female",
            language: "Python",
            religion: "Christian",
            teamName: "TeamD"
        },
        {
            id: 5,
            name: "Quadri Hazzan",
            gender: "Male",
            language: "Front-End",
            religion: "Muslim",
            teamName: "TeamA"
        },
        {
            id: 6,
            name: "Flames Segun",
            gender: "Male",
            language: "Full Stack",
            religion: "Christian",
            teamName: "TeamB" 
        },
        {
            id: 7,
            name: "JCares Johnson",
            gender: "Male",
            language: "Software Engineer",
            religion: "Christian",
            teamName: "TeamC"
        },
        {
            id: 8,
            name: "Peju Adewumi",
            gender: "Female",
            language: "HTML",
            religion: "Christian",
            teamName: "TeamD"
        },
        {
            id: 9,
            name: "Beggar julius",
            gender: "Male",
            language: "Developer",
            religion: "Christian",
            teamName: "TeamA"
        },
    ];
  return (
      <main className='container'>
        <Header/>
          <div>
            <select className='card-selection'>
              <option value="TeamA"> Team A</option>
              <option value="TeamB"> Team B</option>
              <option value="TeamC"> Team C</option>
              <option value="TeamD"> Team D</option>
              </select>
          </div>

        <div className='card-collection'>
        {
            info.map((employee) =>(
                <div key={employee}>
                   {(employee.gender === "Male") ? <img src={maleProfile} className="card-img-top"/>
                                                 : <img src={femaleProfile} className="card-img-top"/>}

                  <div className="card-body"> 
                      <p className="card-title"> <b> Full Name: </b> {employee.name} </p>
                      <p className='card-gender'> Gender: {employee.gender}</p>
                      <p className='card-language'> Language: {employee.language} </p>
                      <p className='card-religion'> Religion: {employee.religion} </p>
                  </div>
                </div>
            ))
        }
        </div>
    </main>  
  )
}
