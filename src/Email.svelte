<script lang='ts'>
  import { isMailingForm, toggleIsMailingFormOn, toggleIsMailingFormOff, isSent } from './stores';
  import MailingForm from './MailingForm.svelte';
</script>

<div class='field'>
  <h3 class='is-size-4 has-text-weight-bold'>Email</h3>
  <div class='is-size-7'><a href='mailto:inquiry@fictitiousfood.com'>inquiry@fictitiousfood.com</a></div>
</div>

<div class='field'>
  <div class='field is-size-7'>Want to use our mailing form?</div>
  <div class='buttons has-addons are-small'>
    <button class='button {$isMailingForm ? 'is-link' : ''}' on:click={toggleIsMailingFormOn}>Yes</button>
    <button class='button {!$isMailingForm ? 'is-link' : ''}' on:click={toggleIsMailingFormOff}>No</button>
  </div>
</div>

{#if $isMailingForm}
  <MailingForm/>
{/if}

{#if $isSent}
  <div class='field'>
    <div class="control">
      <button class="button is-link is-outlined is-small" disabled>Message sent</button>
    </div>
  </div>
{/if}