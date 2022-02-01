AFRAME.registerComponent("info", {
  schema: {
    itemId: { default: "", type: "string" },
  },
  update: function () {
    this.createBanner();
  },
  createBanner: function () {
    postersInfo = {
      superman: {
        url: "./assets/superman.jpg",
        title: "Superman",
        released_year: "1983",
        description:
          "Superman is an ongoing American comic book series featuring the DC Comics superhero Superman as its main protagonist. Superman began as one of several anthology features in the National Periodical Publications comic book Action Comics in June 1938. The strip proved so popular that National launched Superman into his own self-titled comic book, the first for any superhero, premiering with the cover date Summer 1939.",
      },
      spiderman: {
        url: "./assets/spiderman.jpg",
        title: "Spiderman",
        released_year: "1962",
        description:
          "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy (Aug. 1962) in the Silver Age of Comic Books.",
      },
      captain_america: {
        url: "./assets/captain_america.jpg",
        title: "Captain America",
        released_year: "1969",
        description:
          "Captain America is a superhero appearing in American comic books published by Marvel Comics.  Captain America was designed as a patriotic supersoldier who often fought the Axis powers of World War II and was Timely Comics' most popular character during the wartime period.",
      },
      hulk: {
        url: "./assets/hulk.jpg",
        title: "Hulk",
        released_year: "1962",
        description:
          "The Hulk is a fictional superhero appearing in publications by the American publisher Marvel Comics. A green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist. The two exist as independent dissociative personalities, and resent each other.",
      },
    };
    const { itemId } = this.data;

    const fadeBackgroundEl = document.querySelector("#fadeBackground");

    const entity_1 = document.createElement("a-entity");
    entity_1.setAttribute("visible", true);
    entity_1.setAttribute("id", `${itemId}`);

    entity_1.setAttribute("geometry", {
      primitive: "plane",
      width: 0.9,
      height: 1,
    });

    entity_1.setAttribute("material", { color: "#000" });
    entity_1.setAttribute("position", { x: 0, y: 0.1, z: -1 });

    const item = postersInfo[itemId];

    const image_1 = this.createImage(item);
    const title_1 = this.createTitle(item);
    const description_1 = this.createDescription(item);

    entity_1.appendChild(image_1);
    entity_1.appendChild(title_1);
    entity_1.appendChild(description_1);

    fadeBackgroundEl.appendChild(entity_1);
  },
  createImage: function (item) {
    const entity_1 = document.createElement("a-entity");
    entity_1.setAttribute("visible", true);
    entity_1.setAttribute("geometry", {
      primitive: "plane",
      width: 0.85,
      height: 0.4,
    });
    entity_1.setAttribute("material", { src: item.url });
    entity_1.setAttribute("position", { x: 0, y: 0.3, z: 0.05 });
    return entity_1;
  },
  createTitle: function (item) {
    const entity_1 = document.createElement("a-entity");
    entity_1.setAttribute("visible", true);
    entity_1.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 1.2,
      height: 2,
      color: "#fff",
      value: `${item.title} (${item.released_year})`,
    });
    entity_1.setAttribute("position", { x: -0.4, y: 0.02, z: 0.05 });
    return entity_1;
  },
  createDescription: function (item) {
    const entity_1 = document.createElement("a-entity");
    entity_1.setAttribute("visible", true);
    entity_1.setAttribute("text", {
      shader: "msdf",
      anchor: "left",
      font: "https://cdn.aframe.io/examples/ui/Viga-Regular.json",
      width: 0.75,
      height: 2,
      color: "#fff",
      wrapCount: "40",
      value: item.description,
    })
    entity_1.setAttribute("position", { x: -0.4, y: -0.24, z: 0.05 });
    return entity_1;
  }
})