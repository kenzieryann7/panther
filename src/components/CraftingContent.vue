<template>
  <div>
    <h1 class="text-center">Crafting</h1>

    <!-- ABOUT CRAFTING -->
    <div class="card text-white bg-dark mb-3">
      <div class="card-header"><h4>Crafting in Elder Scrolls Online</h4></div>
      <div class="card-body">
        <p class="card-text mb-3">
          There is a <b>crafting</b> system in the Elder Scrolls Online where you are able to choose from 7 different professions. 
          <br>
          These include: Alchemy, Blacksmithing, Clothier, Enchanting, Jewelrycrafting, Woodworking, and Provisioning. Additionally, each profession has its unique recipies, styles, and/or motifs.
        </p>
        <p class="card-text mb-3">
          Below you will see a quick description of each.
        </p>
      </div>
    </div>
    

    <!-- PROFESSIONS -->
    <div class="row">
      <!-- LEFT COL -->
      <div class="col"> 
        <div class="card text-white bg-dark mb-3 ml-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/alchemy-icon.png" class="craftingIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Alchemy</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">
              The <b>Alchemy</b> profession allows you to craft potions and poisons to aid your adventures. You craft these items at the appropriate crafting station with <b>reagents</b> and <b>solvents</b> you find throughout Tamriel. You can find recipes to learn how to craft certain potions. You need to increase your skill level to create higher level potions that reduce the chances of negative effects from the potions you craft. 
            </p>
          </div>
        </div>

        <div class="card text-white bg-dark mb-3 ml-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/clothier-icon.png" class="craftingIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Clothier</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>

        <div class="card text-white bg-dark mb-3 ml-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/provisioning-icon.png" class="provisioningIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Provisioning</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>

        <div class="card text-white bg-dark mb-3 ml-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/woodworking-icon.png" class="craftingIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Woodworking</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>

      <!-- RIGHT COL -->
      <div class="col">
        <div class="card text-white bg-dark mb-3 mr-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/blacksmithing-icon.png" class="craftingIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Blacksmithing</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>

        <div class="card text-white bg-dark mb-3 mr-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/enchanting-icon.png" class="craftingIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Enchanting</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>

        <div class="card text-white bg-dark mb-3 mr-3">
          <div class="card-header">
            <div class="row">
              <div class="col-2">
                <img src="@/assets/jewelcrafting-icon.png" class="craftingIcon img-fluid"/>
              </div>

              <div class="col craftingTitle">
                <h4>Jewelcrafting</h4>
              </div>
            </div>
          </div>
          <div class="card-body">
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CraftingContent',
  props: {},
  methods: {
  },
  computed: {}
};
</script>

<style scoped></style>
