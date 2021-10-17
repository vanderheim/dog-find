import { createLocalVue, mount } from '@vue/test-utils'
import DogFinder from '../app/javascript/packs/components/DogFinder.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import flushPromises from "flush-promises";

// Mock axios call to receive the image of the dog.
jest.mock("axios", () => ({
    get: () => Promise.resolve({
        data: [
            { message: 'success.jpg' }
        ]
    })
}));

describe('DogFinder', () => {
    const localVue = createLocalVue();

    // Initialize vue router on local instance.
    localVue.use(VueRouter);
    const router = new VueRouter();

    // Initialize vuetify on local instance.
    let vuetify;
    beforeEach(() => {
        vuetify = new Vuetify()
    });

    // Mount function to use repeatedly for mounting Vue instance.
    const mountFunction = options => {
        return mount(DogFinder, {
            localVue,
            vuetify,
            router,
            ...options,
        })
    };

    it('received dog image from mock api call', async () => {
        const wrapper = mountFunction();
        await flushPromises();
        expect(wrapper.vm.dog[0].message).toBe('success.jpg');
    });

    it('should match snapshot', () => {
        const wrapper = mountFunction();
    
        expect(wrapper.html()).toMatchSnapshot()
      });
})