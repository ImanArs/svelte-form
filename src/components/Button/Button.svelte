<script lang="ts">
  export let type: "button" | "submit" | "reset" = "button";
  export let disabled: boolean = false;
  export let onClick: (event: MouseEvent) => void = () => {};
  export let className: string = "";
  export let style: string = "";
</script>

<button 
  type={type} 
  disabled={disabled} 
  on:click={onClick} 
  class={className}
  style={style}
>
  <slot></slot>
</button>

<style>
  button {
    width: 100%;
    margin: 0 auto;
    padding: 10px 40px;
    font-size: 18px;
    font-weight: 400;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background: #404463;
    color: #fff;
    transition: background-color 0.3s;
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  button:hover:not(:disabled) {
    background-color: #2C2F47;
    color: white;
  }
</style>