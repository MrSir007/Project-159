AFRAME.registerComponent("cursor-listener", {
  schema: {
    selectedItemId: { default: "", type: "string" }
  },
  init: function () {
    this.handleMouseEnterEvents()
    this.handleMouseLeaveEvents()
  },
  handleMouseEnterEvents: function () {
    this.el.addEventListener("mouseenter", () => {
      const id = this.el.getAttribute("id")
      const placesId = ["superman", "spiderman", "captain_america", "hulk"]
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container")
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        })
        this.el.setAttribute("material", {
          color: "#1565c0",
          opacity: 1,
        })
      }
    })
  },
  handleMouseLeaveEvents: function () {
    this.el.addEventListener("mouseleave", () => {
      const { selectedItemId } = this.data
      if (selectedItemId) {
        const el = document.querySelector(`#${selectedItemId}`)
        const id = el.getAttribute('id')
        if (id == selectedItemId) {
          el.setAttribute('material', {color: 'lightgrey', opacity: 1})
        } 
      }
    })
  },
  handleClickEvents: function() {
    this.el.addEventListener('click', (event) => {
      const { selectedItemId } = this.data
      const fadeBackground = document.querySelector("#fadeBackground")
      const title = document.querySelector("#app-title")
      const cursor = document.querySelector("#camera-cursor")
      if (selectedItemId) {
        fadeBackground.setAttribute("visible", true);
        fadeBackground.setAttribute("info", {
          itemId: selectedItemId,
        })
        title.setAttribute("visible", false);
        cursor.setAttribute("position", { x: 0, y: 0, z: -1 });
        cursor.setAttribute("geometry", {
          radiusInner: 0.03,
          radiusOuter: 0.04,
        })
      } else {
        fadeBackground.setAttribute("visible", false);
        title.setAttribute("visible", true);
        cursor.setAttribute("position", { x: 0, y: 0, z: -3 });
        cursor.setAttribute("geometry", {
          radiusInner: 0.08,
          radiusOuter: 0.12,
        })
      }
    })
  }
})