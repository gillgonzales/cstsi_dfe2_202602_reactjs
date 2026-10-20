import React, { useContext } from "react";
import { render } from 'vitest-browser-react'
import { userEvent } from '@vitest/browser/context'
import { describe, test, expect, vi } from "vitest";
import { SearchBar } from "../../src/components/SearchBar/SearchBar";
import ProdutosProvider, { ProdutosContext } from "../../src/context/ProdutosProvider";


describe("SearchBar Testes", () => {
    test("Teste simples de renderização!", async () => {
        const { getByText } = render(
            <SearchBar filterFunction={() => { }} />
        )
        await expect.element(getByText('Pesquisar')).toBeInTheDocument()

    });

    test("Teste para botão desabilitado!", async () => {
        const { getByPlaceholder, getByRole } = render(
            <SearchBar filterFunction={() => { }} disabled={true}/>
        )

        const searchInput = getByPlaceholder('Pesquisar produtos')
        // const searchInputByRole = getByRole('input',{type:'search'})

        await expect.element(searchInput).toBeDisabled()
        
    });

    test("Teste para botão desabilitado, verifica atributo disable!", async () => {
        const { getByPlaceholder } = render(
            <SearchBar filterFunction={() => { }} disabled={true}/>
        )

        const searchInput = getByPlaceholder('Pesquisar produtos')
        // const searchInputByRole = getByRole('input',{type:'search'})

        await expect.element(searchInput).toHaveAttribute('disabled')
        
    });


    const WrappedSearchBar = () => {
        const { filterProdutos } = useContext(ProdutosContext)
        return (<SearchBar filterFunction={filterProdutos} />)
    }

    test("Teste com Provider de Produtos!", async () => {
        const consoleSpy = vi.spyOn(console, "log")
        const { getByRole, getByPlaceholder } = render(
            <ProdutosProvider>
                <WrappedSearchBar />
            </ProdutosProvider>
        )

        const searchInput = getByPlaceholder('Pesquisar produtos')
        const searchTerm = 'Dados Mocados.'

        await expect.element(getByRole('button', { name: 'Pesquisar' })).toBeInTheDocument()
        await expect.element(searchInput).toBeInTheDocument()

        await userEvent.type(searchInput, searchTerm)

        try {
            consoleSpy.mockClear()
            await userEvent.click(getByRole('button', { name: 'Pesquisar' }))

            expect(consoleSpy).toHaveBeenCalledWith("Filtrando Produtos do Contexto!!!")
            expect(consoleSpy).toHaveBeenCalledWith(searchTerm)
            
        } finally {
            consoleSpy.mockRestore()
        }

    });
});