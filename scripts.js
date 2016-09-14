console.log("loaded");


$(function() {
  $("#includedBody").load("body.html");
  var source = $("#ge-template").html();
  var template = Handlebars.compile(source);
  var html = template(data);
  $('#DocumentResults').html(html);
  $('#cc').addClass("active");

  // nav bar scripts
  $('#ge-nav-cc').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    console.log("add active class to cc");
    $('#cc').addClass('active');
  });
  $('#ge-nav-op').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    console.log("add active class to op");
    $('#op').addClass('active');
  });
  $('#ge-nav-cs').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    console.log("add active class to cs");
    $('#cs').addClass('active');
  });
  $('#ge-nav-bn').click(function(){
    $('#cc, #op, #cs, #bn').removeClass('active');
    console.log("add active class to bn");
    $('#bn').addClass('active');
  });

  // modal scripts
  $("button").click(function(event){
    console.log(event.target);
    console.log("button clicked");
    $("#modal").css("display","block");
  });
  // modal scripts
  $(".close").click(function(){
    console.log("modal closed");
    $("#modal").css("display", "none");
  });

  // !!!! THIS NEEDS WORK
  // window.onclick = function(event) {
  //   console.log(event);
  //   if (event.target == $("#modal")) {
  //     console.log("window clicked");
  //     $("#modal").css("display", "none");
  //   }
  // }

});


