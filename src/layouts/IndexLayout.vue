<template>
    <q-layout view="hHh lpR fFf">

        <q-header reveal bordered class="bg-cyan-9 text-white">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
                <q-toolbar-title>
                    <!-- <q-avatar>
                        <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
                    </q-avatar> -->
                    「鹏的归宿。」
                </q-toolbar-title>
                <q-avatar>
                    <img src="https://qiniu.867007845.top/202403011547396.jpg">
                </q-avatar>
            </q-toolbar>
        </q-header>

        <q-drawer v-model="leftDrawerOpen" side="left" overlay bordered content-class="bg-grey-2">
            <!-- drawer content -->
            <q-scroll-area style="height: calc(100% - 250px); margin-top: 250px; border-right: 1px solid #ddd">
                <q-list>
                    <q-item-label header>
                        导航
                    </q-item-label>

                    <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
                </q-list>
            </q-scroll-area>

            <q-img class="absolute-top" src="https://qiniu.867007845.top/202403051547707.png">
                <div class="absolute-center bg-transparent text-center" style="width: 100%;">
                    <q-avatar size="80px" class="">
                        <img alt="ttop5-avatar" src="https://qiniu.867007845.top/202403011547396.jpg" />
                    </q-avatar>
                    <div class="q-pt-md text-h5">「鹏的归宿。」</div>
                    <div class="q-pt-sm">梦境是另一份人生。</div>
                </div>
            </q-img>
        </q-drawer>

        <q-page-container  class="q-mb-xl">
            <router-view />
            <br />
            <br />
            <div class="absolute-bottom text-center text-grey-6">
                © {{ year }} <a class="text-grey-6" href="https://blog.867007845.top/blog">「鹏的归宿。」</a>
            </div>
        </q-page-container>

    </q-layout>
</template>

<script setup>
import { defineComponent, ref } from 'vue'
import { date } from 'quasar';
import EssentialLink from 'components/EssentialLink.vue'

const linksList = ref([
    {
        title: '邮箱',
        caption: 'github@867007845.top',
        icon: 'email',
        link: 'mailto:github@867007845.top'
    },
    {
        title: 'Github',
        caption: 'github.com/destinypengboy',
        icon: 'code',
        link: 'https://github.com/destinypengboy'
    }
]);

const leftDrawerOpen = ref(false);
const year = ref(date.formatDate(new Date(), 'YYYY'));

function toggleLeftDrawer() {
    leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>

<style scoped>
.q-item__label + .q-item__label {
	 white-space: nowrap;
	 text-overflow: ellipsis;
	 overflow: hidden;
}
 .markdown-body a:hover {
	 text-decoration: none;
}
 </style>