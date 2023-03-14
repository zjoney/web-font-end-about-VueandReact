import {VuexModule, Module, Mutation, Action} from 'vuex-module-decorators'
import store from './index'

@Module({dynamic: true, name: 'user', store})
class User extends VuexModule {
  username = 'tom'

  @Mutation
  setUsername(name: string) {
    this.username = name
  }

  @Action
  login(userInfo: any) {

  }
}

export default User