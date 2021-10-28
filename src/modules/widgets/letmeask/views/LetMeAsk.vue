<template>
  <let-me-ask-template>
    <h1>Criar uma sala</h1>
    <AppInput />
    <app-btn class="block">Criar</app-btn>
    <hr />
    Quer entrar em uma sala ja existente? <a href="#">Clique aqui</a>
  </let-me-ask-template>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LetMeAskTemplate from '@/components/layout/LetMeAskTemplate.vue'
import AppBtn from '@/components/app/AppBtn.vue'
import AppInput from '@/components/app/AppInput.vue'
export default defineComponent({
  name: 'LetMeAsk',

  components: {
    AppBtn,
    AppInput,
    LetMeAskTemplate
  }
})
</script>
