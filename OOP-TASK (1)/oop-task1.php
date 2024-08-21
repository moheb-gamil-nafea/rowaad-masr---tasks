<?php

/*------------------------------------Task (1)-----------------------------------------*/

class Circle {
    protected float $radius;
    protected string $color;

    public function __construct(float $radius, string $color) {
        $this->radius = $radius;
        $this->color  = $color;
    }
    
    public function setradius(float $radius): void {
        $this->radius = $radius;
    }
    public function getradius(): float {
        return $this->radius;
    }
    public function setcolor(string $color): void {
        $this->color = $color;
    }
    public function getcolor(): string {
        return $this->color;
    }
    public function getarea(): float {
        return pi() * pow($this->radius, 2);
    }
    public function display():void{
        echo"Circle Radius = " . $this->getRadius() . "<br>" . 
            "Circle Color = " . $this->getColor() . "<br>" . 
            "Circle Area = " . $this->getArea();    
    }

}

class Cylinder extends Circle{
    private float $height; 
    public function __construct($radius,  float $height, $color) {
        parent::__construct($radius, $color);
        $this->height = $height;
    }
    public function setheight(float $height): void {
        $this->height = $height;
    }
    public function getheight(): float {
        return $this->height;
    }
    public function getvolume(): float {
        return ($this->getarea() * $this->height) ;
    }
    public function display():void{
        echo"Circle Radius = " . $this->getRadius() . "<br>" . 
            "Circle Color = " . $this->getColor() . "<br>" . 
            "Circle Area = " . $this->getArea() . "<br>" . 
            "Cylinder Volume = " . $this->getvolume() ;
    }

}
$cylinder = new Cylinder(3.5 , 1.3 ,"Red");
$cylinder -> display();



