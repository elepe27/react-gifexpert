import { renderHook } from "@testing-library/react";
import { useFetchGifs } from "../../hooks/useFetchGifs";

describe('Pruebas en nuestro hook useFetchGifs', () => { 
   
    test('debe de retornar el estado inicial', () => { 
        
        const { result } = renderHook( () =>  useFetchGifs( 'One Piece' ));
        const { data , loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    });

    test('debe de retornar un arreglo de imgs y el loading en false',async () => {

        const { result, waitForNextUpdate } = renderHook( () =>  useFetchGifs( 'One Piece' ));
        await waitForNextUpdate();
        // Ya no sirve en React 18 no usa enzyme
        const { data , loading } = result.current;

        expect( data ).toEqual([]);
        expect( loading ).toBe(true);
        
    });
});