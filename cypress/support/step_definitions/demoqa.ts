// Cypress reference
/// <reference types="cypress" />
// Given
import { Given } from 'cypress-cucumber-preprocessor/steps'

Given(`demoqa page is opened`, () => {
  cy.visit('https://demoqa.com/')
});