<template>
  <section class="home">
    <h1 class="home__heading">Todos List</h1>
    <div class="directories">
      <div
        class="todo__container"
        v-for="todo in todosList"
        :key="todosList.id"
      >
        <p class="todo__name">
            {{todo.title}}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions} from 'vuex'
import {mapGetters} from 'vuex'

export default {
  name: "list",
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      todosList: 'getTodos'
    })
  },
  created() {
    this.handleClick();
  },

  methods: {
    ...mapActions({
      getList: 'getTodos'
    }),
    async handleClick() {
      await this.getList();
      console.log(this.todosList);
    },
  }

}
</script>

<style scoped>

</style>
