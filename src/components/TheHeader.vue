<template>
  <header class="header">
    <a href="/" class="header__logo">
      <RickLogo />
    </a>

    <button @click="changeVisibility" class="header__nav-trigger">
      <HamburgerIcon v-if="isMenuOpen" />
      <CloseIcon v-else="isMenuOpen" />
    </button>

    <nav v-bind:class="{ 'is-visible': isMenuOpen }" class="header__nav"> <!-- .is-visible -->
      <router-link to="/" exact class="header__nav-link">
        Episodes
      </router-link>
      <router-link to="/quiz" exact class="header__nav-link">
        Quiz
      </router-link>
    </nav>
  </header>
</template>

<script>
  import RickLogo from '../assets/logo.svg'
  import HamburgerIcon from '../assets/icon-close.svg'
  import CloseIcon from '../assets/icon-menu.svg'

  export default {
    components: {
      RickLogo,
      HamburgerIcon,
      CloseIcon
    },
    data() {
      return {
        isMenuOpen: false
      }
    },
    methods: {
      changeVisibility () {
        this.isMenuOpen = !this.isMenuOpen
      }
    }
  }
</script>
