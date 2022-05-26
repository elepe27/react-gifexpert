import { shallow } from 'enzyme/build';
import {GifGridItem} from '../../components/GifGridItem'


describe('Pruebas en GifGridItem', () => {
   
    const title = "Imagen de goku";
    const url = "https://localhost/algo.jpg"
    const wrapper = shallow(<GifGridItem title={ title } url={ url }/>);
    
    test('debe de mostrar el componente correctamente', () => {


        expect( wrapper ).toMatchSnapshot();
        
    });

    test('debe de tener un parrafo con el titulo', () => {
    
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );
        
        
    });

    test('debe tener la imagen igual al url y alt de los props', () => {
       
        
        const img = wrapper.find('img');
        // console.log( img.prop('src') );
        
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });

    test('debe tener animate__fadeIn', () => {
       const div = wrapper.find('div');
       expect(div.prop('className').includes('animate__fadeIn')).toBe(true);
    //    expect( div.prop('class').contain() )
        
    });
    
});