import PropTypes from 'prop-types';
import './edit-user-data.scss';
import { useCallback, useEffect, useState } from 'react';

const EditUserData = ({ userData, activateUser,upLoadImg }) => {
  const [editedUserData, setEditedUserData] = useState({ lastname: '', firstname: '', area: '' });
  const [shortData, setShortData] = useState({ lastname: '', firstname: '' });

  useEffect(() => {
    if (userData) {
      setEditedUserData((prev) => ({ ...prev, ...userData }));
      setShortData((prev) => ({
        ...prev,
        lastname: userData.lastname || '',
        firstname: userData.firstname || ''
      }));
    }
  }, [userData]);

  useEffect(()=>{
    const savedImage = localStorage.getItem('uploadedImg')
    setImgUrlLink(savedImage)
  },[])
  const dataHandler = useCallback((e) => {
    const { name, value } = e.target;
    setEditedUserData((prev) => ({ ...prev, [name]: value }));
    if (name === 'lastname' || name === 'firstname') {
      setShortData((prev) => ({ ...prev, [name]: value }));
    }
  }, []);

  const [imgUrlLink,setImgUrlLink] = useState('')
  const saveData = (e) => {
    e.preventDefault();
    localStorage.setItem('editedData',editedUserData)
    activateUser(editedUserData);
    upLoadImg(imgUrlLink)

  };

  const handleImg = useCallback((e) => {
    const img = e.target.files[0];
    if (img) {
      const imgURL = URL.createObjectURL(img);
      localStorage.setItem('uploadedImg',imgURL)
      setImgUrlLink(imgURL)
    }
  },[])

  return (
    <div className="edit__data">
      <form onSubmit={saveData} className="edit__data-form">
        <div className="form__img">
          <div className="form__img-section">
            <label htmlFor="imgInp" className="img-label">
              {(!imgUrlLink)?((shortData.lastname?.at(0) || '') + (shortData.firstname?.at(0) || '')):<img style={{width: '106px', height: '106px', borderRadius: '50%'}} src={imgUrlLink} alt="ave" />}
              

            </label>
            <input type="file" name="img" id="imgInp" onChange={handleImg} className="img-inp" />
          </div>
          <div className="form__img-descr">
            <p className="form__img-descr--title">Загрузить фото профиля</p>
            <p className="form__img-descr--info">Вы можете использовать форматы: .jpeg, .jpg, .png, .svg</p>
          </div>
        </div>
        <div className="form__info">
          <input
            onChange={dataHandler}
            type="text"
            name="lastname"
            value={editedUserData.lastname}
            className="form__info-item"
          />
          <input
            onChange={dataHandler}
            type="text"
            name="firstname"
            value={editedUserData.firstname}
            className="form__info-item"
          />
          <select
            onChange={dataHandler}
            className="form__info-item"
            name="area"
            value={editedUserData.area || ''}
          >
            <option value="Ташкент">Ташкент</option>
            <option value="Кибрай">Кибрай</option>
          </select>
          <button type="submit" className="form__info-save">
            Сохранить изменения
          </button>
        </div>
      </form>
    </div>
  );
};

EditUserData.propTypes = {
  userData: PropTypes.object.isRequired,
  activateUser: PropTypes.func.isRequired,
  upLoadImg: PropTypes.func
};

export default EditUserData;
