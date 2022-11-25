<template>
  <q-layout view="lHh Lpr lFf" style="background: linear-gradient(#8274C5, #5A4A9F);">
    <q-header class="bg-white" elevated>
      <q-toolbar>
        <q-avatar class="q-ml-md">
          <img src="~assets/favicon.png" alt="Logo de Skill &Share"/>
        </q-avatar>

        <q-toolbar-title class="text-purple-5">
          Skill &Share
        </q-toolbar-title>

        <q-btn
          v-if="!getIsLogged"
          to="/login"
          flat
          icon-right="account_circle"
          label="Se connecter"
          class="bg-purple-5 q-mr-xl"
        />

        <q-btn
          v-if="getIsLogged"
          to="/"
          flat
          icon-right="account_circle"
          label="Se déconnecter"
          class="bg-purple-5 q-mr-xl"
          @click="logout"
        />


        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-purple-5 q-mr-lg"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      side="right"
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container class="window-width column justify-center items-center"
                      >
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import { accountService } from "src/_services";
import { mapGetters } from 'vuex';
import { mapMutations } from 'vuex'


const linksList = [
  {
    title: 'Accueil',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Prestations',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
]

export default ({
  name: 'MainLayout',

  components: {
    EssentialLink
  },
  computed: {
    ...mapMutations(['changeIsLogged']),
    ...mapGetters(['getIsLogged']),
  },

  methods: {
    logout() {
      accountService.logout()
    }
  },

  setup () {
    const leftDrawerOpen = ref(false)


    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
