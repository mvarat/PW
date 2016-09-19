console.log("loaded");

$(function() {
  $("#includedBody").load("body.html");
  var source = $("#ge-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#DocumentResults').html(html);
  $('#cc').addClass("active");
  $('#ge-nav-cc').addClass('active');

  // nav bar scripts
  $('#ge-nav-cc').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    $('#ge-nav-cc, #ge-nav-op, #ge-nav-cs, #ge-nav-bn').removeClass('active');
    console.log("add active class to cc");
    $('#cc').addClass('active');
    $('#ge-nav-cc').addClass('active');
  });
  $('#ge-nav-op').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    $('#ge-nav-cc, #ge-nav-op, #ge-nav-cs, #ge-nav-bn').removeClass('active');
    console.log("add active class to op");
    $('#op').addClass('active');
    $('#ge-nav-op').addClass('active');
  });
  $('#ge-nav-cs').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    $('#ge-nav-cc, #ge-nav-op, #ge-nav-cs, #ge-nav-bn').removeClass('active');
    console.log("add active class to cs");
    $('#cs').addClass('active');
    $('#ge-nav-cs').addClass('active');
  });
  $('#ge-nav-bn').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    $('#ge-nav-cc, #ge-nav-op, #ge-nav-cs, #ge-nav-bn').removeClass('active');
    console.log("add active class to bn");
    $('#bn').addClass('active');
    $('#ge-nav-bn').addClass('active');
  });

  // open modal
  $("button").click(function(event){
    console.log("button clicked");
    $(event.target).next(".modal").css("display","block");
  });

  // close modal
  $(".close").click(function(event){
    console.log("modal closed");
    $(".modal").css("display","none");
  });

  // close modal when you click outside modal
  window.onclick = function(event) {
    if ($(event.target).hasClass("modal")) {
      console.log("window clicked");
      $(".modal").css("display", "none");
    }
  }

  // checks if being viewed on mobile
  var isMobile = window.matchMedia("only screen and (max-width: 760px)");
  console.log("Is Mobile: " + isMobile.matches);
  if (isMobile.matches) {
    $('#fullpage').fullpage();

      // creative cabinets pen and close
      $("#ge-mobile-btn-cc").click(function(event){
        if ( $("#ge-mobile-btn-cc").hasClass("open-arrow") ) {
          console.log("has class open arrow");
          $(".slide-in-mobile-cc").animate({right:0},350);
          $("#ge-mobile-btn-cc").animate({left:"2%"},350);
          $(".ge-section-title-cc").animate({left:-200},350);
          $("#ge-mobile-btn-cc").removeClass("open-arrow");
          $("#ge-mobile-btn-cc").addClass("close-arrow");
        }
        else {
          console.log("does not have class open arrow");
          $(".slide-in-mobile-cc").animate({right:-350},350);
          $("#ge-mobile-btn-cc").animate({left:"70%"},350);;
          $(".ge-section-title-cc").animate({left:40},350);
          $("#ge-mobile-btn-cc").removeClass("close-arrow");
          $("#ge-mobile-btn-cc").addClass("open-arrow");
        }
      });

      // organized pantry open and close
      $("#ge-mobile-btn-op").click(function(event){
        if ( $("#ge-mobile-btn-op").hasClass("open-arrow") ) {
          console.log("has class open arrow");
          $(".slide-in-mobile-op").animate({right:0},350);
          $("#ge-mobile-btn-op").animate({left:"2%"},350);
          $(".ge-section-title-op").animate({left:-200},350);
          $("#ge-mobile-btn-op").removeClass("open-arrow");
          $("#ge-mobile-btn-op").addClass("close-arrow");
        }
        else {
          console.log("does not have class open arrow");
          $(".slide-in-mobile-op").animate({right:-350},350);
          $("#ge-mobile-btn-op").animate({left:"70%"},350);;
          $(".ge-section-title-op").animate({left:40},350);
          $("#ge-mobile-btn-op").removeClass("close-arrow");
          $("#ge-mobile-btn-op").addClass("open-arrow");
        }
      });

      // clever storage open and close
      $("#ge-mobile-btn-cs").click(function(event){
        if ( $("#ge-mobile-btn-cs").hasClass("open-arrow") ) {
          console.log("has class open arrow");
          $(".slide-in-mobile-cs").animate({right:0},350);
          $("#ge-mobile-btn-cs").animate({left:"2%"},350);
          $(".ge-section-title-cs").animate({left:-200},350);
          $("#ge-mobile-btn-cs").removeClass("open-arrow");
          $("#ge-mobile-btn-cs").addClass("close-arrow");
        }
        else {
          console.log("does not have class open arrow");
          $(".slide-in-mobile-cs").animate({right:-350},350);
          $("#ge-mobile-btn-cs").animate({left:"70%"},350);;
          $(".ge-section-title-cs").animate({left:40},350);
          $("#ge-mobile-btn-cs").removeClass("close-arrow");
          $("#ge-mobile-btn-cs").addClass("open-arrow");
        }
      });


      // breakfast nook open and close
      $("#ge-mobile-btn-bn").click(function(event){
        if ( $("#ge-mobile-btn-bn").hasClass("open-arrow") ) {
          console.log("has class open arrow");
          $(".slide-in-mobile-bn").animate({right:0},350);
          $("#ge-mobile-btn-bn").animate({left:"2%"},350);
          $(".ge-section-title-bn").animate({left:-200},350);
          $("#ge-mobile-btn-bn").removeClass("open-arrow");
          $("#ge-mobile-btn-bn").addClass("close-arrow");
        }
        else {
          console.log("does not have class open arrow");
          $(".slide-in-mobile-bn").animate({right:-350},350);
          $("#ge-mobile-btn-bn").animate({left:"70%"},350);;
          $(".ge-section-title-bn").animate({left:40},350);
          $("#ge-mobile-btn-bn").removeClass("close-arrow");
          $("#ge-mobile-btn-bn").addClass("open-arrow");
        }
      });



    // $("ge-mobile-btn-cc").click(function(event){
    //   console.log("open clicked");
    //   console.log(event.target);
    //    alert("OPEN clicked");
    //   $(".slide-in-mobile").animate({right:0},350);
    //   $(event.target).animate({left:"2%"},350);
    //   $(".ge-section-title-mobile").animate({left:-200},350);
    //   console.log(event.target.next);
    //   // $(".ge-section-title-mobile").animate({left:-200},350);
    //   $(event.target).removeClass("open-arrow");
    //   $(event.target).addClass("close-arrow");
    // });




  }
  else {
    console.log("I am not on a Mobile Device");
  }
});


