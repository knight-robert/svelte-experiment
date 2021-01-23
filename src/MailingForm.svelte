<script lang='ts'>
  import { toggleIsMailingFormOff, toggleIsSentOn, toggleIsSentOff } from './stores';
  let name: string = '';
  let email: string = '';
  let subject: string = '';
  let message: string = '';
  $: isValidName = name.length>0;
  $: isValidEmail = (/.+\@.+\..+/g).test(email);
  $: isValidSubject = subject.length>0;
  $: isValidMessage = message.length>0;
  let isSending: boolean = false;

  const submitForm = async (): Promise<void> => {
    if (isValidName && isValidEmail && isValidSubject && isValidMessage) {
      isSending = true;
      await new Promise(r => setTimeout(r,2500));
      toggleIsMailingFormOff();
      toggleIsSentOn();
      await new Promise(r => setTimeout(r,2500));
      toggleIsSentOff();
    }
  };
</script>

<style>
  .reqIn {color:red}
</style>

<div class='field'>
  <label for='name' class='label is-small'>Name <span class='reqIn'>*</span></label>
  <div class='control has-icons-left has-icons-right'>
    <input id='name' class='input is-small {isValidName ? 'is-success' : ''}' type='text' placeholder='Name' disabled={isSending} bind:value={name}>
    <span class='icon is-small is-left'>
      <i class='fa fa-user' aria-hidden='true'></i>
    </span>
    {#if isValidName}
      <span class='icon is-small is-right'>
        <i class='fa fa-check' aria-hidden='true'></i>
      </span>
    {/if}
  </div>
</div>

<div class='field'>
  <label for='email' class='label is-small'>Email <span class='reqIn'>*</span></label>
  <div class='control has-icons-left has-icons-right'>
    <input id='email' class='input is-small {isValidEmail ? 'is-success' : ''}' type='email' placeholder='Email' disabled={isSending} bind:value={email}>
    <span class='icon is-small is-left'>
      <i class='fa fa-envelope' aria-hidden='true'></i>
    </span>
    {#if isValidEmail}
      <span class='icon is-small is-right'>
        <i class='fa fa-check' aria-hidden='true'></i>
      </span>
    {/if}
  </div>
</div>

<div class='field'>
  <label for='subject' class='label is-small'>Subject <span class='reqIn'>*</span></label>
  <div class='control has-icons-left has-icons-right'>
    <input id='subject' class='input is-small {isValidSubject ? 'is-success' : ''}' type='text' placeholder='Subject' disabled={isSending} bind:value={subject}>
    <span class='icon is-small is-left'>
      <i class='fa fa-tag' aria-hidden='true'></i>
    </span>
    {#if isValidSubject}
      <span class='icon is-small is-right'>
        <i class='fa fa-check' aria-hidden='true'></i>
      </span>
    {/if}
  </div>
</div>

<div class='field'>
  <label for='message' class='label is-small'>Message <span class='reqIn'>*</span></label>
  <div class='control'>
    <textarea id='message' class='textarea is-small {isValidMessage ? 'is-success' : ''}' placeholder='Message' disabled={isSending} bind:value={message}></textarea>
  </div>
</div>

<div class='is-size-7 my-4'><span class='reqIn'>*</span> Indicates required field</div>

<div class='field'>
  <div class='control'>
    {#if isSending}
      <button class='button is-link is-outlined is-small is-loading'>Submit</button>
    {:else}
      <button class='button is-link is-outlined is-small' on:click={submitForm}>Submit</button>
    {/if}
  </div>
</div>