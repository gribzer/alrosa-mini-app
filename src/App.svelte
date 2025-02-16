<script>
  import { slide, fade } from 'svelte/transition';
  import Onboarding from './routes/Onboarding.svelte';
  import Quiz from './routes/Quiz.svelte';
  import { writable } from 'svelte/store';

  let started = writable(false);

  function handleStart() {
    started.set(true);
  }

  function handleBackToOnboarding() {
    started.set(false);
  }
</script>

{#if $started}
  <div
    in:slide={{ duration: 500 }}
    out:fade={{ duration: 300 }}
  >
    <Quiz on:backToOnboarding={handleBackToOnboarding} />
  </div>
{:else}
  <div
    in:slide={{ duration: 500 }}
    out:fade={{ duration: 300 }}
  >
    <Onboarding on:start={handleStart} />
  </div>
{/if}
