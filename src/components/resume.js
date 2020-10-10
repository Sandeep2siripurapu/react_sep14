import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Career from './career';


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="https://www.shareicon.net/download/2015/09/18/103157_man_512x512.png"
                alt="avatar"
                style={{height: '200px'}}/>
            </div>

            <h2 style={{paddingTop: '2em'}} align="center">S.Sandeep kumar</h2>
            <h4 >Address</h4><hr align="center" style={{width:'50%',borderTop:'3px solid green'}}/>
            <p>Vijayawada</p>
            <h5>Phone</h5><hr align="center" style={{width:'50%',borderTop:'3px solid green'}}/>
            <p>(+91) 123 456 7891</p>
            <h5>Email</h5><hr align="center" style={{width:'50%',borderTop:'3px solid green'}}/>
            <p>sandeep2siripurapu@gmail.com</p>
             </Cell>
             
          <Cell className="resume-right-col" col={8}>
<h2>Career Objective</h2>
     <Career
       career="to become a software engineer"
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
            <h2>Education</h2>


            <Education
              startYear={2016}
              endYear={2019}
              schoolName="K.B.N Degree College"
              />

               <Education
                 startYear={2014}
                 endYear={2016}
                 schoolName="K.B.N Jr college"
                 />
                 <Education
                 startYear={2009}
                 endYear={2014}
                 schoolName="S.K.P.V.V Hindu High School"
                 />
             <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="HTML"
                progress={100}
                />
                <Skills
                  skill="PHP"
                  progress={80}
                  />
                  <Skills
                    skill="CSS"
                    progress={50}
                    />
                    <Skills
                      skill="JAVASCRIPt"
                      progress={25}
                      />
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
