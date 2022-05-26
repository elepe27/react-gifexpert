import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en helper getGifs', () => {
   
    test('debe de traer 10 elementos', async () => {
        
        const gifs = await getGifs('One Piece');
        
        expect( gifs.length ).toBe( 10 );
        
    });

    test('debe de no traer elementos sin enviar el prop', async () => {
        
        const gifs = await getGifs('');
        

        expect( gifs.length ).toBe( 0 );
        
        
    });

});