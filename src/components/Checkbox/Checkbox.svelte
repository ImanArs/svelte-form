<script lang="ts">
  import CheckIcon from '../../lib/images/tick.svg';

  export let checked: boolean = false;
  export let id: string = "";
  export let name: string = "";
  export let onChange: () => void;

  function toggle() {
    checked = !checked;
    onChange()
  }
</script>

<div class="checkboxWrapper">
  <input 
    type="checkbox" 
    id={id} 
    name={name} 
    checked={checked} 
    on:change={toggle} 
  />
  <label for={id}>
    <span class="checkboxIcon">
      {#if checked}
       <img src={CheckIcon} alt="tick" width="16" height="11">
      {/if}
    </span>
  </label>
</div>

<style>
  @import './Checkbox.css'
</style>