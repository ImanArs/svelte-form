<script>
  import Button from '../Button/Button.svelte';
  export let isOpen = false;

  function closeModal() {
    isOpen = false;
  }
</script>

{#if isOpen}
  <button class="modal-overlay" on:click={closeModal} on:keydown={(e) => e.key === 'Enter' && closeModal()}>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div class="modal" role="dialog" aria-modal="true" on:click|stopPropagation>
      <header class="modal-header">
        <button class="close-button" on:click={closeModal}>&times;</button>
      </header>
      <slot />
      <Button
        type="button"
        on:click={closeModal}

      >
        понятно
      </Button>
    </div>
  </button>
{/if}

<style>
  @import './Modal.css'
</style>