<template>
    <div>
    <section class="full-width-section">
    	<div class="outer-box clearfix">
        	<div class="title-column" style="background-image:url(images/resource/image-1.jpg);">
            	<div class="content">
                	<div class="content-inner">
                		<h2>login to your account</h2>
                    	<div class="text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qer e penatibus et magnis dis parturient montes, nascetur ridiculus</div>
                    	<div class="register">Don't have account - <a href="#">Register Now </a></div>
                    </div>
                </div>
            </div>
            <div class="form-column">
            	<div class="form-inner">
                	
                    <!--Login Form-->
                    <div class="login-form">
                    	<h2>login now</h2>
                        <div class="text">please login to your account</div>
                        <form method="post" action="contact.html">
                        	<!--Form Group-->
                            <div class="form-group">
                                <input type="text" name="username" value="" placeholder="User Name" required>
                            </div>
                            <!--Form Group-->
                            <div class="form-group">
                                <input type="email" name="email" value="" placeholder="password" required>
                            </div>
                            <!--Form Group-->
                            <div class="form-group form-options">
                            	<div class="clearfix">
                                	<div class="pull-left">
                                    	<div class="check-box">
                                            <input type="checkbox" name="shipping-option" id="account-option-1">&nbsp; <label for="account-option-1">Remember me</label>
                                        </div>
                                    </div>
                                    <div class="pull-right">
                                    	<a class="forgot-psw" href="#">Forgot Password?</a>
                                    </div>
                                </div>
                            </div>
                            <!--Form Group-->
                            <div class="form-group">
                                <button type="submit" class="theme-btn btn-style-one">Login now</button>
                            </div>
                        </form>
                        <!--Share Links-->
                        <div class="share-links">
                        	<a href="#" class="facebook"><span class="fa fa-facebook-f"></span> login via facebook</a>
                            <a href="#" class="google"><span class="fa fa-google-plus"></span> login via google</a>
                            <a href="#" class="twitter"><span class="fa fa-twitter"></span> login via twitter</a>
                        </div>
                        
                    </div>
                    <!--Default Form-->
                    
                </div>
            </div>
        </div>
    </section>
    </div>
</template>

<script>


export default {
  data: () => ({
    //
  }),
};
</script>