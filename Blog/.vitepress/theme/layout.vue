<!--.vitepress/theme/frontmatter.vue-->
<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import Walineinit from '../../components/Walineinit.vue'

const { Layout } = DefaultTheme

const { frontmatter } = useData() //这里的frontmatter就是各个md文件中自己写在最上面的东西
</script>

<template>
  <Layout>
    <template #doc-before>
      <span class="page-info-title">{{ frontmatter.title }}</span><br><br>
      <span class="page-info">✍️{{ frontmatter.author }}</span>
      <span class="page-info">🕐{{ frontmatter.date }}</span>
      <span>
        🔗
        <span class="page-info" v-for="item in frontmatter.tags" :key="item">{{ item }}</span>
      </span><br><br>
    </template>
    <template #doc-after>
      <Walineinit />
    </template>
  </Layout>
</template>

<style>
  .page-info-title{
    font-size: 0.8cm;
    margin-right: 10px;
  }
  .page-info{
    font-size: 0.4cm;
    color: #7f7f7f;
    margin-right: 10px;
  }
</style>