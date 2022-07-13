<script setup lang="ts"></script>

<template>
  <header class="header">
    <div class="header__logo">
      <img src="@/assets/icons/logo.svg" alt="logo" width="32" height="32" />
      <div class="header__text">SC.</div>
    </div>
    <nav class="nav header__nav">
      <ul>
        <li>New arrivals</li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>
    </nav>

    <div class="header__icons">
      <div class="header__icon">
        <img
          src="@/assets/icons/basket.svg"
          alt="basket"
          width="20"
          height="20"
        />
      </div>
      <div class="header__icon">
        <img
          src="@/assets/icons/heart.svg"
          alt="basket"
          width="20"
          height="20"
        />
      </div>
      <div class="header__icon">
        <img
          src="@/assets/icons/user.svg"
          alt="basket"
          width="20"
          height="20"
        />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  height: 80px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}

.header__logo {
  display: flex;
  margin-left: 65px;
  align-self: center;
}

.header__text {
  margin-left: 8px;
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 36px;
  color: #000000;
}

.nav {
  display: flex;
}

.nav ul {
  display: flex;
  padding-left: 0;
  align-self: center;
  margin: 0 -15px;
}

.nav li {
  margin: 0 15px;
  list-style-type: none;
  font-family: "Google Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #000000;
}

.header__icons {
  display: flex;
  align-self: center;
  margin: 0 50px 0 -15px;
}

.header__icon {
  width: 20px;
  height: 20px;
  margin: 0 15px;
}
</style>
