# Привет! Это инструкция по запуску и работе с тестовым проектом SevenWinds :)

## Запуск и загрузка 
1. Скачайте zip или склонируйте репозиторий.
2. Вам нужен ```npm```
3. Загрузите зависимости (из них там rtkq)  -> ```npm install react-redux``` -> ```npm install @reduxjs/toolkit```
4. Если что-то не работает попробуйте ```npm i react-scripts```
5. Запускайте

## Гайд по работе 
- Рабочее поле - центральное. В нем уже есть какие-то папки (строки, но я называю их папками), но вы наблюдаете только одну.
- Вы можете "открыть" папку, если нажмете в любое место правее на ее уровне (курсор будет поинтером)
- В открытом виде у папки появляется описание и дочерние элементы (по умолчанию они в закрытом виде).
- Если навестись на саму иконку папки, то появятся дополнительные возможности - Добавление дочернего элемента / Редактирование папки / Удаление папки и дочерних элементов.
  
**-Добавление-** Нажать ПКМ 1 раз по иконке папки - у папки появится дочерний элемент (если она в закрытом виде, то его не будет видно. Откройте папку)

**-Редактирование папки-** Нажать ПКМ 2 раза (быстро) по иконке папки - папка перейдет в edit mode. В нем изменяйте значения полей. Чтобы выйти из него - щелкните по любому свободному пространству.
                          Из этого режима нельзя выйти, пока какое-то из полей пустое. В нем недоступно создание дочерних элементов.
                          
**-Удаление папки-** Нажать 1 раз по иконке ведра - папка и все ее дочерние элементы удалятся.

## О грустном: 
Актуализация локальных данных. У меня получилось это сделать, но из-за струкруты данных, при попытке добавления дочернего элемента, между фактическим добавлением и обновлением строк 
проходило большое количество времени. В результате я использовала refetch. Обидно(

## О веселом: 
Отдельный респект за такое тестовое. Оно показалось мне непростым и интересным) Особенно интересной мне показалась задача с древовидной структурой папок через details summary. 

С нетерпением жду обратной связи)
