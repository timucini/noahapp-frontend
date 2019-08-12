
import Axios from 'axios';

export default {
    state: {
      boatName: "boatTest",
      name: "Timur",
      testlist: []
    },
    getters: {
        NAME : state => {
            return state.name
        },
        TESTLIST: state => {
            return state.testlist
        }
    },
    mutations: {
      SET_NAME : (state,payload) => {
        state.name = payload
      },
      ADD_BOAT : (state,payload) => {
        state.testlist.push(payload)
      }
    },
    actions: {
        SET_NAME : async (context, name) => {
            let { data } = await Axios.post('http://myapiendpoint.com/api/name',{name : name})
            if(data.status == 200){
              context.dispatch('SET_NAME', name)
            }
        }
    }
  }