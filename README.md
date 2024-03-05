<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tg app</title>
    <link rel="stylesheet" href="./accsets/css/main.css">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
</head>
<body>



<div class="container">
        <div class="logo d_f">
            <div class="block-1">
                <div class="x">
                    <i class='bx bx-x'></i>
                </div>
                <div class="logoText">
                     <span>LogoText</span>
                </div>
            </div>
            <div class="block-2">
                <div class="dots">
                    <i class='bx bx-dots-vertical-rounded'></i>
                </div>
            </div>
        </div>
        <div class="container-balans d_f">
            <div class="filter-blog">
                <div class="img-filter center">
                    <img onclick="openFilter()" src="./accsets/image/filter.svg" alt="">
                </div>
                <div class="name-filter">
                    <span onclick="openFilter()">Фильтры</span>
                </div>
            </div>
            <div class="balans">
                <div class="kashelog center">
                    <img src="./accsets/image/kashelok.svg" alt="">
                </div>
                <div class="price center">
                    <span>2000</span>
                </div>
                <div class="user">
                   <div class="user-img center">
                      <img  onclick="openNavbar()"  src="./accsets/image/user.svg" alt="">
                   </div>
                </div>
            </div>
        </div>
    </div>
    <div class="card-container">
            <div class="card-padding">
                <div class="card-day d_f">
                    <div class="day center">
                        <span>вчера</span>
                    </div>
                    <div class="love center">
                        <i id="love" onclick="love()" class='bx bx-heart' style='color:#83A1C9'  ></i>
                        <i onclick="loveExit()" id="none" class='bx bxs-heart'  ></i>
                    </div>
                </div>
                <div class="card-title">
                    <span>Разработчик, продакт</span>
                </div>
                <div class="card-title-2">
                    <span>Senior</span>
                </div>
                <div class="card-img-back"></div>
                <div class="card-title-3">
                    <span>Интересы:</span>
                </div>
                <div class="card-blog-df">
                    <button>Robotics</button>
                    <button>AR/VR</button>
                    <button>Web3</button>
                    <button>Bigdata</button>
                    <button>GameDev</button>
                </div>
                <div class="watch" id="watchNone">
                    <span onclick="openWatch()">Смотреть</span>
                </div>
                <div class="indo-watch" id="watch-1">
                    <div class="info-test-p">
                        <p>Полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.
                            Выводим полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.</p>
                    </div>
                    <div class="info-test-p">
                        <p>Полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.
                            Выводим полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.</p>
                    </div>
                    <div class="info-text-p-left">
                        <p>Интересует стадия проекта:</p>
                        <div class="left-text">
                            <span>Учебный проект</span> <br>
                            <span>Хакатон</span> <br>
                            <span>Идея / концепция</span> <br>
                            <span>Запуск стартапа / нет продаж</span> <br>
                            <span>Есть первые пользователи / продажи</span> <br>
                            <span>Масштабирование</span> <br>
                            <span>Любой</span> <br>
                        </div>
                    </div>
                    <div class="location">
                        <span class="info-text-p-left-p" id="bot">Локация:</span> <br>
                        <span class="left-text-span">Россия, Москва</span>
                    </div>
                    <div class="mativatsion">
                        <div class="tepa-mativatsion d_f">
                            <div class="name-mativatsion center">
                                <span class="info-text-p-left-p">Мотивация:</span>
                            </div>
                            <div class="img-mativatsion center" onclick="openVapros()">
                                <img src="./accsets/image/Qstn.svg" alt="">
                            </div>
                        </div>
                        <div class="mativatsiya-btn">
                            <button>Опцион</button>
                            <button>Фантомный опцион</button>
                            <button>Партнерство</button>
                        </div>
                        <div class="location-icon " id="yopil1" >
                            <div class="locatioin-name center">
                                <span onclick="openPakazad()">Показать контакты</span>
                            </div>
                            <div class="location-i center">
                                <i class='bx bxs-chevron-right'   ></i>
                            </div>
                        </div>
                        <div class="location-icon " id="pakazad">
                            <div class="locatioin-name center">
                                <span>@username</span>
                            </div>
                            <div class="location-i center">
                                <i class='bx bxs-chevron-right'   ></i>
                            </div>
                        </div>
                        <div class="location-icon " id="pakazad1">
                            <div class="locatioin-name center">
                                <span>https://ссылка-на.проект</span>
                            </div>
                            <div class="location-i center">
                                <i class='bx bxs-chevron-right'   ></i>
                            </div>
                        </div>
                    </div>
                    <div class="line-card"></div>
                    <div class="close-card">
                        <span onclick="closeWatch()">Свернуть</span>
                    </div>
                </div>
            </div>
            
