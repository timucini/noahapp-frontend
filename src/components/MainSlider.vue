<template>
    <!--Main Slider-->
    <section class="main-slider" data-start-height="700" data-slide-overlay="yes">
        
        <div class="tp-banner-container" id="maincontainer">
            <div class="tp-banner">
                <ul>
                    <img src="../../src/assets/images/boats/boat2.jpg" id="mainpic"> 
                    <div class="" id="searchform">
                        <div class="" id="header1">
                            <h2 id="title1">Book your Boat</h2>
                        </div>
                        <div class="" id="header2">
                            <div class="text" id="title2">Easy and fast with Noah-App</div>
                        </div>
                        <Search></Search>
                    </div>
                </ul>
            </div>
        </div>
    </section>
    <!--End Main Slider-->
</template>

<style scoped>
#mainpic
{
    width: 100%;
    height: auto;
}

#maincontainer {
    position: relative;
    text-align: center;
}
#title1 {
    color: white;
}
#searchform {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
}
#title2 {
    color: white
}
#mainpic {
    opacity: 0.75;
}
</style>

<script>
  import vue from 'vue'
  import Search from './SearchBar'

  export default {
    components: {
    Search
    },
    data: () => ({
    }),

    computed: {
    },

  }
</script>