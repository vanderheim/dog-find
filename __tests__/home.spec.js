import { createLocalVue, mount } from '@vue/test-utils'
import Home from '../app/javascript/packs/components/Home.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

describe('Home', () => {
    const localVue = createLocalVue()

    // Initialize vue router on local instance.
    localVue.use(VueRouter)
    const router = new VueRouter();

    // Initialize vuetify on local instance.
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify();
    });

    // Mount function to use repeatedly for mounting Vue instance.
    const mountFunction = options => {
        return mount(Home, {
            localVue,
            vuetify,
            router,
            ...options,
        })
    };

    it('displays header text', () => {
        const wrapper = mountFunction();

        let h1 = wrapper.find('h1');
        expect(h1.text()).toBe('Welcome to the Dog Finder!');
    });
})