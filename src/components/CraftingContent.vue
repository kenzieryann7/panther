<template>
  <div>
    <h1 class="text-center">Crafting</h1>

    <!-- ABOUT CRAFTING -->
    <div class="card shadow-lg text-white bg-dark mb-3">
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
        <div class="card shadow-lg text-white bg-dark mb-3 ml-3">
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
              The <b>Alchemy</b> profession allows you to craft potions and poisons to aid your adventures. You craft these items at the appropriate crafting station with <b>reagents</b> and <b>solvents</b> you find throughout Tamriel. You can find recipes to learn how to craft certain potions and posions. You need to increase your skill level to create higher level potions that reduce the chances of negative effects from the potions you craft. 
            </p>
          </div>
        </div>

        <div class="card shadow-lg text-white bg-dark mb-3 ml-3">
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
            <p class="card-text">
              A <b>Clothier</b> can craft light and medium armors. They search for <b>plants</b> and <b>hide</b> to create their armor. Finding motifs and special crafting books you can explore new traits of higher quality and new racial styles.
            </p>
          </div>
        </div>

        <div class="card shadow-lg text-white bg-dark mb-3 ml-3">
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
            <p class="card-text">
              <b>Provisioning</b> involves cooking food and making drinks to enhance your stats such as Health, Magicka, or Stamina. Food gives you long term stat boosts whereas drinks help improve your stat recovery.
            </p>
          </div>
        </div>
      </div>

      <!-- RIGHT COL -->
      <div class="col">
        <div class="card shadow-lg text-white bg-dark mb-3 mr-3">
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
            <p class="card-text">
              <b>Blacksmithing</b> is where you can craft weapons and heavy armor at the forge. You use raw resources that are gathered by mining metals throughout the world. You can find special crafting books and recipies to learn new racial styles and traits. 
            </p>
          </div>
        </div>

        <div class="card shadow-lg text-white bg-dark mb-3 mr-3">
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
            <p class="card-text">
              You guessed it, <b>Enchanting</b> lets you enchant your armor and weapons to have special abilities. You can find runestones throughout your journies to transform runes into glyphs that you can apply to your items. You can also extract runes from glyphs you created or found. There are three different types of runes: Potency, Aspect and Essence. When combined, you can create powerful glphs to aid your battles in PVE and PVP.
            </p>
          </div>
        </div>

        <div class="card shadow-lg text-white bg-dark mb-3 mr-3">
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
            <p class="card-text">
              With the Jewelry Crafting profession you can craft necklaces and rings that can enhance your stats. You use precious metals such as copper and metal dust from mining seams to create jewelry. Note that Jewel Crafting is only available to players who have bought the Summerset Chapter.
            </p>
          </div>
        </div>

        <div class="card shadow-lg text-white bg-dark mb-3 mr-3">
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
            <p class="card-text">
              The <b>Woodworking</b> profession lets you craft bows, staffs, and shields. You find materials by cutting wood you find scattered along the ground. You can refine these raw materials to craft higher quality items. Look for special crafting books to learn new styles and traits.
            </p>
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
