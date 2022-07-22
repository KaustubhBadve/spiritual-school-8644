import { useState } from 'react';
  import styles from "../Login&Signup/SignUp.module.css";
 import LoginSignup from "./LoginSignup.png"
//  import { Stack,Box,Button} from '@chakra-ui/react';
  
  export default function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [toggleType, setToggleType] = useState(false);
    
    const handleSignUp = () => {
      

    };
    
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
      <div className='second_image' style={{width:"700px",padding:"50px",margin:"0px 100px 100px 160px",lineHeight:"38px",textAlign:"left"}}>
         <div className={styles.afterSidenav}>
              <div className={styles.heading}>Get started with a free account</div>
      
              <div className={styles.formData}>
                <div className={styles.name}>FULL NAME</div>
                <input
                />
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
      
              <div className={styles.afterPassword}>
                <div>
                  <div>
                    <span>•</span> One lowercase character
                  </div>
                  <div>
                    <span>•</span> One uppercase character
                  </div>
                </div>
                <div>
                  <div className={styles.three}>
                    <span>•</span> 8   characters minimum 
                  </div>
                  <div>
                    <span>•</span> Contains a number or symbol
                  </div>
                </div>
              </div>
      
              <div>
                <button className={styles.handleSignUp}>
                Create an account
                </button>
      
                <div className={styles.hrDivision}>
                  <hr></hr>
                  <div>OR</div>
                  <hr></hr>
                </div>
                 <div style={{display:"flex"}}>
                  <button className={styles.button2}>
                  {/* <div><img style={{marginLeft:"200px"}}src="https://www.svgrepo.com/show/158427/facebook.svg" alt="facebook" /></div> */}
                 <div><p>Sign up with Facebook</p></div></button>
                </div>
              </div> 
      
              <div className={styles.bottomLines}>
                Already have a Lumen5 account? <a href="/login">Log in</a>
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