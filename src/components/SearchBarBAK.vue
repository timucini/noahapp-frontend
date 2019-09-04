<template>
  <div id="mainform">
  <v-form>
        <div id="div1">
          <v-text-field
            id="field1"
            label="City"
            v-model="city"
            background-color="#ffffff"
            required
            solo>
          </v-text-field>
        </div>
        <div id="div2">
          <v-select
            id="field2"
            :items="items"
            label="Boattype"
            filled
            solo
            height="45"
            background-color="#ffffff">
          </v-select>
        </div>
          <!--<date-picker v-model="starttime" range type="datetime" lang="de" format="YYYY-MM-DD: HH:mm [Uhr]" :time-picker-options="{ start: '08:00', step: '00:30', end: '22:20' }" not-before='' confirm range-separator=" bis " :shortcuts="false"></date-picker> -->
        <div id="div3">
        <date-picker
          id="date1"
          v-model="starttime"
          lang="de" 
          type="datetime"
          appendToBody
          format="YYYY-MM-DD hh:mm"
          :time-picker-options="{ start: '08:00', step: '00:30', end: '22:20' }"
          confirm
          >
        </date-picker>
        </div>
        <date-picker
          id="date2"
          v-model="endtime"
          lang="de"
          type="datetime"
          appendToBody
          format="YYYY-MM-DD hh:mm"
          :time-picker-options="{ start: '08:00', step: '00:30', end: '22:00' }"
          :not-before="starttime"
          :default-value="starttime"
          confirm
          ></date-picker>
        <v-btn class="mr-4" @click="submit">submit</v-btn>    
  </v-form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import { required, maxLength } from 'vuelidate/lib/validators'
  import DatePicker from 'vue2-datepicker'

  export default {
    mixins: [validationMixin],
    components: { DatePicker },
    validations: {
      name: { required, maxLength: maxLength(10) },
      select: { required },
    },

    data: () => ({
      name: '',
      select: null,
      starttime: '',
      endtime: '',
      city: '',
      items: [
        '1 Person',
        '2-3 Person',
        '4-6 Person',
        '7-10 Person',
      ],
        date: new Date().toISOString().substr(0, 10),
        date2: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
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
    },

    methods: {
      submit () {
        console.log(this.starttime)
        this.$v.$touch()
      }
    },
  }
</script>

<style scoped>
#div1{
  height: 100%;
  margin-right: 0px;
}
#field1{
  height: 30px;
}
#div2{
  margin-left: 0px;
  margin-right: 0px;
}
#div3{
  margin-left: 0px;
  margin-right: 0px;
}

#date1{
  transform: scale(1.3);
  font-size: 18px;
}
#date2{
  transform: scale(1.3);
  font-size: 18px;
}
</style>