</div>
    <div class="modal-vapros" id="vaprosNone">
        <div class="vapros-df">
            <div class="vapros-dv">
                <div class="vapros-block-1">
                    <span class="span1-vapros"><span class="span2-vapros">Опцион на долю участия в компании</span> – принятие сотрудника в число соучредителей компании через какое-то время при условии получения желаемого результата его работы.</span>
                </div>
                <div class="vapros-block-1">
                    <span class="span1-vapros">Договор оформляется нотариально и подписывается всеми учредителями.
                        Действует право страны, в юрисдикции которой зарегистрирована компания.</span>
                </div>
                <div class="vapros-block-1">
                    <span class="span1-vapros"><span class="span2-vapros">Фантомный опцион</span> – доля в прибыли компании. 
                    Может быть нескольких видов:</span>
                    <ul class="ul-vapros">
                        <li class="span1-vapros">получение фиксированной выплаты при достижении определенных результатов</li>
                        <li class="span1-vapros">получение определенной доли от прибыли компании или проценте от увеличения оборота</li>
                    </ul>
                    <span class="span1-vapros ss">Оформляется как отдельный договор или приложение к трудовому договору.</span>
                </div>
                <div class="vapros-block-1 ss">
                    <span class="span1-vapros"><span class="span2-vapros">Партнерство</span> – договор между сторонами о сотрудничестве, правах и обязанностях, который может быть как письменным (предпочтительно), так и устным.</span>
                </div>
                <div class="vapros-block-2 ">
                    <button onclick="ok()">Понятно</button>
                </div>
            </div>
        </div>
    </div>
    <div class="card-container">
        <div class="card-padding">
            <div class="card-day d_f">
                <div class="day center">
                    <span>23 ч</span>
                </div>
                <div class="love center">
                    <i id="love2" onclick="love2()" class='bx bx-heart' style='color:#83A1C9'  ></i>
                    <i onclick="loveExit2()" id="none2" class='bx bxs-heart'  ></i>
                </div>
            </div>
            <div class="card-title">
                <span>Название проекта из Шага 3 максимум в две строчки</span>
            </div>
            <div class="card-title-2-1">
                <span class="with">Нужен:</span> <span class="with2">фандрейзер, СТО</span>
            </div>
            <div class="card-img-back-2"></div>
            <div class="card-title-3">
                <span >Есть первые пользователи / продажи</span>
            </div>
            <div class="card-blog-df">
                <button>Robotics</button>
                <button>AR/VR</button>
                <button>Web3</button>
                <button>Bigdata</button>
                <button>GameDev</button>
            </div>
            <div class="watch" id="watchNone2">
                <span onclick="openWatch2()">Смотреть</span>
            </div>
            <div class="indo-watch" id="watch-2">
                <div class="info-test-p">
                    <p>Полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.
                        Выводим полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.</p>
                </div>
                <div class="info-test-p">
                    <p>Полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.
                        Выводим полный текст поста на ограниченное количество символов. Счетчик оставшихся символов должен работать в режиме реального времени.</p>
                </div>
                <div class="info-text-p-left">
                    <p>Стадия проекта:</p>
                    <div class="left-text-2">
                        <span>запуск стартапа / нет продаж</span>
                    </div>
                </div>
                <div class="location">
                    <span class="info-text-p-left-p" id="bot">Локация:</span> <br>
                    <span class="left-text-span">Россия, Москва</span>
                </div>
                <div class="mativatsion">
                    <div class="tepa-mativatsion d_f">
                        <div class="name-mativatsion center">
                            <span class="info-text-p-left-p">Мотивация:</span>
                        </div>
                        <div class="img-mativatsion center" onclick="openVapros()">
                            <img src="./accsets/image/Qstn.svg" alt="">
                        </div>
                    </div>
                    
<div class="mativatsiya-btn">
                        <button>Опцион</button>
                        <button>Фантомный опцион</button>
                        <button>Партнерство</button>
                    </div>
                    <div class="location-icon ">
                        <div class="locatioin-name center">
                            <span>@username</span>
                        </div>
                        <div class="location-i center">
                            <i class='bx bxs-chevron-right'   ></i>
                        </div>
                    </div>
                    <div class="location-icon ">
                        <div class="locatioin-name center">
                            <span>https://ссылка-на.проект</span>
                        </div>
                        <div class="location-i center">
                            <i class='bx bxs-chevron-right'   ></i>
                        </div>
                    </div>
                </div>
                <div class="line-card"></div>
                <div class="close-card">
                    <span onclick="closeWatch2()">Свернуть</span>
                </div>
            </div>
        </div>

</div>
<div class="btn-noviy">
    <div class="btn-noviy-cihi">
        <button onclick="openObnav()">+ Новое объявление</button>
    </div>
</div>
<div class="modal-obnavleniya" id="openObnav">
    <div class="center-menu" onclick="closeObnav()">
        <div class="center-text">
            <button onclick="ekran1()">Ищу кофаундера / Есть проект</button> <br>
            <button onclick="ekran2()">Буду кофаундером / Ищу проект</button>
        </div>
    </div>
</div>

