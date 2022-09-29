<template>
  <div class="q-pa-md q-gutter-sm">
    <q-banner rounded class="bg-purple-8 text-white">

      Vous devrez vous connecter pour réserver.

      <template v-slot:action>
        <q-btn @click="$router.go(-1)" label="Retour"/>
        <q-btn flat color="white" label="Réserver" />
      </template>
    </q-banner>
  </div>
</template>
