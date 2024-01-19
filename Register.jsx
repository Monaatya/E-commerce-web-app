import React from "react";
const Register = () => {

    const myStyle ={
        width: "80%" ,
        borderRadius: "50px",
        border: "#3b0351 solid",
        boxShadow: "#f377c8 5px 5px 20px inset"
    };

    return ( 
        <>
            <div className="container wow fadeInDown " data-wow-duration="3s">
        <div className="row">
            <div className="col-lg-6 col-md-4 col-sm-4 offset-3">
                <form className='form_reg' name='registration'>
                <h2 className="wow bounceInLeft text-center  fw-bold mt-5">Sign Up</h2>

                    <table>
                        {/*<tr>
                            <h2 className="wow bounceInLeft text-center w-100" data-wow-duration="4s">Sign Up</h2>
                        </tr>  */}

                        <tr>
                            <th><label for="username">Name:</label></th>
                            <td><input style= {myStyle} type="text" name="username" required />
                                <span id="uname" className="espan" style= {{display: "none"}}>UserName can not be empty</span>
                            </td>
                        </tr>
                       
                       
                        <tr>
                            <th><label for="email">Email:</label></th>
                            <td><input type="text" style= {myStyle} name="email" required />
                                <span id="emailValid" className="espan" style= {{display: "none"}}>email must be valid</span>
                            </td>

                        </tr>
                        <tr>
                            <th><label for="passid">Password:</label></th>
                            <td>
                                <input type="password" style= {myStyle} name="passid" />
                                <span id="passValid" className="espan" style= {{display: "none"}}>
                                    pasword must be Min 10 and Mx 20 conatin
                                    (numbers ,chars and special chars)
                                </span>
                            </td>
                        </tr>
                        <tr>
                            <th><label for="passconfirm">Confirm Password:</label></th>
                            <td>
                                <input type="password" style= {myStyle} name="passconfirm" />
                                <span id="passconfirmValid" className="espan" style= {{display: "none"}}>
                                    must be matched with pasword
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
        </>
     );
}

export default Register  ;