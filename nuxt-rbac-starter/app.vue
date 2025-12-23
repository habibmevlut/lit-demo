<template>
  <div class="app">
    <NavMenu />
    <main class="container">
      <NuxtPage />
    </main>
  </div>
</template>

<style>
html,
body,
#__nuxt {
  height: 100%;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
  color: #0f172a;
  background: #ffffff;
}

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 24px 16px 48px;
}

a {
  color: inherit;
}

.app code {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
}
</style>

