// import { ElementPlusContainer } from '@vitepress-demo-preview/component';
import CodePreview from "../../../src/components/CodePreview/index.vue";
import hljsVuePlugin from '@highlightjs/vue-plugin';
import '@vitepress-demo-preview/component/dist/style.css';
import DefaultTheme from 'vitepress/theme';
import {App} from "vue";
import ByteUI from "byte-ui-test";
import "byte-ui-test/dist/style.css";

// console.log(ElementPlusContainer)

export default {
    ...DefaultTheme,
    enhanceApp({ app }: { app: App }) {
        app.use(ByteUI)
        app.use(hljsVuePlugin)
        // app.component('demo-preview', ElementPlusContainer)
        app.component('CodePreview', CodePreview)
    }
}