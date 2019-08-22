<template>
    <div>
        <slider></slider>
        <feature></feature>
    </div>
</template>

<script>
import Slider from "../components/MainSlider.vue"
import Feature from "../components/FeaturedSection.vue"


export default {
  components: {
    Slider,
    Feature
  },
  data: () => ({
    //
  }),
};
</script>
