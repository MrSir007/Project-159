AFRAME.registerComponent('tour', {
  init: function() {
    this.placesContainer = this.el
    this.createCards()
  },
  createCards: function() {
    const imageRef = [
      {
        id: 'superman',
        title: 'Superman',
        url: 'assets/superman.jpg'
      },
      {
        id: 'spiderman',
        title: 'Spiderman',
        url: 'assets/spiderman.jpg'
      },
      {
        id: "captain_america",
        title: "Captain America",
        url: "assets/captain_america.jpg",
      },
      {
        id: "hulk",
        title: "Hulk",
        url: "assets/hulk.jpg"
      }
    ]

    let previousXPosition = -60
    for (var item of imageRef) {
      const posX = previousXPosition + 25
      const posY = 4
      const posZ = -40
      const position = {
        x: posX,
        y: posY,
        z: posZ
      }
      previousXPosition = posX

      const border_1 = this.createBorder(position, item.id)
      const image_1 = this.createImage(item)
      border_1.appendChild(image_1)
      const title_1 = this.createTitle(position, item)
      border_1.appendChild(title_1)
      this.placesContainer.appendChild(border_1)
    }
  },
  createBorder: function(position, id) {
    const entity_1 = document.createElement('a-entity')
    entity_1.setAttribute('id', id)
    entity_1.setAttribute('visible', true)
    entity_1.setAttribute('geometry', {primitive: 'ring', radiusInner: 9, radiusOuter: 10})
    entity_1.setAttribute('position', position)
    entity_1.setAttribute('material', { color: 'grey', opacity: 0.4 })
    return entity_1
  },
  createImage: function(item) {
    const entity_1 = document.createElement('a-entity')
    entity_1.setAttribute('visible', true)
    entity_1.setAttribute('geometry', {primitive: 'circle', radius: 9})
    entity_1.setAttribute('material', { src: item.url })
    return entity_1
  },
  createTitle: function(position, item) {
    const entity_1 = document.createElement('a-entity')
    entity_1.setAttribute('text', { font: 'exo2bold', align: 'center', width: 70, color: 'black', value: item.title })
    const positionEL = position
    positionEL.y = -20
    entity_1.setAttribute('position', positionEL)
    entity_1.setAttribute('visible', true)
    return entity_1
  }
})