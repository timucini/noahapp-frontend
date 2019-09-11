<template>
  <div class="search-form">
      <div class="clearfix">
        <div class="form-group col-md-3 col-sm-6 col-xs-12 rounded">
          <input type="text" name="fname" v-model="city" placeholder="Search by location">
        </div>
        <div class="form-group col-md-3 col-sm-6 col-xs-12">
          <date-picker
            id="date1"
            v-model="starttime"
            lang="en" 
            type="datetime"
            appendToBody
            format="YYYY-MM-DD hh:mm"
            :time-picker-options="{ start: '08:00', step: '00:30', end: '22:20' }"
            confirm
            width="100%">
          </date-picker>
        </div>
        <div class="form-group col-md-3 col-sm-6 col-xs-12">
          <date-picker
            id="date2"
            v-model="endtime"
            lang="en"
            type="datetime"
            appendToBody
            format="YYYY-MM-DD hh:mm"
            :time-picker-options="{ start: '08:00', step: '00:30', end: '22:00' }"
            :not-before="starttime"
            width="100%"
            confirm>
          </date-picker>
        </div>
        <!--Form Group-->
        <div class="form-group col-md-3 col-sm-6 col-xs-12">
          <select class="custom-select-box" v_model="selected">
            <option v-for="(item, index) in items" :key="`item-${index}`">{{item}}</option>
          </select>
        </div>
        <div class="btn-group">
          <button @click="submit" class="theme-btn search-btn"><span class="icon fa fa-search"></span></button>
        </div>
      </div>
  </div>
  <!--End Search Form-->
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import DatePicker from 'vue2-datepicker'

  export default {
    mixins: [validationMixin],
    components: { DatePicker },
    validations: {
      city: { required },
    },

    data: () => ({
      selected: '',
      starttime: '',
      endtime: '',
      city: '',
      items: [
        '1 Person',
        '2-3 Person',
        '4-6 Person',
        '7-10 Person',
      ],
    }),

    computed: {
      selectErrors () {
        const errors = []
        if (!this.$v.select.$dirty) return errors
        !this.$v.select.required && errors.push('Boattype is required')
        return errors
      },
      nameErrors () {
        const errors = []
        if (!this.$v.name.$dirty) return errors
        !this.$v.name.required && errors.push('Name is required.')
        return errors
      },
      changedStart() {
        return this.starttime
      }
    },
    watch: {
      changedStart(value) {
        this.endtime= ''
      }
    },

    methods: {
      submit () {
        console.log(this.starttime);
        console.log(this.city);
        console.log(this.endtime);
        console.log(this.selected);
        this.$router.push('/test')
        //this.$v.$touch()
      }
    },
  }
</script>

<style scoped>


</style>