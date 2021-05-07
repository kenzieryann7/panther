import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Crafting from '../views/Crafting.vue';
import Alchemy from '../views/Alchemy.vue';
import Blacksmithing from '../views/Blacksmithing.vue';
import Clothier from '../views/Clothier.vue';
import Enchanting from '../views/Enchanting.vue';
import Provisioning from '../views/Provisioning.vue';
import JewelryCrafting from '../views/JewelryCrafting.vue';
import CraftedSets from '../views/CraftedSets.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Crafting',
    component: Crafting
  },
  {
    path: '/',
    name: 'Alchemy',
    component: Alchemy
  },
  {
    path: '/',
    name: 'Blacksmithing',
    component: Blacksmithing
  },
  {
    path: '/',
    name: 'Clothier',
    component: Clothier
  },
  {
    path: '/',
    name: 'Enchanting',
    component: Enchanting
  },
  {
    path: '/',
    name: 'Provisioning',
    component: Provisioning
  },
  {
    path: '/',
    name: 'JewelryCrafting',
    component: JewelryCrafting
  },
  {
    path: '/',
    name: 'CraftedSets',
    component: CraftedSets
  }
  //{
  //  path: '/viewName',
  //  name: 'ViewName',
  //  component: () =>
  //    import(/* webpackChunkName: "viewName" */ '../views/ViewName.vue')
  //}
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
