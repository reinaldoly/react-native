import { MODIFICA_ADICIONA_CONTATO_EMAIL, ADICIONA_CONTATO_ERRO } from '../actions/types';

const INITIAL_STATE = {
    adicionar_contato_email: '',
    cadastro_resultado_txt_erro: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MODIFICA_ADICIONA_CONTATO_EMAIL:
            return { ...state, adicionar_contato_email: action.payload };
        case ADICIONA_CONTATO_ERRO:
            return { ...state, cadastro_resultado_txt_erro: action.payload };
        default:
            return state;
    }
};