var data = {
          sections: [
            {
                title: "Creative Cabinets",
                image: "./images/desktop/creative-cabinets.jpg",
                credit: "GE Appliances",
                class: "cc",
                features: [
                    {
                        num: "cc-1",
                        xval: "23%",
                        yval: "64%",
                        sponsored: "false",
                        imageLink: "./images/mobile/cc-1-mobile.jpg",
                        imageTitle: "Time for a Paint Over",
                        imageCaption: "No, we’re not saying you should wear your bikini as a top--we’re adults here. We’re referring to the L.A. gal’s take on sundresses punctuated with ankle boots. This works best with natural-colored booties, because they’ll make your legs appear longer rather than cut them off visually.",
                        shop: "Pantone ($13)",
                        shopLink: "https://www.amazon.com/Pantone-35-Inspirational-Color-Palletes/dp/0811877574/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=pur0e4-20&linkId=5c2aef19f773ce510d9254db1bb938c6",
                    },
                    {
                        num: "cc-2",
                        xval: "25%",
                        yval: "10%",
                        sponsored: "false",
                        imageLink: "./images/mobile/cc-2-mobile.jpg",
                        imageTitle: "Lighten Up",
                        imageCaption: "So you painted the cabinets, but now the upper doors are looking a little…heavy. Create dimension and brighten up the room by adding glass inserts to solid wood doors. It’s something a super-crafty person can do (read: you know your way around a handsaw), but the rest of us would call a handyman.",
                        shop: "IKEA ($89)",
                        shopLink: "http://www.ikea.com/us/en/catalog/products/50266361/",
                    },
                    {
                        num: "cc-3",
                        xval: "38%",
                        yval: "15%",
                        sponsored: "true",
                        imageLink: "./images/mobile/cc-3-mobile.jpg",
                        imageTitle: "Integrate Your Appliances",
                        imageCaption: "Gone are the days of clunky gadgets and appliances that stick out like sore thumbs. Today’s kitchen is a streamlined workspace. GE’s entire Slate collection is designed to blend in and not stand out. The elegant ranges and hoods are created in a stone-inspired hue and have a matte finish that melds seamlessly into any design.",
                        shop: "GE Glass Canopy Chimney Hood ($600 MSRP)",
                        shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                    },
                    {
                        num: "cc-4",
                        xval: "40%",
                        yval: "70%",
                        sponsored: "true",
                        imageLink: "./images/mobile/cc-4-mobile.jpg",
                        imageTitle: "Revel in Smudge-Proof Products",
                        imageCaption: "This is your kitchen command center. It’s the first thing people notice when they step into the room, and thanks to GE’s smudge-proof Slate collection, you can guarantee that your trusty oven and range stay fingerprint-free at all times. Not to mention, the seamless surface of their electric range makes it easy to wipe away spills.",
                        shop: "GE Double Oven Gas Range MSRP ($3,000 MSRP)",
                        shopLink: "http://products.geappliances.com/appliance/gea-specs/PK7000EJES",
                    },
                    {
                       num: "cc-5",
                        xval: "60%",
                        yval: "48%",
                        sponsored: "false",
                        imageLink: "./images/mobile/cc-5-mobile.jpg",
                        imageTitle: "Keep Grout Grime-Free",
                        imageCaption: "No, we’re not saying you should wear your bikini as a top--we’re adults here. We’re referring to the L.A. gal’s take on sundresses punctuated with ankle boots. This works best with natural-colored booties, because they’ll make your legs appear longer rather than cut them off visually.",
                        shop: "Marvis ($18)",
                        shopLink: "https://www.net-a-porter.com/us/en/product/648419?cm_mmc=LinkshareUS-_-TnL5HPStwNw-_-Custom-_-LinkBuilder&siteID=TnL5HPStwNw-g5HUiab_cO35WSNywjCdjA",
                    }

                ]
            },
            {
              title: "Organized Pantry",
              image: "./images/desktop/organized-pantry.jpg",
              credit: "Getty Images",
              class: "op",
              features: [
                  {
                      xval: "34%",
                      yval: "50%",
                      sponsored: "false",
                      imageLink: "./images/mobile/op-1-mobile.jpg",
                      imageTitle: "Think Beyond the Closet",
                      imageCaption: "A pantry doesn’t have to be tucked away. Instead, make it the focal point of your room by choosing a piece of furniture that you don’t mind putting on display. A flea-market find or even an IKEA Billy bookcase can be the perfect vessel--just make sure that ample shelving abounds.",
                      shop: "IKEA ($180)",
                      shopLink: "https://www.amazon.com/Pantone-35-Inspirational-Color-Palletes/dp/0811877574/ref=as_li_ss_tl?ie=UTF8&linkCode=sl1&tag=pur0e4-20&linkId=5c2aef19f773ce510d9254db1bb938c6",
                  },
                  {
                      xval: "50%",
                      yval: "25%",
                      sponsored: "false",
                      imageLink: "",
                      imageTitle: "Check In Seasonally",
                      imageCaption: "Twice a year, do a complete cabinet overhaul. First things first, clear everything out like you did when you KonMari’d your closet. Then make sure you’re fully stocked with all the essentials. Finally, hone in on the seasonal items. In the springtime, donate all those soup fixin’s you’ve acquired and replace them with your salad add-ons. Once autumn rolls around, ease up on the dried apricots and bring on the homemade applesauce.",
                      shop: "",
                      shopLink: "",
                  },
                  {
                      xval: "71%",
                      yval: "24%",
                      sponsored: "false",
                      imageLink: "./images/mobile/op-3-mobile.jpg",
                      imageTitle: "Embrace Containers",
                      imageCaption: "By storing small items in clear containers, you’ll keep everything in its place and be able to quickly see exactly what you have. Make sure your shelves are adjusted to the right height so that each container nestles into its intended spot. A lazy Susan is also extremely convenient for food storage because it utilizes every bit of even the deepest shelves.",
                      shop: "Food52 $(80)",
                      shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                  },
                  {
                      xval: "66%",
                      yval: "68%",
                      sponsored: "false",
                      imageLink: "./images/mobile/op-4-mobile.jpg",
                      imageTitle: "Visualize Your Meals",
                      imageCaption: "Focus on the food you make the most and group your go-to meal staples together at eye level (so put the box of angel hair next to the can of tomatoes and EVOO). You’ll be less likely to resort to takeout if dinner is within arm’s reach.",
                      shop: "",
                      shopLink: "",
                  }
              ]
          },
          {
            title: "Clever Storage",
            image: "./images/desktop/clever-storage.jpg",
            credit: "GE Appliances",
            class: "cs",
            features: [
                {
                    xval: "40%",
                    yval: "30%",
                    sponsored: "true",
                    imageLink: "./images/mobile/cs-1-mobile.jpg",
                    imageTitle: "Invest in Convenience",
                    imageCaption: "Meet the smartest fridge we know. GE’s new Slate French-door refrigerator has a built-in Keurig K-Cup brewing system, flexible shelves that bend and move depending on your storage needs, temperature adjusting from the GE Kitchen App and LED lights to spotlight ingredients so they’ll never get lost. Oh, did we mention the Keurig?",
                    shop: "GE Slate French-Door Refrigerator ($3,200 MSRP)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    xval: "62%",
                    yval: "23%",
                    sponsored: "false",
                    imageLink: "./images/mobile/cs-2-mobile.jpg",
                    imageTitle: "Perfect Your Balancing Act",
                    imageCaption: "Bring balance to nooks and crannies with painted open shelving that puts your prettiest dishes and serving pieces on display. To create even more symmetry, install a mini mug rack below your shelf with a screwdriver and a few bronze cup hooks. Your guests will think they’ve walked into their very own B&B. Checkout time is never.",
                    shop: "Arrow ($2 each)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    xval: "72%",
                    yval: "54%",
                    sponsored: "false",
                    imageLink: "./images/mobile/cs-3-mobile.jpg",
                    imageTitle: "Add Wood for Warmth",
                    imageCaption: "An all-marble or stainless-steel kitchen is super-cool, but it can come across as a smidgen austere. Warm up your space with natural elements, like reclaimed-wood cabinets and a stone backsplash, while still keeping that marble countertop you love. Word to the wise: You’ll want to protect those cabinets twice a year with a sealant.",
                    shop: "Food52 $(80)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                },
                {
                    xval: "75%",
                    yval: "70%",
                    sponsored: "false",
                    imageLink: "./images/mobile/cs-4-mobile.jpg",
                    imageTitle: "Learn the Lessons of Layering",
                    imageCaption: "A room designed almost entirely in reclaimed wood could easily begin to feel repetitive. The trick is to keep your color palette the same while making sure everything differs slightly: the floor from the cabinets, the cabinets from the stools, the stools from the soap dispenser--you get the idea. Once all the elements are together, the colors and textures will make it feel cohesive, but you won’t be stuck in a wood-washed box.",
                    shop: "Target (from $54)",
                    shopLink: "http://www.target.com/p/hampden-industrial-wood-top-24-counter-stool-metal-threshold/-/A-14815369#prodSlot=_1_33?clkid=68f72fecN375b9445a2b0a753950b0a25&lnm=81938&afid=Skimbit+Ltd.&ref=tgt_adv_xasd0002",
                }
            ]
          },
          {
            title: "Breakfast Nook",
            image: "./images/desktop/breakfast-nook.jpg",
            credit: "Amber Interiors",
            class: "bn",
            features: [
                {
                    xval: "20%",
                    yval: "70%",
                    sponsored: "false",
                    imageLink: "./images/mobile/bn-1-mobile.jpg",
                    imageTitle: "Mix and Match Seating",
                    imageCaption: "Isn’t it your dream to have people linger forever and ever over breakfast? (No? Just us?) Install a built-in bench to create your own dining nook or opt for a stand-alone style that works just as well (and gives you flexibility should you decide to switch things up down the road).",
                    shop: "Pottery Barn (from $1,097)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    xval: "25%",
                    yval: "93%",
                    sponsored: "false",
                    imageLink: "./images/mobile/bn-2-mobile.jpg",
                    imageTitle: "Tie It Together",
                    imageCaption: "An oriental rug in the kitchen? You bet. Not only does it turn this corner of the room into a cozy eating space, but it hides virtually anything (anything!) that could go a-tumbling off the table. That includes you, wine.",
                    shop: "Urban Outfitters ($89)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PFE28PMKES",
                },
                {
                    xval: "30%",
                    yval: "35%",
                    sponsored: "false",
                    imageLink: "./images/mobile/bn-3-mobile.jpg",
                    imageTitle: "Infuse Texture",
                    imageCaption: "Kitchens can feel so austere--marble, plastic, silicone, quartz, you get the idea. But adding in a raw chair, a nubby pillow and a plush rug make it more welcoming",
                    shop: "Rebecca Atwood ($309)",
                    shopLink: "http://products.geappliances.com/appliance/gea-specs/PVW7301EJES",
                },
                {
                    xval: "55%",
                    yval: "40%",
                    sponsored: "false",
                    imageLink: "./images/mobile/bn-4-mobile.jpg",
                    imageTitle: "Add a Hint of Citrus",
                    imageCaption: "Sunshine-colored lemons needn’t be tucked away in a fridge (where they actually lose flavor). Keep them out on the breakfast table and make your produce serve double duty. Plus, lemons are the new Xanax.",
                    shop: "",
                    shopLink: "",
                },
                {
                    xval: "80%",
                    yval: "12%",
                    sponsored: "false",
                    imageLink: "./images/mobile/bn-5-mobile.jpg",
                    imageTitle: "Start Out White",
                    imageCaption: "The beauty of this kitchen’s styling is the expert mix of patterns (ticking stripes with shibori) and genres (mid-century chairs around an industrial table). And it all works together because it’s rooted in a neutral foundation with white cabinetry, white walls and a clean sea-glass-tiled backsplash.",
                    shop: "Benjamin Moore (price upon request)",
                    shopLink: "http://www.target.com/p/hampden-industrial-wood-top-24-counter-stool-metal-threshold/-/A-14815369#prodSlot=_1_33?clkid=68f72fecN375b9445a2b0a753950b0a25&lnm=81938&afid=Skimbit+Ltd.&ref=tgt_adv_xasd0002",
                }
              ]
            }
          ]
        };
