<template>
    <header>
    <h1>Economaniac</h1>
    <nav>
      <ul>
        <NuxtLink to="/"><li>ホーム</li></NuxtLink>
        <NuxtLink to="/micro"><li>ミクロ</li></NuxtLink>
      </ul>
    </nav>
  </header>
  <!-- contents -->
  <div class="container">
    <slot />
  </div>
  <!-- contents end -->
  <footer>
    <small>2023 Economaniac, written by student S.</small>
  </footer>
</template>

<script setup>
</script>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin: 30px 2%;
  h1 {
    font-size: 40px;
    font-weight: bolder;
  }
  nav {
    ul {
      display: flex;
      list-style-type: none;
      a {
        :hover {
          background-color: darkgreen;
        }
        li {
          padding: 2px 5px;
        }
      }
    }
  }
}
.container {
  background-color: white;
  margin: 0 2% 30px;
  padding: 10px;
  border: 5px solid black;
  color: black;
}
footer {
  border-top: 5px solid black;
  margin: 0 2%;
  padding: 30px 0;
  color: white;
  text-align: center;
}
</style>