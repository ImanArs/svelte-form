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
  .checkboxWrapper {
    display: flex;
    align-items: center;
  }

  input[type="checkbox"] {
    display: none;
  }

  .checkboxIcon {
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid #3F4363;
    border-radius: 4px;
    margin-right: 8px;
    position: relative;
  }

  .checkboxIcon img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 16px;
    height: 16px;
    color: #fff;
  }

  input[type="checkbox"]:checked + label .checkboxIcon {
    background-color: #3F4363;
  }

  label {
    cursor: pointer;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
    margin-top: 6px;
  }
</style>