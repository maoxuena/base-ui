---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
layoutClass: 'home-layout'

hero:
  name: "Base UI"
  text: "基于 VitePress 实现的组件库文档demo"
  tagline: VitePress
  image:
    src: /public/logo.svg
  actions:
    - theme: brand
      text: 组件
      link: /components/icon

features:
  - title: Feature A
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature B
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: Feature C
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
---

<style>
.home-layout .image-src:hover {
  transform: translate(-50%, -50%) rotate(360deg);
  transition: transform 6s cubic-bezier(0.3, 0, 0.8, 1);
}

.image-bg{
  background-color: #f9f9f9;
  border-radius: 50%;
}

.image-src {
  display: inline-block;
  width: 10rem;
  height: 10rem;
}
</style>
