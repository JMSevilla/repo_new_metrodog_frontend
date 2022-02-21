<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"
export default {
  data(){
    return {
      checkObject : {
            trigger : 1
        },
        tokenObject : {
          state : true,
          owner : localStorage.getItem('key_identifier') ? localStorage.getItem('key_identifier') : 'unknown'
        },
        Platforms : {
          state : true,
          owner : localStorage.getItem('key_identifier') ? localStorage.getItem('key_identifier') : 'unknown'
        }
    }
  },
  computed : {
    ...mapGetters({
      getcheckuserResponse : 'getcheckuserResponse'
    })
  },
  created(){
    this.oncheckuser()
    this.checktoken(
      {
      obj : this.tokenObject
      }
    )
    this.RETAIN_PLATFORM(
      {
        object : this.Platforms
      }
    )
  },
  methods : {
    ...mapActions({
        checktoken : 'CHECK_TOKEN',
        RETAIN_PLATFORM: 'RETAIN_PLATFORM'
      }),
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