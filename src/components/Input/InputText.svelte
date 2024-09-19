<script lang="ts">
  export let placeholder: string = "";
  export let value: string = "";
  export let name: string = "";
  export let label: string | null = null;
  export let required: boolean = false
  export let error: string | undefined = ''
</script>

<div class="inputWrapper">
  {#if label}
    <label for={`${name}-input`}>{label}{#if required}*{/if}</label>
  {/if}
  <input 
    type='text'
    {name} 
    id={`${name}-input`}
    placeholder={placeholder} 
    bind:value={value} 
  />
  
  {#if error}
    <p class="error">{error}</p>
  {/if}
  
</div>

<style>
  @import './input.css'
</style>
