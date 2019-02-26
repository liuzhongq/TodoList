<template>
  <div>
    <div >
      <Form>
      姓名：<input v-model="inputValue">
      日期：<input type="date" v-model="inputDate">
      <!--<p>{{inputDate}}</p>-->
    <button @click="handleSubmit">提交</button>
    {{content}}
      </Form></div>
    <ul>
      <todo-item v-for="(item,index) in list"
                 :key="index"
                 :content="item"
                 :index="index"
                 @delete="handleDelete"
      />
    </ul>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
export default {
  components: {
    'todo-item': HelloWorld
  },
  data () {
    return {
      inputValue: '',
      inputDate: '',
      list: []
    }
  },
  // created () {
  //   fetch('192.168.3.180:8082')
  //     .then(response  => response.json())
  //     .then(json=>{
  //       this.item=json
  //     })
  //
  // },
  methods: {
    handleSubmit () {
      let date = new Date(this.inputDate)
      // console.log('time' + date.getTime())
      this.list.push(this.inputValue)
      this.list.push(date.getTime())
      this.inputValue = ''
    },
    handleDelete (index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style>
</style>
