window.onload = () => {
  // google map on home page
  const denverPublicLibrary = [39.737598, -104.988083];

  // dogs class to create new dogs
  class Dog {
    constructor (name, location, details, bread) {
      this.name = name;
      this.location = location;
      this.details = details;
      this.bread = bread;
    }
  }
  //--end-- dogs class

  const mabelLocation = [39.736831, -104.991239];
  const chaseLocation = [39.734232, -104.987659];
  const ernieLocation = [39.735021, -104.987632];
  const darcyLocation = [39.736992, -104.990850];
  const veraLocation =  [39.739208, -104.988842];

  const Mabel = new Dog (mabelLocation, 'brown with gray all over', 'german shepard', 'mabel');
  const Chase = new Dog (chaseLocation, 'black and white', 'Doberman', 'chase');
  const Ernie = new Dog (ernieLocation, 'black eye with white tail', 'Border Collie', 'ernie');
  const Darcy = new Dog (darcyLocation, 'gold', 'pug', 'darcy');
  const Vera = new Dog (veraLocation, 'gray', 'pit bull', 'vera');

  //array of existing dogs
  let dogList = [
    {
      name: 'Mabel',
      location: 'denver',
      details: 'brown with gray all over',
      bread: 'German Shepard',
    },
    {
      name: 'Chase',
      location: 'denver',
      details: 'black and white',
      bread: 'Doberman',
    },
    {
      name: 'Ernie',
      location: 'denver',
      details: 'black eye with white tail',
      bread: 'Border Collie',
    },
    {
      name: 'Darcy',
      location: 'denver',
      details: 'gold fur',
      bread: 'pug',
    },
    {
      name: 'Vera',
      location: 'denver',
      details: 'short and gray',
      bread: 'pit bull',
    }
  ];
  //--end-- array of existing dogs

  //print out list of dogs to all dogs page
  dogList.forEach(function (dog) {
    let name = dog.name;
    let location = dog.location;
    let details = dog.details;
    let bread = dog.bread;
    console.log(`${name} ${location} ${details} ${bread}`);

    let singleDog = $('.dog-list').append(
      `<div class="single-dog">
        <img src="assets/dog-img@2x.png" alt="dog">
        <div class="brief-description">
          <h3>${name}</h3>
          <h4>${location}</h4>
          <button>see details</button>
          </div>
        </div>`
    );
  });
  // --end-- print out list of dogs to all dogs page

  // trying to create new dogs and push to array then local storage
  let newDogs = [];

  $("#newDog").click(function(){
    let name = $('#name').val();
    let location = $('#location').val();
    let details = $('#details').val();
    let bread = $('#bread').val();
    console.log(`A new dog has been created! Welcome ${name}`);

    let newDog = new Dog(name, location, details, bread);
    dogList.push(newDog);
    console.log( `There are ${newDogs.length} new dogs`);
  });

  newDogs.forEach(function (dog) {
    console.log(dog);
  });
  // -- end -- trying to create new dogs and push to array then local storage

  //google map
  $('.map')
  .gmap3({
    center:denverPublicLibrary,
    zoom:15,
    navigationControl: true,
    scrollwheel: true,
    streetViewControl: true
  })
  .marker([
    {position: denverPublicLibrary},
    {address:"denver art museum"},
    {position: mabelLocation, icon: "assets/dog-map-icon.png"},
    {position: chaseLocation, icon: "assets/dog-map-icon.png"},
    {position: ernieLocation, icon: "assets/dog-map-icon.png"},
    {position: darcyLocation, icon: "assets/dog-map-icon.png"},
    {position: veraLocation, icon: "assets/dog-map-icon.png"}
  ]);
  // --end-- google map

};
