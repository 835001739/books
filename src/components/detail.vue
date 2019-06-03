<template>
  <div id="detail">
      {{title}}
    <a type="button" @click="getMessage"> 点击我</a>
    <div>{{message}}</div>
  </div>
</template>
<script>
    export default {
        data () {
            return {
                title: 'Welcome',
                message:'click',
            }
        },
        methods:{
            getMessage:function() {
                var self = this;
                self.message = 'jianjunhu'+self.message;
            }
        }
    }
</script>