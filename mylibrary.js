function hasCollided(bullet, wall){
    bulletRightEdge=bullet.x +bullet.width;
    wall=wall.x
    if (bullet>=wall){
      return true
    }
    return false;
  }