<template>
  <dialog class="modal-wrapper">
    <div class="modal">
      <slot />
    </div>
  </dialog>
  <div class="modal-background"></div>
</template>

<style lang="scss" scoped>
@mixin fixedLayout {
  position: fixed;
  inset: 0;
  display: flex;
}
.modal-wrapper {
  @include fixedLayout;
  justify-content: center;
  align-items: center;
  z-index: 2;
}
.modal {
  background: white;
  border-radius: 7px;
  box-shadow: 0 0 8px rgba(0,0,0,0.44);
  margin: auto;
  padding: 1.1rem;
  position: relative;
  z-index: 69;
}

.modal-background {
  @include fixedLayout;
  z-index: 1;
  backdrop-filter: blur(2px);
}

@supports (backdrop-filter: blur(2px)) {
  .modal-background {
    backdrop-filter: blur(2px);
    background: rgba(0, 0, 0, 0.33);
  }
}

@supports not (backdrop-filter: blur(2px)) {
  .modal-background {
    background: rgba(0, 0, 0, 0.33);
  }
}

</style>
