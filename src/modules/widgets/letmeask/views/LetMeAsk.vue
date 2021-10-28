<template>
  <div class="box">
    <div class="form-box">
      <h1>Criar uma sala</h1>
      <AppInput />
      <app-btn class="block">Criar</app-btn>
      <hr />
      Quer entrar em uma sala ja existente? <a href="#">Clique aqui</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppBtn from '@/components/app/AppBtn.vue'
import AppInput from '@/components/app/AppInput.vue'
export default defineComponent({
  name: 'LetMeAsk',

  components: {
    AppBtn,
    AppInput
  }
})
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 84vh;
}

.form-box {
  border: 1px solid #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  align-items: center;
  padding: 4px;
  width: 70vw;
  max-width: 320px;
  height: 200px;
}
</style>
