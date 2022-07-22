import { useState } from 'react';
  import styles from "../Login&Signup/Login.module.css";
 import LoginSignup from "./LoginSignup.png"
//  import { Stack,Box,Button} from '@chakra-ui/react';
  
  export default function Login() {
  
    const [toggleType, setToggleType] = useState(false);
    
    
    
        return (
          <>
          <div style={{display:"flex"}}>
             <div className='first_image'>
                <div className={styles.sidenav}>
              <div style={{ height: "125px" }}>
                 <img src={LoginSignup} alt="" />
              </div>
              <div className={styles.sidenavGrid}>
              </div>
            </div>
             </div>
      <div className='second_image' style={{width:"700px",padding:"50px",margin:"0px 100px 100px 160px",lineHeight:"35px" , margin:"60px 200px 100px 150px",textAlign:"left"}}>
         <div className={styles.afterSidenav}>
              <div className={styles.heading}>Welcome back!</div>
      
              <div className={styles.formData}>
                <div className={styles.name}>WORK EMAIL</div>
                <input
                />
                <div className={styles.passwordDivision}>
                  <div>PASSWORD</div>
                  <div
                    className={styles.passwordEye}
                    onClick={() => setToggleType(toggleType ? false : true)}
                  >
                    {/* <div>{toggleType ? <BiShow /> : <GrHide />}</div> */}
                    <div>{toggleType ? "Hide" : "Show"}</div>
                  </div>
                </div>
                <input
                />
              </div>
              <div>
                <button className={styles.handleSignUp}>
                Login
                </button>
      
                <div className={styles.hrDivision}>
                  <hr></hr>
                  <div>OR</div>
                  <hr></hr>
                </div>
                 <div style={{display:"flex"}}>
                  <button className={styles.button2}>
                 <div><p>Sign up with Facebook</p></div></button>
                </div>
                 <div style={{display:"flex"}}>
                  <button className={styles.button2}>
                 <div><p>Log in via with SSo</p></div></button>
                </div>
              </div> 
      
              <div className={styles.bottomLines}>
                Need a Lumen5 account? <a href="/login">Create an account</a>
              </div>
      
              <div className={styles.conclusionLine}>
                By clicking “Create account” I agree to Lumen5’s
                <a href="https://lumen5.com/terms/">Terms of Use</a> and
                <a
                  href="https://lumen5.com/privacy/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Privacy Policy
                </a>
                .
              </div>
            </div>

        
      </div>
           
          </div>
           
          </>
        
        
        )
          
  }