(function () {
    'use strict';

    var test = {
        data: {
            title: 'Тест по программированию',
            questions: [
                {
                    title: '1. Вопрос №1',
                    answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3']
                },
                {
                    title: '2. Вопрос №2',
                    answers: ['Вариант ответа 1', 'Вариант ответа 2', 'Вариант ответа 3', 'Вариант ответа 4']
                },
                {
                    title: '3. Вопрос №3',
                    answers: ['Вариант ответа 1', 'Вариант ответа 2']
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
            elem.appendChild(document.createTextNode(this.data.title));
            var wrapper = document.querySelector('.wrapper');
            wrapper.appendChild(elem);
        },
        showTestQuestions: function () {
            for (var i = 0, length = this.data.questions.length; i < length; i++) {
                var header = document.createElement('h3');
                header.classList.add('ques_header');
                header.appendChild(document.createTextNode(this.data.questions[i].title));
                var wrapper = document.querySelector('.wrapper');
                wrapper.appendChild(header);

                for ( var j= 0, max = this.data.questions[i].answers.length; j < max; j++) {
                    var label = document.createElement('label');
                    label.classList.add('answer');
                    wrapper.appendChild(label);


                    var checkbox = document.createElement('input');
                    checkbox.setAttribute('type', 'checkbox');
                    label.appendChild(checkbox);
                    label.appendChild(document.createTextNode(this.data.questions[i].answers[j]));

                }
            }
        },
        createButton: function () {
            var button = document.createElement('button');
            button.classList.add('btn');
            button.appendChild(document.createTextNode('Проверить мои результаты'));
            var wrapper = document.querySelector('.wrapper');
            wrapper.appendChild(button);
        }
    };

    test.createStructure();
    test.showTestTitle();
    test.showTestQuestions();
    test.createButton();
    
})();

