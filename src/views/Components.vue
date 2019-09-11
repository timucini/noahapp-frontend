<template>
    <div>
        <Newsletter></Newsletter>
        <Testimonail></Testimonail>
        <News></News>
    </div>
</template>

<script>
import Newsletter from '../components/examples/Newsletter'
import Testimonail from '../components/examples/Testimonail'
import News from '../components/examples/News'

export default {
  components: {
    Newsletter,
    Testimonail,
    News
  },
  data: () => ({
    //
  }),
};
</script>