(function () {
    'use strict';

    var test = {
        data: {
            title: 'Тест по программированию',
            questions: [
                {
                    title: '1. Вопрос №1',
                    answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
                },
                {
                    title: '2. Вопрос №2',
                    answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
                },
                {
                    title: '3. Вопрос №3',
                    answers: ['Вариант овтета 1', 'Вариант овтета 2']
                }
            ]
        },
        
        createStructure: function () {
            var elem = document.createElement('div');
            elem.classList.add('wrapper');
            var body = document.body;
            body.insertBefore(elem, body.children[0]);
        },
        
        showTestTitle: function () {
            var elem = document.createElement('h2');
            elem.classList.add('header');
            elem.innerHTML = this.data.title;
            var wrapper = document.querySelector('.wrapper');
            wrapper.appendChild(elem);
        },
        showTestQuestions: function () {
            for (var i = 0, length = this.data.questions.length; i < length; i++) {
                var header = document.createElement('h3');
                header.classList.add('ques_header');
                header.innerHTML = this.data.questions[i].title;
                var wrapper = document.querySelector('.wrapper');
                wrapper.appendChild(header);

                for ( var j= 0, max = this.data.questions[i].answers.length; j < max; j++) {
                    var container = document.createElement('div');
                    container.classList.add('chBoxContainer');
                    wrapper.appendChild(container);

                    var checkbox = document.createElement('input');
                    container.appendChild(checkbox);
                    checkbox.setAttribute('type', 'checkbox');

                    var label = document.createElement('label');
                    label.classList.add('answer');
                    container.appendChild(label);
                    label.innerHTML = this.data.questions[i].answers[j];
                }
            }
        },
        createButton: function () {
            var button = document.createElement('button');
            button.classList.add('btn');
            button.innerHTML = 'Проверить мои результаты';
            var wrapper = document.querySelector('.wrapper');
            wrapper.appendChild(button);
        }
    };

    test.createStructure();
    test.showTestTitle();
    test.showTestQuestions();
    test.createButton();
    
})();

