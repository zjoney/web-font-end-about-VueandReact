<template>
  <div>
    <p>{{username}}</p>
    <h1>{{msg}}</h1>
    <p>
      <input type="text" @keydown.enter="addHero" />
    </p>
    <div v-for="hero in heros" :key="hero.id" @click="onClick(hero)">{{ hero.name }}</div>
    <p>共{{total}}个可选英雄</p>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Mixins } from "vue-property-decorator";
import { Result } from '@/types'
import axios from 'axios'
import {getModule} from 'vuex-module-decorators'
import User from '@/store/user'

// 类型别名
type Hero = {
  id: number;
  name: string;
  classify?: string;
};

// function getResult<T>(): Promise<Result<T>> {
//   const data: any = [
//     { id: 1, name: "卤蛋", classify: "射手" },
//     { id: 2, name: "后羿", classify: "射手" }
//   ] 
//   return Promise.resolve({ ok: 1, data});
// }


// 真正接口调用
function getResult<T>() {
  return axios.get<T>('/api/heros')
}


const user = getModule(User)

@Component({
  components: {}
})
export default class HelloWorld extends Vue {
  @Prop({type: String, required: true})
  msg!: string;

  heros: Hero[] = [];

  // 只要和生命周期钩子名称一致即可
  async created() {
    // this.msg = "ts+vue实战";

    // this.heros = (await getResult<Hero[]>()).data

    // 直接调用axios的方法
    // axios.get<Hero[]>('/api/heros').then(res => {
    //   this.heros = res.data
    // })


    this.$http.get<Hero[]>('/api/heros').then(res => {
      this.heros = res.data
    })
  }

  onClick(hero: Hero) {
    alert("我选" + hero.name);

    // user.login({user})
  }

  @Emit()
  addHero(e: KeyboardEvent) {
    const inp = e.target as HTMLInputElement;
    this.heros.push({
      id: this.heros.length + 1,
      name: inp.value
    });
    // inp.value = "";

    this.$notify.success('新增英雄成功！')

    return inp.value
  }

// 存取器作为计算属性对待
  get total() {
    return this.heros.length
  }

  get username() {
    return user.username
  }
}
</script>

<style scoped>
</style>