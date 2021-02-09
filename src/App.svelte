<script lang="ts">
  import Email from './Email.svelte';
  import OpeningHours from './OpeningHours.svelte';
</script>

<style>
  #myPage {max-width: 550px}
</style>

<section class="hero is-medium is-primary is-bold">
  <div class="hero-body container">
    <div class="container">
      <h1 class="title">
        My Svelte-ty Fictitious Restaurant
      </h1>
      <h2 class="subtitle">
        Come and have a taste of our divine and angelic food made with a touch of Svelte
      </h2>
    </div>
  </div>
</section>

<div class='container p-5' id='myPage'>

  <div class='columns is-multiline is-mobile'>
    <div class='column is-half'>
      <OpeningHours/>
    </div>
    <div class='column is-half pl-6'>
      <div class='mt-5'>
        <h2 class='is-size-4 has-text-weight-bold'>Location</h2>
        <div class='is-size-7'>123 Street Name</div>
        <div class='is-size-7'>Brooklyn, NY 11201</div>
      </div>
      <div class='mt-5'>
        <h3 class='is-size-4 has-text-weight-bold'>Phone</h3>
        <div class='is-size-7'>1.123.456.7890</div>
      </div>
    </div>
    <div class='column is-full'>
      <Email/>
    </div>
  </div>

</div>

<footer class="footer">
  <div class="content has-text-centered">
    <p>
      <strong>A Svelte Experiment</strong> by Robert Knight 
    </p>
    <p>This website is designed for me to test-drive Svelte and its features and workflow. While doing so, I got to play around with a new-to-me UI library called Bulma and its Font Awesome integration.</p>
  </div>
</footer>