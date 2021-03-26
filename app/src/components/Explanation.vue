<template>
<div>
    <p>
      <strong>To działa tak:</strong>
      <ol>
        <li>Logujesz się (na konto google albo zakładasz nowe konto z hasłem)</li>
        <li>Zatwierdzasz członkowstwo</li>
        <li>Pobierasz aplikację ze sklepu Play</li>
        <li>Logujesz się w aplikacji i cieszysz się członkostwem</li>
      </ol>
    </p>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Explanation extends Vue {}
</script>
