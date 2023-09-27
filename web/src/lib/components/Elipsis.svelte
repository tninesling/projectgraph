<span class="elipsis-dot" id="first">.</span>
<span class="elipsis-dot" id="second">.</span>
<span class="elipsis-dot" id="third">.</span>

<style>
  .elipsis-dot {
    animation: 1s infinite alternate fadeInOut;
  }

  #second {
    animation-delay: 0.25s;
  }

  #third {
    animation-delay: 0.5s;
  }

  @keyframes fadeInOut {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }
</style>
