const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  physics: { default: 'arcade', arcade: { debug: false } },
  scene: {
    preload: function(){ this.load.image('hero','assets/hero.png'); this.load.image('enemy','assets/enemy.png') },
    create: function(){ this.add.image(400,300,'hero'); this.add.image(500,300,'enemy') },
    update: function() {}
  }
}
new Phaser.Game(config)
