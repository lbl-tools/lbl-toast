<style>
  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .loading {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 0.25rem solid rgba(255, 255, 255, 0.2);
    border-top-color: white;
    -webkit-animation: spin 1s infinite linear;
    animation: spin 1s infinite linear;
  }
</style>

<div class="loading" />
