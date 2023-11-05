<template>
 <div>
  <v-app app>
    <v-app-bar app class="d-flex elevation-0 app-bar">
      <v-app-bar-nav-icon @click="drawer = true" class="d-flex d-sm-none"></v-app-bar-nav-icon>
      <v-toolbar-title><v-img src="@/assets/logo-removebg-preview.png" :width="70"></v-img></v-toolbar-title>
      <v-spacer></v-spacer>

     <v-tabs v-model="tab" align-with-title class="d-none d-sm-flex">
          <v-tabs-slider color="yellow"></v-tabs-slider>
          <v-tab v-for="route in routes" :key="route.name" @click="navigate(route.name)">
            {{ route.name}}
          </v-tab>
        </v-tabs>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group>
          <v-list-item v-for="route in routes" :key="route.name" @click="navigate(route.name)">
            <v-list-item-title>{{ route.name}}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-app>
 </div>
</template>

<script setup>
import { ref, watch, onBeforeMount } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const drawer = ref(false);
const tab = ref(null);
const routes = ref([]);
const activeRoute = ref(null);

const navigate = (routeName) => {
  router.push({ name: routeName });
};

onBeforeMount(() => {
  routes.value = router.getRoutes();
  activeRoute.value = route.name.name;
});

watch(() => route, (to) => {
  activeRoute.value = to.name;
});
</script>
<style scoped>
.app-bar{
  width:85%;
  margin: 0 auto;
}
  
</style>