import { createLocalVue, mount } from '@vue/test-utils'
import DogList from '../app/javascript/packs/components/DogList.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import flushPromises from "flush-promises";

// Mock data for dog collection from axios.
jest.mock("axios", () => ({
    get: () => Promise.resolve({
        data: [
            { url: 'url1.jpg' },
            { url: 'url2.jpg' },
            { url: 'url3.jpg' },
            { url: 'url4.jpg' },
            { url: 'url5.jpg' }
        ]
    })
}));

describe('DogList', () => {
    const localVue = createLocalVue();

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
        return mount(DogList, {
            localVue,
            vuetify,
            router,
            ...options,
        })
    };

    it('received dogs list from mocked axios call', async () => {
        const wrapper = mountFunction();
        await flushPromises();
        expect(wrapper.vm.dogs.length).toBe(5);
    });

    it('should match snapshot', () => {
        const wrapper = mountFunction();

        expect(wrapper.html()).toMatchSnapshot()
    });
})