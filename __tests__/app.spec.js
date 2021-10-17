import { createLocalVue, mount } from '@vue/test-utils'
import App from '../app/javascript/app.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'

describe('App', () => {
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
        return mount(App, {
            localVue,
            vuetify,
            router,
            ...options,
        })
    };

    it('has data', () => {
        expect(typeof App.data).toBe('function')
    })

    it('should successfully mount', () => {
        const wrapper = mountFunction()

        expect(wrapper.exists()).toBe(true)
    })
})