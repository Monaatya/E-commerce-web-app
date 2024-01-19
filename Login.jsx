import '../App.css';
const Login = () => {
    const myStyle ={
        width: "80%" ,
        borderRadius: "50px",
        border: "#3b0351 solid",
        boxShadow: "#f377c8 5px 5px 20px inset"
    };
    return ( 
        <div class="container wow fadeInDown mt-5" data-wow-duration="3s">
        <div class="row">
            <div class="col-lg-6 col-md-4 col-sm-4 offset-3">

                <form className='form_reg' name='registration'>
                <h2 className="wow bounceInLeft text-center  fw-bold mt-5">Log In</h2>

                    <table>
                       
                       
                       
                        <tr>
                            <th><label for="email">Email:</label></th>
                            <td><input type="text" style={myStyle} name="email" required />
                                <span id="emailValid" class="espan" style={{display: "none"}} >email must be valid</span>
                            </td>

                        </tr>
                        <tr>
                            <th><label for="passid">Password:</label></th>
                            <td>
                                <input type="password" name="passid" style={myStyle} />
                                <span id="passValid" class="espan" style={{display: "none"}}>
                                    pasword must be Min 10 and Mx 20 conatin
                                    (numbers ,chars and special chars)
                                </span>
                            </td>
                        </tr>
                        
                       
                        

                        <tr>
                            <td></td>
                            <td>
                                <input type="submit" name="submit" value="Submit" />
                                <input type="reset" name="reset" value="Reset" />

                            </td>
                        </tr>
                    </table>
                </form>
            </div>
        </div>

    </div>


     );
}

export default Login;