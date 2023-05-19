<template>
  <div class="main">
    <div class="top">
      <a-input placeholder="请输入任务" style="width:60%" :value="inputValue" @change="inputChange"/>
      <a-button type="primary" class="btn_pri" @click="addDate">
        添加事项
      </a-button>
    </div>
    <div class="bom">
      <a-list size="large" bordered :data-source="ViewDatetoggle" style="width: 500px;">
        <a-list-item slot="renderItem" slot-scope="item" class="list">
          <div>
            <a-checkbox value="1" name="type" class="check-box" :checked="item.done" @change="getStatus(!item.done,item.id)">
            </a-checkbox>
            {{ item.data }}
          </div>
          <a href="javascript:;" @click="reomveData(item.id)">删除</a>
        </a-list-item>
        <div slot="footer" class="footer">
          <p>{{getStatusLength}} 条剩余</p>
          <a-radio-group default-value="a" button-style="solid">
            <a-radio-button value="a" @click="toggto('All')" >
              全 部
            </a-radio-button>
            <a-radio-button value="b" @click="toggto('undone')" >
              未完成
            </a-radio-button>
            <a-radio-button value="c" @click="toggto('done')" >
              已完成
            </a-radio-button>
          </a-radio-group>
          <a href="javascript:;" @click="removeFinish">清除已完成</a>
        </div>
      </a-list>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  name: 'MyApp',
  data () {
    return {
    }
  },

  created () {
    // 异步请求值
    this.$store.dispatch('dataAsync')
  },
  computed: {
    ...mapState(['inputValue', 'ViewDate']),
    ...mapGetters(['getStatusLength', 'ViewDatetoggle'])
  },
  methods: {
    // 监听数据变化
    inputChange (e) {
      // console.log(e.target.value)
      this.$store.commit('setInputValue', e.target.value)
    },
    // 添加数据
    addDate () {
      if (this.inputValue.trim().length <= 0) {
        return this.$message.warning('文本框不能为空')
      }
      this.$store.commit('addItem')
    },
    // 删除数据
    reomveData (id) {
      this.$store.commit('removeItem', id)
    },
    // 改变复选框状态
    getStatus (val, id) {
      // console.log(val)
      // console.log(id)
      this.$store.commit('checkedItem', { val, id })
    },
    removeFinish () {
      this.$store.commit('removeFinishItem')
    },
    toggto (val) {
      this.$store.commit('toggto', val)
    }
  }

}
</script>

<style scoped>
.main {
  /* width: 500px; */
  padding: 30px;
}

.top {
  display: flex;
  justify-content: left;
  margin-bottom: 20px;
}

.btn_pri {
  margin-left: 10px;
}

.check-box {
  margin-right: 10px;
}

.list {
  display: flex;
}

.footer {
  display: flex;
  justify-content: space-around;
}
.footer p{
  margin-top: 6px;
}
.footer a{
  margin-top: 6px;
}
</style>
