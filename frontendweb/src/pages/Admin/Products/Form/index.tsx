import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Product } from 'types/products';
import { requestBackend } from 'util/requests';

import './styles.css';

const Form = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>();

  const onSubmit = (formData: Product) => {
    const data = {
      ...formData,
      imgUrl:
        'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/2-big.jpg',
      categories: [{ id: 1, nome: '' }],
    };

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/products',
      data,
      withCredentials: true,
    };

    requestBackend(config).then(() => {
      history.push('/admin/products');
    });
  };

  const handleCancel = () => {
    history.push('/admin/products');
  };

  return (
    <div className="product-crud-container">
      <div className="base-card product-crud-form-card">
        <h1 className="product-crud-form-title">Dados do produto</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row product-crud-inputs-container">
            <div className="col-lg-6 product-crud-inputs-left-container">
              <div className="margim-bottom-30">
                <input
                  {...register('name', {
                    required: 'campo obrigatório', //Essa mensagem sera impressa por error.name.message
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Nome do produto"
                  name="name"
                />
                <div className="invalid-feedback d-block">
                  {errors.name?.message}
                </div>
              </div>
              <div className="margim-bottom-30">
                <input
                  {...register('price', {
                    required: 'campo obrigatório',
                  })}
                  type="text"
                  className={`form-control base-input ${
                    errors.name ? 'is-invalid' : ''
                  }`}
                  placeholder="Preço"
                  name="price"
                />
                <div className="invalid-feedback d-block">
                  {errors.price?.message}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <textarea
                rows={10}
                {...register('description', {
                  required: 'campo obrigatório',
                })}
                className={`form-control base-input ${
                  errors.name ? 'is-invalid' : ''
                }`}
                placeholder="Descrição"
                name="description"
              />
              <div className="invalid-feedback d-block">
                {errors.description?.message}
              </div>
            </div>
          </div>
          <div className="product-crud-buttons-container">
            <button
              className="btn btn-outline-danger product-crud-buttons"
              onClick={handleCancel}
            >
              CANCELAR
            </button>
            <button className="btn btn-primary product-crud-buttons text-white">
              SALVAR
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
