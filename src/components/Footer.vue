<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__networks">
      <div class="footer__container">
        <div class="footer__text">Don’t missout on once-in-a-while-deals:</div>
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
    <div class="footer__support">Support line: +250 788 467 808</div>
    <div class="footer__copyright">Copyright 2021 © Sneaker City ltd</div>
  </footer>
</template>

<style scoped>
.footer {
  height: 100px;
}

.footer__networks {
  text-align: left;
  margin-right: -250px;
}

.footer__container {
  display: flex;
  vertical-align: middle;
  padding-top: 10px;
  padding-bottom: 10px;
}

.footer__support {
  display: inline-block;
  float: left;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
}

.footer__copyright {
  display: inline-block;
  float: right;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.65);
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
}
</style>
