<template>
  <UForm
    ref="form"
    :schema="schema"
    :state="state"
    class="space-y-4"
    @submit="onSubmit"
  >
    <UFormGroup :ui="{ label: { base: 'text-white' } }" label="ID" name="id">
      <UInput
        color="white"
        variant="outline"
        placeholder="ID"
        v-model="state.id"
        :ui="{
          base: 'relative block w-full disabled:opacity-100 border-2 bg-black',
          color: {
            white: {
              outline:
                'bg-black text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
            },
          },
          variant: {
            outline: 'shadow-sm bg-black text-white',
          },
        }"
      />
    </UFormGroup>

    <UFormGroup
      :ui="{ label: { base: 'text-white' } }"
      label="Senha"
      name="password"
    >
      <UInput
        color="white"
        variant="outline"
        placeholder="****"
        v-model="state.password"
        type="password"
        :ui="{
          base: 'relative block w-full disabled:opacity-100 border-2 bg-black',
          color: {
            white: {
              outline:
                'bg-black text-white focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400',
            },
          },
          variant: {
            outline: 'shadow-sm bg-black text-white',
          },
        }"
      />
    </UFormGroup>

    <UButton
      type="submit"
      size="xs"
      color="indigo"
      variant="solid"
      label="Button"
      :trailing="false"
    >
      Cadastrar
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
const toast = useToast();
const schema = z.object({
  id: z.string({
    required_error: "é necessário preencher o id",
  }),
  password: z.string({
    required_error: "é necessário preenchar a senha",
  }),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  id: undefined,
  password: undefined,
});

const form = ref();

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data

  try {
    await $fetch("/api/v1/create", {
      method: "POST",
      body: state,
    });
    toast.add({ title: "Conta criado com sucesso" });
  } catch (error) {
    console.log(error);
    toast.add({ title: "Erro ao Criar conta" });
  } finally {
    state.id = undefined;
    state.password = undefined;
    form.value.clear();
  }
}
</script>

<style scoped></style>
