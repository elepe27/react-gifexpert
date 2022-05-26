import { shallow } from "enzyme/build";
import '@testing-library/jest-dom';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe('pruebas en componente <GifGrid/>', () => {

    let categories = 'One Piece';
    
    test('debe cargar correctamente el componente', () => { 
        

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });
        
        const wrapper = shallow(<GifGrid category={ categories } />)
        expect(wrapper).toMatchSnapshot();
        
    });

    test('debe de mostrar items cuando se cargan imagenes useFetchGifs', () => { 

        
        const gifs = [{
            id:'ABC',
            url: 'https://localhost/foto.jpg'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrid category={ categories } />);
        

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('p').exists() ).toBe( false );
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );


       
        
    });

    
    
});