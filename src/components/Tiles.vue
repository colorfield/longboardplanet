<template>
  <!-- @todo create spot list component -->
  <div class="tile is-ancestor">
    <div class="tile is-vertical is-8">
      <div class="tile">
        <div class="tile is-parent is-vertical">
          <article class="tile is-child notification has-background-success">
            <h3 class="title">Best spots in Brussels</h3>
            <div class="content">
              <ul>
                <!-- @todo component -->
                <li>
                  <h4><a href="/spot/bois-de-la-cambre">Bois de la Cambre</a></h4>
                  <p>11 votes</p>
                </li>
                <li>
                  <h4><a href="/spot/gare-du-luxembourg">Gare du Luxembourg</a></h4>
                  <p>37 votes</p>
                </li>
              </ul>
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child">
            <figure class="image is-4by3">
              <img src="https://c1.staticflickr.com/8/7289/27130713632_84670a8870_c.jpg">
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">Shops</p>
          <div class="content">
            <ul>
              <!-- @todo component -->

            </ul>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification has-background-warning">
        <div class="content">
          <p class="title">Next events</p>
          <div class="content">
            <ul>
              <!-- @todo component -->
              <li>
                <h4><a href="https://www.wikorollerbikeparade.be/">Roller Bike Parade</a> until 14 September 2018</h4>
                <p>Brussels, Charleroi, Hasselt, Leuven, Ostende, Wavre.</p>
              </li>
              <li>
                <h4><a href="https://www.brussels.be/mobility-week-and-car-free-sunday-2018">Car Free Sunday</a> 16 September 2018</h4>
                <p>City of Brussels</p>
              </li>
            </ul>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Tiles"
  }
</script>

<style scoped>

</style>
