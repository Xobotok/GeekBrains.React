import './Header.css';
import './Header_consts';
import React, { Component } from 'react';

export default class Header extends Component {
  loginClick() {
      $(document).ready(function() {
          $("#myModalBox").modal('show');
      });
  }

  render () {
      const { items } = this.props;
    return (
        <div className="row">
          <div className="header__logo col-lg-3">
            <h3 className="header__logo_title">Metr<span>o</span>Blog</h3>
          </div>
          <div className="header__login col-lg-3">
            <a href="#myModalBox" className="header__login_button btn btn-primary" data-toggle="modal">Login</a>
          </div>
          <div className="header__navigation col-lg-6">
            <ul>
                {items.map(item => <li><a href = {item.link}>{item.title}</a></li>)}
            </ul>
          </div>
            <div id="myModalBox" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-hidden="true">×</button>
                            <h4 className="modal-title">Заголовок модального окна</h4>
                        </div>
                        <div className="modal-body">
                            Содержимое модального окна...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default" data-dismiss="modal">Закрыть</button>
                            <button type="button" className="btn btn-primary">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  };
};