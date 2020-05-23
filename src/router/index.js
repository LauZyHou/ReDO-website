import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import ReconstructNavBar from "../components/reconstruction/OptNavBar";
import FileUpload from "../components/reconstruction/FileUpload";
import OriginalStructureItem from "../components/reconstruction/OriginalStructureItem";
import RefactorItem from "../components/reconstruction/PhaseItem";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: HomePage
    },
    {
      path:'/reconstruct',
      component: ReconstructNavBar,
      children: [{

      path:'/reconstruct/import',
      component: FileUpload

      },
        {
          name:'original',
          path:'/reconstruct/original-structure',
          component: OriginalStructureItem

        },
        {
          name:'refactor',
          path:'/reconstruct/refactor',
          component: RefactorItem

        }]
    },

    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
  ]
})
