<template>
    <!--Main Slider-->
    <section class="main-slider" data-start-height="700" data-slide-overlay="yes">
        
        <div class="tp-banner-container">
            <div class="tp-banner">
                <ul>
                    <img src="../../src/assets/images/boats/boat2.jpg"  alt=""  data-bgposition="center top" data-bgfit="cover" data-bgrepeat="no-repeat"> 
                    <div class="overlay-slide">
                    </div>
                    <div class="tp-caption sfl sfb tp-resizeme">
                        <h2>WORLDWIDE TOP RATED HOTEL CHAIN</h2>
                    </div>
                    <div class="tp-caption sfl sfb tp-resizeme">
                        <div class="text">Good rooms. Good service. Good prices</div>
                    </div>
                    <div class="tp-caption sfb sfb tp-resizeme">
                        <!--Search Form-->
                        <div class="search-form">
                            <form method="post" action="contact.html">
                                <div class="clearfix">
                                    <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                        <input type="text" name="fname" value="" placeholder="Search by city, locality, hotel name" required>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-6 col-xs-12">
                                        <input type="text" class="datepicker" name="lname" value="" placeholder="Check In" required>
                                    </div>
                                    <div class="form-group col-md-2 col-sm-6 col-xs-12">
                                        <input type="email" class="datepicker" name="email" value="" placeholder="Check Out" required>
                                    </div>
                                    <!--Form Group-->
                                    <div class="form-group col-md-4 col-sm-6 col-xs-12">
                                        <select class="custom-select-box">
                                            <option>1 Adult, 1 Room</option>
                                            <option>1 Adult, 2 Room</option>
                                            <option>1 Adult, 3 Room</option>
                                        </select>
                                    </div>
                                    <div class="btn-group">
                                        <button type="submit" class="theme-btn search-btn"><span class="icon fa fa-search"></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <!--End Search Form-->
                    </div>
                </ul>
            </div>
        </div>
    </section>
    <!--End Main Slider-->
</template>