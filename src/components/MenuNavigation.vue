<template>
        <!-- Main Header-->
    <header class="main-header">
        
        <!--Header-Upper-->
        <div class="header-upper" id="main-upper">
            <div class="auto-container">
                <div class="clearfix">
                    
                    <div class="pull-left logo-outer">
                        <div class="logo"><router-link to="/"><img src="../../src/assets/images/logonoah2.jpg" alt="" title=""></router-link></div>
                    </div>
                    
                    <div class="nav-outer clearfix">
                        <!-- Main Menu -->
                        <nav class="main-menu">
                            <div class="navbar-header">
                                <!-- Toggle Button -->    	
                                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                    <span class="icon-bar"></span>
                                </button>
                            </div>
                            
                            <div class="navbar-collapse collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li><router-link to="/">Home</router-link></li>
                                    <li class="dropdown"><a href="#">About Us</a>
                                        <ul>
                                            <li><router-link to="/thank">Thank you</router-link></li>
                                            <li><router-link to="/submission">Submission</router-link></li>
                                            <li><router-link to="/components">Example-Components</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Boats</a>
                                        <ul>
                                            <li><router-link to="/test">Boat-List</router-link></li>
                                        </ul>
                                    </li>
                                    <li><router-link to="/register"><span class="fa fa-plus"></span>&ensp;Register</router-link></li>
                                    <li><router-link to="/login"><span class="fa fa-lock"></span>&ensp;Login</router-link></li>
                                </ul>
                            </div>
                        </nav>
                        
                </div>
                    
                </div>
            </div>
            
            
        </div>
        <!--End Header Upper-->
        
        <!--Sticky Header-->
        <div class="sticky-header" id="main">
            <div class="auto-container clearfix">
                <!--Logo-->
                <div class="logo pull-left">
                    <a href="index.html" class="img-responsive"><img src="../../src/assets/images/logonoah2.jpg" alt="" title=""></a>
                </div>
                
                <!--Right Col-->
                <div class="right-col pull-right">
                    <!-- Main Menu -->
                    <nav class="main-menu">
                        <div class="navbar-header">
                            <!-- Toggle Button -->    	
                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                                <span class="icon-bar"></span>
                            </button>
                        </div>
                        
                        <div class="navbar-collapse collapse clearfix">
							<ul class="navigation clearfix">
                                <li><router-link to="/">Home</router-link></li>
                                    <li class="dropdown"><a href="#">About Us</a>
                                        <ul>
                                            <li><router-link to="/thank">Thank you</router-link></li>
                                            <li><router-link to="/submission">Submission</router-link></li>
                                            <li><router-link to="/components">Example-Components</router-link></li>
                                        </ul>
                                    </li>
                                    <li class="dropdown"><a href="#">Boats</a>
                                        <ul>
                                            <li><router-link to="/test">Boat-List</router-link></li>
                                        </ul>
                                    </li>
                                    <li><router-link to="/register"><span class="fa fa-plus"></span>&ensp;Register</router-link></li>
                                    <li><router-link to="/login"><span class="fa fa-lock"></span>&ensp;Login</router-link></li>
                            </ul>
                        </div>
                    </nav><!-- Main Menu End-->
                </div>
                
            </div>
        </div>
        <!--End Sticky Header-->
    
    </header>
    <!--End Main Header -->
</template>
<style scoped>
#main {
    background: 	  #b3d1ff
}
#main-upper {
    background: 	  #b3d1ff;
}
</style>