<div class="filter-modal" id="filterModal" >
    <div class="laal">
           <div class="filter-x">
            <i  onclick="tes()" class='bx bx-x'></i>
           </div> 
        <div class="filter-modla-ichi">
            <div class="filter-block-1">
                <span>Фильтры</span>
            </div>
            <div class="filter-block-2">
                <div class="tepa-block d_f" onclick="openBlock1()">
                    <div class="name-tepa">
                        <span>Что ищем</span>
                    </div>
                    <div class="name-icon">
                        <i class='bx bxs-chevron-right'></i>
                    </div>
                </div>
                <div class="pas-qismi" id="pas" style="display: none;">
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Ищу кофаундера (есть проект)</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Буду кофаундером (ищу проект)</p>
                            </div>
                        </div>
                    </div>
                </div>
                

            </div>
<div class="line-filter"></div>
            <div class="filter-block-2">
                <div class="tepa-block d_f" onclick="openBlock2()">
                    <div class="name-tepa">
                        <span >Направления</span>
                    </div>
                    <div class="name-icon">
                        <i id="transdomt"  class='bx bxs-chevron-right'></i>
                    </div>
                </div>
                <div class="pas-qismi-2" id="pas2" style="display: none;">
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>3D</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>AeroTech</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>AeroTech</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>AI</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Android</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>AR / VR / MR</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Architecture</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Audio / Video</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>AutoTech</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>BigData</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Blockchain</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Business</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line-filter"></div>
            <div class="filter-block-2">
                <div class="tepa-block d_f" onclick="openBlock3()">
                    <div class="name-tepa">
                        <span >Компетенции</span>
                    </div>
                    <div class="name-icon">
                        <i id="transdomt2"  class='bx bxs-chevron-right'></i>
                    </div>
                </div>
                <div class="pas-qismi-2" id="pas3" style="display: none;">
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Product/Project</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Developer</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Sales</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Designer</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Researcher</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Economist</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Engineer</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Scientist</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Lawyer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="line-filter"></div>
            <div class="filter-block-2">
                <div class="tepa-block d_f" onclick="openBlock4()">
                    <div class="name-tepa">
                        <span >Стадия проекта</span>
                    </div>
                    <div class="name-icon">
                        <i id="transdomt3"  class='bx bxs-chevron-right'></i>
                    </div>
                </div>
                <div class="pas-qismi-2" id="pas4" style="display: none;">
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Учебный проект</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Хакатон</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Идея / концепция</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Запуск стартапа / нет продаж</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Есть первые пользователи / продажи</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Масштабирование</p>
                            </div>
                        </div>
                    </div>
                    <div class="tepa-block-2">
                        <div class="checkbox-blog-1">
                            <div class="input-checkbox">
                                <span style="display: none;" id="span1"><i class='bx bx-check'></i></span>
                            </div>
                            <div class="input-text">
                                <p>Любой</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="menu-navbar" id="menuNav">
    
<div class="x-close">
    <i onclick="closeNavbar()" class='bx bx-x' ></i>
</div>
    <div class="menu-nav">
        <div class="menu-block">
            <div class="menu-block-t1">
                <div class="love-icon">
                    <img src="./accsets/image/ACTION1.svg" alt="">
                </div>
                <div class="name-menu">
                    <span>Избранные</span>
                </div>
                <div class="count-menu">
                    <span>500</span>
                </div>
            </div>
            <div class="line-menu"></div>
            <div class="menu-block-t1">
                <div class="love-icon">
                    <img src="./accsets/image/VIEW.svg" alt="">
                </div>
                <div class="name-menu">
                    <span>Открытые</span>
                </div>
                <div class="count-menu">
                    <span>500</span>
                </div>
            </div>
            <div class="line-menu"></div>
            <div class="menu-block-t1">
                <div class="love-icon">
                    <img src="./accsets/image/ACTION (2).svg" alt="">
                </div>
                <div class="name-menu">
                    <span>Мои посты</span>
                </div>
                <div class="count-menu">
                    <span>25</span>
                </div>
            </div>
            <div class="line-menu"></div>
            <div class="menu-block-t1">
                <div class="love-icon">
                    <img src="./accsets/image/Vector.svg" alt="">
                </div>
                <div class="name-menu">
                    <span>Добавить пост</span>
                </div>
            </div>
            <div class="line-menu"></div>
            <div class="menu-block-t1">
                <div class="love-icon">
                    <img src="./accsets/image/ACTION (3).svg" alt="">
                </div>
                <div class="name-menu">
                    <span>Пополнить баланс</span>
                </div>
            </div>
            <div class="line-menu"></div>
            <div class="menu-block-t1">
                <div class="love-icon">
                    <img src="./accsets/image/COMMUNICATION.svg" alt="">
                </div>
                <div class="name-menu">
                    <span>Поддержка</span>
                </div>
            </div>
            <div class="line-menu"></div>
        </div>
    </div>
</div>









    <script src="./accsets/js/main.js"></script>
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
</body>
</html>
