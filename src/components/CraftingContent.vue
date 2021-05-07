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
          These include: Alchemy, Blacksmithing, Clothier, Enchanting, Jewelry Crafting, Woodworking, and Provisioning. Additionally, each profession has its unique recipies, styles, and/or motifs. To level up each profession you need to either craft items related to that trade or by deconstructing items you crafted or find while adventuring.
        </p>
        <p class="card-text mb-3">
          Crafting in any profession consits of multiple components.
          <ul>
            <li class="mb-2">
              <b>Crafting Writs:</b> These are repeatable crafting quests that give you gold and inspiration.
            </li>
            <li class="mb-2">
              <b>Creation:</b> Using materials that are raw or refined to craft useful items. This is where you can assign traits as well.
            </li>
            <li class="mb-2">
              <b>Improvement:</b> You can improve the quality of the items you craft. There is a chance the improvement will be successful dependant on how much improvement material you use.
            </li>
            <li class="mb-2">
              <b>Inspiration:</b> This is the crafting experience you earn in the game and accumulates independantly. You can earn inspiration by crafting or deconstructing items, researching, finding recipies or plans, or completing crafting writs. Depending on the level and quality of the item you are working on will determine how much inspriation is awarded. It is wise to stay in your level scope to minimize the materials wasted for unsuccessful attempts or unwanted outcomes.
            </li>
            <li class="mb-2">
              <b>Passive Abilities:</b> Within your skill menu there are passive abilities for all the professions. Here you can spend points to grant yourself benefits associated with that profession. They enchance your crafting abilities and unlocks new possiblities with your materials gathered.
            </li>
            <li class="mb-2">
              <b>Deconstruction:</b> You can gain inspriation and materials by deconstructing items. Items break down into variable crafting components used to craft new items.
            </li>
            <li class="mb-2">
              <b>Research:</b> This is how you discover traits for your crafted items to enchance that particluar item. 
            </li>
            <li class="mb-2">
              <b>Styles:</b>
            </li>
            <li class="mb-2">
              <b>Set Bonuses:</b>
            </li>
            <li class="mb-2">
              <b>Traits:</b>
            </li>
            <li class="mb-2">
              <b>Transmutation:</b>
            </li>
          </ul>
        </p>
        <p class="card-text mb-3">
          Below you will see a quick description of each of the 7 professions.
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
                <h4>Jewelry Crafting</h4>
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
