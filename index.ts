#!/usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Adventure Game!");
console.log("Delveloped by Saifullah Ashique😍")

class Player{
    name: string;
    fuel: number= 100;

    constructor(name: string){
        this.name = name;
    }

    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel;
    }

    fuelIncrease(){
        let fuel = this.fuel + 25
        this.fuel = fuel;
    }
}

class Oponent{
    name: string;
    fuel: number= 100;
    
    constructor(name: string){
        this.name = name;
    }
    
    fuelDecrease(){
        let fuel = this.fuel - 25
        this.fuel = fuel;
    }

}

let player = await inquirer.prompt([
    {
        name: "name",
        type: "input",
        message: "What is your name?:"
    }
])

let oponent = await inquirer.prompt([
    {
        name: "select",
        type: "list",
        message: "Who do you want to play against?",
        choices: ["Skeleton", "Alien", "Zombie"]
    }
]) 

let p1 = new Player(player.name);
let o1 = new Oponent(oponent.select);

do{
    // Skeleton
    if(oponent.select === "Skeleton"){
        let response = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "What do you want to do?",
                choices: ["Attack", "Drink Portion", "Run for your life...."]
            }
        ])
        if(response.action === "Attack"){
            console.log(player.name + " has " + p1.fuel + " fuel left");
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease();
                console.log(player.name + " You have lost 25 score of your fuel ");
                if(p1.fuel <= 0){
                    console.log(`
                    *****************Try Again*****************\n
                    \t \t You lost the game!😕`)
                    process.exit();
                }
            }
            else if(num <= 0){
                o1.fuelDecrease();
                console.log(oponent.select + " has " + o1.fuel + " fuel left");
                if(o1.fuel <= 0){
                    console.log(`
                    *****************Congratulations*****************\n
                    \t \t You won the game!👏`)
                    process.exit();
                }
            }
        }
        else if(response.action === "Drink Portion"){
            console.log(player.name + " is drinking a portion " + "with the fuel score of " + p1.fuel);
            p1.fuelIncrease();
            console.log(`Now your fuel score is ${p1.fuel}`);
            }
            else if(response.action === "Run for your life...."){
                console.log("You have choosed Run for your life it means you lost the game please try again for better luck!.")
                process.exit();
            }
        }

    // Alien
    if(oponent.select === "Alien"){
        let response = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "What do you want to do?",
                choices: ["Attack", "Drink Portion", "Run for your life...."]
            }
        ])
        if(response.action === "Attack"){
            console.log(player.name + " has " + p1.fuel + " fuel left");
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease();
                console.log(player.name + " You have lost 25 score of your fuel ");
                if(p1.fuel <= 0){
                    console.log(`
                    *****************Try Again*****************\n
                    \t \t You lost the game!😕`)
                    process.exit();
                }
            }
            else if(num <= 0){
                o1.fuelDecrease();
                console.log(oponent.select + " has " + o1.fuel + " fuel left");
                if(o1.fuel <= 0){
                    console.log(`
                    *****************Congratulations*****************\n
                    \t \t You won the game!👏`)
                    process.exit();
                }
            }

        }
            else if(response.action === "Drink Portion"){
                console.log(player.name + " is drinking a portion " + "with the fuel score of " + p1.fuel);
                p1.fuelIncrease();
                console.log(`Now your fuel score is ${p1.fuel}`);
                }

            else if(response.action === "Run for your life...."){
                console.log("You have choosed Run for your life it means you lost the game please try again for better luck!.")
            }
            process.exit();
        }

    // Zombie
    if(oponent.select === "Zombie"){
        let response = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "What do you want to do?",
                choices: ["Attack", "Drink Portion", "Run for your life...."]
            }
        ])
        if(response.action === "Attack"){
            console.log(player.name + " has " + p1.fuel + " fuel left");
            let num = Math.floor(Math.random() * 2)
            if(num > 0){
                p1.fuelDecrease();
                console.log(player.name + " You have lost 25 score of your fuel ");
                if(p1.fuel <= 0){
                    console.log(`
                    *****************Try Again*****************\n
                    \t \t You lost the game!😕`)
                    process.exit();
                }
            }
            else if(num <= 0){
                o1.fuelDecrease();
                console.log(oponent.select + " has " + o1.fuel + " fuel left");
                if(o1.fuel <= 0){
                    console.log(`
                    *****************Congratulations*****************\n
                    \t \t You won the game!👏`)
                    process.exit();
                }
            }

        }
            else if(response.action === "Drink Portion"){
                console.log(player.name + " is drinking a portion " + "with the fuel score of " + p1.fuel);
                p1.fuelIncrease();
                console.log(`Now your fuel score is ${p1.fuel}`);
                }

            else if(response.action === "Run for your life...."){
                console.log("You have choosed Run for your life it means you lost the game please try again for better luck!.")
            }
            process.exit();
        }
    }while(true);