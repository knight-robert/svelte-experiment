<script lang='ts'>
  const openingHours = [
    {day: 'Monday', hours: '10:00 AM – 8:00 PM'},
    {day: 'Tuesday', hours: '10:00 AM – 8:00 PM'},
    {day: 'Wednesday', hours: '10:00 AM – 8:00 PM'},
    {day: 'Thursday', hours: '10:00 AM – 8:00 PM'},
    {day: 'Friday', hours: '10:00 AM – 10:00 PM'},
    {day: 'Saturday', hours: '10:00 AM – 10:00 PM'},
    {day: 'Sunday', hours: 'closed'}
  ];
</script>

<style>
  .day {width: 100px}
</style>

<div class='mt-5'>
  <h2 class='is-size-4 has-text-weight-bold'>Opening Hours</h2>
  {#each openingHours as {day,hours}}
    <div class='is-size-7'>
      <div class='is-inline-block pr-4 day'>{day} :</div><div class='is-inline-block'>{hours}</div>
    </div>
  {/each}
</div>