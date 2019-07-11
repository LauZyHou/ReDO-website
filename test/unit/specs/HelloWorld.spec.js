import Vue from 'vue'
// import HelloWorld from '@/components/HelloWorld'
import App from '../../../src/App.vue';
// import MatrixInfoChart from "@/components/MatrixInfoChart";

describe('HH', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(App)
    const vm = new Constructor().$mount()
    expect(vm.mm).toEqual(null)
  })



})
