import { shallow } from "enzyme/build";
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en <GifExpertApp/>', () => { 
   
    test('el componente debe mostrarse correctamente', () => { 
       
        const wrapper = shallow(<GifExpertApp/>);

        expect( wrapper ).toMatchSnapshot();
    
    });

    test('debe de mostrar una lista de categorias', () => { 
        
        const categys = ['One Piece','Dragon Ball'];
        const wrapper = shallow(<GifExpertApp defaultCategories={categys}/>);
        
        expect(wrapper).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe (categys.length);
        
    });


    
});