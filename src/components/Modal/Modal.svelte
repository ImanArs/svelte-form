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
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background: white;
    padding: 1rem;
    border-radius: 8px;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .modal-header {
    display: flex;
  }

  .close-button {
    font-size: 38px;
    margin-left: auto;
    border: none;
    background: none;
    cursor: pointer;
  }
</style>