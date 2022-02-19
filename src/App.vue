<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
export default {
  data(){
    return {
      checkObject : {
            trigger : 1
        },
    }
  },
  computed : {
    ...mapGetters({
      getcheckuserResponse : 'getcheckuserResponse'
    })
  },
  created(){
    this.oncheckuser()
  },
  methods : {
    oncheckuser: function() {
      this.$store.dispatch(`ACTIONS_CHECKUSER`, {
        object : this.checkObject
      }).then(() => {
            switch(true){
                        case this.getcheckuserResponse[0].key == 'admin_not_exist':
                             this.$router.push({name : 'AdminReg'}).catch(() => {})
                             break;
                    }
      })
    }
  }
}
</script>