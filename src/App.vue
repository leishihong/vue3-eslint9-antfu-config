<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

import test from './components/TestHome.vue'

const count = 1

console.log(`output->co111unt`, count)
</script>

<template>
	<header>
		<img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
		<div class="wrapper">
			<HelloWorld msg="You did it!" />
			sdsd
			<test />
			<nav>
				<RouterLink to="/">Home</RouterLink>
				<RouterLink to="/about">About</RouterLink>
			</nav>
		</div>
	</header>

	<RouterView />
</template>

<style lang="scss" scoped>
.logo {
	display: block;
	margin: 0 auto 2rem;
}

.nav {
	width: 100%;
	margin-top: 2rem;
	font-size: 12px;
	text-align: center;
}

.nav a.router-link-exact-active {
	color: var(--color-text);
}

.logo {
	margin: 0 2rem 0 0;
}

.header .wrapper {
	display: flex;
	place-items: flex-start;
	flex-wrap: wrap;
}

.nav {
	margin-top: 1rem;
	margin-left: -1rem;
	padding: 1rem 0;
	font-size: 1rem;
	text-align: left;
}
</style>
