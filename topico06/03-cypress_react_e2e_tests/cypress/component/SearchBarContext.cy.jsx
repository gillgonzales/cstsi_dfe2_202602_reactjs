/* eslint-disable no-undef */
import React from 'react'
import { mount } from 'cypress/react'
import { useContext } from 'react'
import ProdutosProvider, { ProdutosContext } from '../../src/context/ProdutosProvider'
import { SearchBar } from '../../src/components/SearchBar/SearchBar'


const WrappedSearhBar = () => {
  const { filterProdutos } = useContext(ProdutosContext)
  return (<SearchBar filterFunction={filterProdutos} />)
}

Cypress.Commands.add('mount', (component) => {
  return mount(<ProdutosProvider>{component}</ProdutosProvider>)
});

describe('<ProdutosProvider><SearchBar/></ProdutosProvider>', () => {
  it('registra o termo digitado e a busca no console', () => {
    // see: https://on.cypress.io/mounting-react

    const busca = 'Dados Mocados'
    
    cy.window().then((win) => {
      cy.stub(win.console, 'log').as('consoleLog')
    })

    cy.mount(<WrappedSearhBar />)
    cy.get('input[type=search]').type(busca)
    cy.get('input[type=search]').should('have.value', busca)
    cy.get('form button').click()

    cy.get('@consoleLog').should('be.calledWith', busca)
    cy.get('@consoleLog').should(
      'be.calledWith',
      'Filtrando Produtos do Contexto!!!'
    )
  })
})