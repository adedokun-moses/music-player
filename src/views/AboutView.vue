<template>
  <div class="about">
    <h1>{{ storeCounter.count }}</h1>
    <button @click="sencrease ">-</button>
    <button @click="increase">+</button>

    <h1>{{oddEven}}</h1>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useUserStore} from '../store/user'

const storeCounter = useUserStore()

const count = ref(0);

const increase = () => {
  count.value++
};
const sencrease = () => {
  count.value--
};

const oddEven  = computed(() =>{
  if(count.value % 2 === 0){
    return "even"
  } else{
    return "odd"
  }
})
</script>

<style scoped>
.about h1 {
  margin: 10px;
}
.about button {
  font-size: 20px;
  margin: 20px;
  padding: 40px;
  border-radius: 20px;
}
</style>