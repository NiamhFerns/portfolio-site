<script setup>

</script>

<template>
  <header>
    <nav>
      <ul>
        <li><RouterLink to="/">Summary</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/certs">Certifications</RouterLink></li>
        <li><RouterLink to="/history">Work History</RouterLink></li>
        <li><RouterLink to="/proficiency">Proficiency</RouterLink></li>
        <li><RouterLink to="/contact">Find Me</RouterLink></li>
      </ul>
    </nav>
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