var data = {
          sections: [
            {
                title: "Creative Cabinets",
                imageDesktop: "./images/desktop/cc-desktop.jpg",
                imageMobile: "./images/mobile/cc-mobile.png",
                credit: "GE Appliances",
                class: "cc",
                features: [
                    {
                        num: "cc-1",
                        xval: "23%",
                        yval: "64%",
                        imageLinkMobile: "./images/mobile/cc-1-mobile.jpg",
                        imageLinkDesktop: "./images/desktop/cc-1-desktop.jpg",
                        imageTitle: "Time for a Paint Over",
                        title: "Creative Cabinets",
                        imageCaption: "If your cabinets are outdated but you’re not ready to replace them, a fresh coat of paint is the fastest, most affordable way to transform your space without a major renovation. Stumped on a color? Look to the flipbook <div class='italic'>Pantone: 35 Inspirational Color Palettes</div> to help you decide (We’re partial to the <a href='http://ecx.images-amazon.com/images/I/611fwx-LRvL.jpg' target='_blank'><strong>Riviera Blue</strong></a>, in case you were wondering).",
                        shop: "Pantone ($13)",
                        shopLink: "https://www.amazon.com/Pantone-35-Inspirational-Color-Palletes/dp/0811877574/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=pur0e4-20&linkId=5c2aef19f773ce510d9254db1bb938c6",
                    },
                    {
                        num: "cc-2",
                        xval: "25%",
                        yval: "10%",
                        imageLinkMobile: "./images/mobile/cc-2-mobile.jpg",
                        imageLinkDesktop: "./images/desktop/cc-2-desktop.jpg",
                        imageTitle: "Lighten Up",
                        title: "Creative Cabinets",
                        imageCaption: "So you painted the cabinets, but now the upper doors are looking a little…heavy. Create dimension and brighten up the room by adding glass inserts to solid wood doors. It’s something a <a href='http://www.confessionsofaserialdiyer.com/how-to-add-glass-to-cabinet-doors/' target='_blank'><strong>super-crafty person can do</strong></a> (read: you know your way around a handsaw), but the rest of us would call a handyman.",
                        shop: "IKEA ($89)",
                        shopLink: "http://www.ikea.com/us/en/catalog/products/50266361/",
                    },
                    {
                        num: "cc-3",
                        xval: "38%",
                        yval: "15%",
                        sponsored: "true",
                        imageLinkMobile: "./images/mobile/cc-3-mobile.jpg",
                        imageLinkDesktop: "./images/desktop/cc-3-desktop.jpg",
                        imageTitle: "Integrate Your Appliances",
                        title: "Creative Cabinets",
                        imageCaption: "Gone are the days of clunky gadgets and appliances that stick out like sore thumbs. Today’s kitchen is a streamlined workspace. GE’s entire Slate collection is designed to blend in and not stand out. The elegant ranges and hoods are created in a stone-inspired hue and have a matte finish that melds seamlessly into any design.",
                        shop: "GE Glass Canopy Chimney Hood ($600 MSRP)",
                        shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                    },
                    {
                        num: "cc-4",
                        xval: "40%",
                        yval: "70%",
                        sponsored: "true",
                        imageLinkMobile: "./images/mobile/cc-4-mobile.jpg",
                        imageLinkDesktop: "./images/desktop/cc-4-desktop.jpg",
                        imageTitle: "Revel in Smudge-Proof Products",
                        title: "Creative Cabinets",
                        imageCaption: "This is your kitchen command center. It’s the first thing people notice when they step into the room, and thanks to GE’s smudge-proof Slate collection, you can guarantee that your trusty oven and range stay fingerprint-free at all times. Not to mention, the seamless surface of their electric range makes it easy to wipe away spills.",
                        shop: "GE Double Oven Gas Range MSRP ($3,000 MSRP)",
                        shopLink: "http://products.geappliances.com/appliance/gea-specs/PK7000EJES",
                    },
                    {
                       num: "cc-5",
                        xval: "60%",
                        yval: "48%",
                        imageLinkMobile: "./images/mobile/cc-5-mobile.jpg",
                        imageLinkDesktop: "./images/desktop/cc-5-desktop.jpg",
                        imageTitle: "Keep Grout Grime-Free",
                        title: "Creative Cabinets",
                        imageCaption: "We love investing in an intricate backsplash, but we also love whipping up marinara from scratch. To keep your grout from showing wear and tear, apply two coats of a professional-grade water-based sealant (like Aqua Mix Sealer’s Choice Gold) and touch up any cooking messes with an old toothbrush and baking soda.",
                        shop: "Marvis ($18)",
                        shopLink: "https://www.net-a-porter.com/us/en/product/648419?cm_mmc=LinkshareUS-_-TnL5HPStwNw-_-Custom-_-LinkBuilder&siteID=TnL5HPStwNw-g5HUiab_cO35WSNywjCdjA",
                    }

                ]
            },
            {
              title: "Organized Pantry",
              imageDesktop: "./images/desktop/op-desktop.jpg",
              imageMobile: "./images/mobile/op-mobile.png",
              credit: "Getty Images",
              class: "op",
              features: [
                  {
                      num: "op-1",
                      xval: "34%",
                      yval: "50%",
                      imageLinkMobile: "./images/mobile/op-1-mobile.jpg",
                      imageLinkDesktop: "./images/desktop/op-1-desktop.jpg",
                      imageTitle: "Think Beyond the Closet",
                      title: "Organized Pantry",
                      imageCaption: "A pantry doesn’t have to be tucked away. Instead, make it the focal point of your room by choosing a piece of furniture that you don’t mind putting on display. A flea-market find or even an IKEA Billy bookcase can be the perfect vessel--just make sure that ample shelving abounds.",
                      shop: "IKEA ($180)",
                      shopLink: "https://www.amazon.com/Pantone-35-Inspirational-Color-Palletes/dp/0811877574/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=pur0e4-20&linkId=5c2aef19f773ce510d9254db1bb938c6",
                  },
                  {
                      num: "op-2",
                      xval: "50%",
                      yval: "25%",
                      imageTitle: "Check In Seasonally",
                      title: "Organized Pantry",
                      imageCaption: "Twice a year, do a complete cabinet overhaul. First things first, clear everything out like you did when you <a href='http://www.purewow.com/home/The-Best-Way-to-Clean-Out-Your-Closet' target='_blank'>KonMari’d your closet</a>. Then make sure you're <a href='http://www.purewow.com/food/21-Staples-You-Should-Always-Have-in-Your-Pantry' target='_blank'>fully stocked with all the essentials</a>. Finally, hone in on the seasonal items. In the springtime, donate all those soup fixin’s you’ve acquired and replace them with your salad add-ons. Once autumn rolls around, ease up on the dried apricots and bring on the <a href='http://www.purewow.com/recipes/Homemade-Cinnamon-Applesauce-Recipe' target='_blank'>homemade applesauce.<a>",
                      shop: "",
                      shopLink: "",
                  },
                  {
                      num: "op-3",
                      xval: "71%",
                      yval: "24%",
                      imageLinkMobile: "./images/mobile/op-3-mobile.jpg",
                      imageLinkDesktop: "./images/desktop/op-3-desktop.jpg",
                      imageTitle: "Embrace Containers",
                      title: "Organized Pantry",
                      imageCaption: "By storing small items in clear containers, you’ll keep everything in its place and be able to quickly see exactly what you have. Make sure your shelves are adjusted to the right height so that each container nestles into its intended spot. A lazy Susan is also extremely convenient for food storage because it utilizes every bit of even the deepest shelves.",
                      shop: "Food52 ($80)",
                      shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                  },
                  {
                      num: "op-4",
                      xval: "66%",
                      yval: "68%",
                      imageLinkMobile: "./images/mobile/op-4-mobile.jpg",
                      imageLinkDesktop: "./images/desktop/op-4-desktop.jpg",
                      imageTitle: "Visualize Your Meals",
                      title: "Organized Pantry",
                      imageCaption: "Focus on the food you make the most and group your go-to meal staples together at eye level (so put the box of angel hair next to the can of tomatoes and EVOO). You’ll be less likely to resort to takeout if dinner is within arm’s reach.",
                      shop: "",
                      shopLink: "",
                  }
              ]
          },
          {
            title: "Clever Storage",
            imageDesktop: "./images/desktop/cs-desktop.jpg",
            imageMobile: "./images/mobile/cs-mobile.png",
            credit: "GE Appliances",
            class: "cs",
            features: [
                {
                    num: "cs-1",
                    xval: "40%",
                    yval: "30%",
                    sponsored: "true",
                    imageLinkMobile: "./images/mobile/cs-1-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/cs-1-desktop.jpg",
                    imageTitle: "Invest in Convenience",
                    title: "Clever Storage",
                    imageCaption: "Meet the smartest fridge we know. GE’s new Slate French-door refrigerator has a built-in Keurig K-Cup brewing system, flexible shelves that bend and move depending on your storage needs, temperature adjusting from the GE Kitchen App and LED lights to spotlight ingredients so they’ll never get lost. Oh, did we mention the Keurig?",
                    shop: "GE Slate French-Door Refrigerator ($3,200 MSRP)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    num: "cs-2",
                    xval: "62%",
                    yval: "23%",
                    imageLinkMobile: "./images/mobile/cs-2-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/cs-2-desktop.jpg",
                    imageTitle: "Perfect Your Balancing Act",
                    title: "Clever Storage",
                    imageCaption: "Bring balance to nooks and crannies with painted open shelving that puts your prettiest dishes and serving pieces on display. To create even more symmetry, install a mini mug rack below your shelf with a screwdriver and a few bronze cup hooks. Your guests will think they’ve walked into their very own B&B. Checkout time is never.",
                    shop: "Arrow ($2 each)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    num: "cs-3",
                    xval: "72%",
                    yval: "54%",
                    imageLinkMobile: "./images/mobile/cs-3-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/cs-3-desktop.jpg",
                    imageTitle: "Add Wood for Warmth",
                    title: "Clever Storage",
                    imageCaption: "An all-marble or stainless-steel kitchen is super-cool, but it can come across as a smidgen austere. Warm up your space with natural elements, like reclaimed-wood cabinets and a stone backsplash, while still keeping that marble countertop you love. Word to the wise: You’ll want to protect those cabinets twice a year with a sealant.",
                    shop: "Food52 ($80)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                },
                {
                    num: "cs-4",
                    xval: "75%",
                    yval: "70%",
                    imageLinkMobile: "./images/mobile/cs-4-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/cs-4-desktop.jpg",
                    imageTitle: "Learn the Lessons of Layering",
                    title: "Clever Storage",
                    imageCaption: "A room designed almost entirely in reclaimed wood could easily begin to feel repetitive. The trick is to keep your color palette the same while making sure everything differs slightly: the floor from the cabinets, the cabinets from the stools, the stools from the soap dispenser--you get the idea. Once all the elements are together, the colors and textures will make it feel cohesive, but you won’t be stuck in a wood-washed box.",
                    shop: "Target (from $54)",
                    shopLink: "http://www.target.com/p/hampden-industrial-wood-top-24-counter-stool-metal-threshold/-/A-14815369#prodSlot=_1_33?clkid=68f72fecN375b9445a2b0a753950b0a25&lnm=81938&afid=Skimbit+Ltd.&ref=tgt_adv_xasd0002",
                }
            ]
          },
          {
            title: "Breakfast Nook",
            imageDesktop: "./images/desktop/bn-desktop.jpg",
            imageMobile: "./images/mobile/bn-mobile.png",
            credit: "Amber Interiors",
            class: "bn",
            features: [
                {
                    num: "bn-1",
                    xval: "20%",
                    yval: "70%",
                    imageLinkMobile: "./images/mobile/bn-1-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/bn-1-desktop.jpg",
                    imageTitle: "Mix and Match Seating",
                    title: "Breakfast Nook",
                    imageCaption: "Isn’t it your dream to have people linger forever and ever over breakfast? (No? Just us?) Install a built-in bench to create your own dining nook or opt for a stand-alone style that works just as well (and gives you flexibility should you decide to switch things up down the road).",
                    shop: "Pottery Barn (from $1,097)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    num: "bn-2",
                    xval: "25%",
                    yval: "93%",
                    imageLinkMobile: "./images/mobile/bn-2-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/bn-2-desktop.jpg",
                    imageTitle: "Tie It Together",
                    title: "Breakfast Nook",
                    imageCaption: "An oriental rug in the kitchen? You bet. Not only does it turn this corner of the room into a cozy eating space, but it hides virtually anything (anything!) that could go a-tumbling off the table. That includes you, wine.",
                    shop: "Urban Outfitters ($89)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    num: "bn-3",
                    xval: "30%",
                    yval: "35%",
                    imageLinkMobile: "./images/mobile/bn-3-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/bn-3-desktop.jpg",
                    imageTitle: "Infuse Texture",
                    title: "Breakfast Nook",
                    imageCaption: "Kitchens can feel so austere--marble, plastic, silicone, quartz, you get the idea. But adding in a raw chair, a nubby pillow and a plush rug make it more welcoming",
                    shop: "Rebecca Atwood ($309)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                },
                {
                    num: "bn-4",
                    xval: "55%",
                    yval: "40%",
                    imageLinkMobile: "./images/mobile/bn-4-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/bn-4-desktop.jpg",
                    imageTitle: "Add a Hint of Citrus",
                    title: "Breakfast Nook",
                    imageCaption: "Sunshine-colored lemons needn’t be tucked away in a fridge (where they actually lose flavor). Keep them out on the breakfast table and make your produce serve double duty. Plus, lemons are the new Xanax.",
                    shop: "",
                    shopLink: "",
                },
                {
                    num: "bn-5",
                    xval: "80%",
                    yval: "12%",
                    imageLinkMobile: "./images/mobile/bn-5-mobile.jpg",
                    imageLinkDesktop: "./images/desktop/bn-5-desktop.jpg",
                    imageTitle: "Start Out White",
                    title: "Breakfast Nook",
                    imageCaption: "The beauty of this kitchen’s styling is the expert mix of patterns (ticking stripes with shibori) and genres (mid-century chairs around an industrial table). And it all works together because it’s rooted in a neutral foundation with white cabinetry, white walls and a clean sea-glass-tiled backsplash.",
                    shop: "Benjamin Moore (price upon request)",
                    shopLink: "http://www.target.com/p/hampden-industrial-wood-top-24-counter-stool-metal-threshold/-/A-14815369#prodSlot=_1_33?clkid=68f72fecN375b9445a2b0a753950b0a25&lnm=81938&afid=Skimbit+Ltd.&ref=tgt_adv_xasd0002",
                }
              ]
            }
          ]
        };
