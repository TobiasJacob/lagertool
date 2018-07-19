<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat to="/">
          <v-icon>home</v-icon>
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-title>
        <span>Lagerverwaltung</span>
        <span v-if="$route.params.date"> - {{$route.params.date}}.{{$route.params.month}}.{{$route.params.year}}</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer app></v-footer>
  </v-app>
</template>

<style lang="stylus">
</style>
