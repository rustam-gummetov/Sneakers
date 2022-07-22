<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__networks">
      <div class="footer__container">
        <span class="footer__text"
          >Don’t missout on once-in-a-while-deals:</span
        >
        <div class="footer__icon">
          <img
            src="@/assets/icons/twitter.svg"
            alt="twiiter"
            width="32"
            height="32"
          />
        </div>
        <div class="footer__icon">
          <img
            src="@/assets/icons/instagram.svg"
            alt="instagram"
            width="32"
            height="32"
          />
        </div>
        <div class="footer__icon">
          <img
            src="@/assets/icons/facebook.svg"
            alt="facebook"
            width="32"
            height="32"
          />
        </div>
      </div>
    </div>
    <div class="footer__contacts">
      <span>Support line: +250 788 467 808</span>
      <span>Copyright 2021 © Sneaker City ltd</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  height: 100px;
  margin-left: 400px;
  padding-top: 20px;
  margin-bottom: 70px;
  margin-right: 60px;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
}

.footer__networks {
  text-align: left;
  width: 100%;
}

.footer__container {
  display: flex;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer__icon {
  width: 32px;
  height: 32px;
  margin-left: 6px;
  margin-right: 6px;
}

.footer__contacts {
  display: flex;
  justify-content: space-between;
  width: 100%;

  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
}
</style>
