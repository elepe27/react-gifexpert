import { shallow } from "enzyme/build";
import { AddCategory } from "../../components/AddCategory";

describe('Pruebas en el componente <AddCategory/>', () => {

    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={setCategories} />);

    beforeEach(() => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={setCategories} />);
    })


    test('debe de mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('debe de cambiar la caja de texto', () => {

        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        // Le mandamos al target un valor
        input.simulate('change', {
            target:
                { value }
        });

        // Verificamos si se realizo el cambio en el parrafo,
        // el cual modifico la caja de texto

        expect(wrapper.find('p').text().trim()).toBe(value);


    });

    test('no debe de postear la información onSubmit', () => {

        wrapper.find('form').simulate('submit', { preventDefault() { } });



        expect(setCategories).not.toHaveBeenCalled();


    });

    test('debe de llamar el setCategories y limpiar la caja de texto', () => {

        const value = 'Testing';
        const input = wrapper.find('input');

        input.simulate('change', {
            target: {
                value
            }
        });

        wrapper.find('form').simulate('submit', { preventDefault() { } });

        expect( setCategories ).toHaveBeenCalled();
        expect(input.prop('value')).toBe('');


    });





});