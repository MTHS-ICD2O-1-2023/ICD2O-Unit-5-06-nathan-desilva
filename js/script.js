// Copyright (c) 2024 Nathan De Silva All rights reserved
//
// Created by: Nathan De Silva
// Created on: May 2024
// This file contains the JS functions for index.html

"use strict"


function myButtonClicked() {
  // input
  const numberA = parseInt(document.getElementById('number-a').value)
  const numberB = parseInt(document.getElementById('number-b').value)
  let counter = 0
  let output = 0

  // process


  while (counter < numberA) {
    output = output + numberB
    counter = counter + 1
  }
  document.getElementById('answer').innerHTML = numberA + " x " + numberB + " = " + output
}
