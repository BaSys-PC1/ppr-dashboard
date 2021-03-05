import Vue from 'vue';
import Router from 'vue-router';
import Devices from '@/components/views/Devices.vue';
import Services from '@/components/views/Services.vue';
import Management from '@/components/views/Management.vue';
import Processes from '@/components/views/Processes.vue';
import ProcessesDetails from '@/components/views/processes/ProcessesDetails.vue';
import ProcessesInstance from '@/components/views/processes/ProcessesInstance.vue';
import Registry from '@/components/views/Registry.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/devices',
      name: 'Devices',
      component: Devices,
    },
    {
      path: '/services',
      name: 'Services',
      component: Services,
    },
    {
      path: '/management',
      name: 'Management',
      component: Management,
    },
    {
      path: '/processes',
      name: 'Processes',
      component: Processes,
    },
    {
      path: '/processes/:pid',
      name: 'ProcessesDetails',
      component: ProcessesDetails,
    },
    {
      path: '/processes/:pid/instance/:iid',
      name: 'ProcessesInstance',
      component: ProcessesInstance,
    },
    {
      path: '/registry',
      name: 'Registry',
      component: Registry,
    },
    { path: '*', redirect: '/devices' },
  ],
});
