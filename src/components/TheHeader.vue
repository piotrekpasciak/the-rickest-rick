<template>
  <header class="header">
    <a
      href="/"
      class="header__logo"
    >
      <RickLogo />
    </a>

    <button
      class="header__nav-trigger"
      @click="changeVisibility"
    >
      <HamburgerIcon v-if="isMenuOpen" />
      <CloseIcon v-else="isMenuOpen" />
    </button>

    <nav
      :class="{ 'is-visible': isMenuOpen }"
      class="header__nav"
    >
      <!-- .is-visible -->
      <RouterLink
        to="/"
        exact
        class="header__nav-link"
      >
        Episodes
      </RouterLink>
      <RouterLink
        to="/quiz"
        exact
        class="header__nav-link"
      >
        Quiz
      </RouterLink>
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
