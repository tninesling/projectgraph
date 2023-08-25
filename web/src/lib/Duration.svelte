<script lang="ts">
  export let durationSeconds: number;

  $: seconds = durationSeconds % 60;
  $: minutes = Math.floor((durationSeconds % 3600) / 60);
  $: hours = Math.floor(durationSeconds / 3600);

  $: secondsString = seconds < 10 ? `0${seconds}` : seconds.toString();
  $: minutesString = minutes < 10 ? `0${minutes}` : minutes.toString();
</script>

<span>{hours}:{minutesString}:{secondsString}</span>
