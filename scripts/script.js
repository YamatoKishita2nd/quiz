'use strict';

{
  // クイズ一覧
  const QUIZ_VALUE = [
    {
      number: 1,
      question: '次のような言い方を耳にするけれど，適切でない言い方はどれでしょうか？',
      picture: 'images/ojigi_aisatsu_businessman.png',
      item: ['私のお考えを発表します。', '私はお料理が得意です。', '私が御説明をしたいと思います。'],
      quote: '文化庁 「第四話「間違いやすい敬語（1）～尊敬語 VS 謙譲語I」」<br>https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/keigo/chapter4/index.html',
    },
    {
      number: 2,
      question: '駅のアナウンスで耳にする「御乗車できません。」という言い方を適切な言い方に直してみたけれど，適切でないものが混ざってしまった。適切でないのはどれでしょうか？',
      picture: 'images/bg_eki_homedoor_train.jpg',
      item: ['御乗車はできません。', '御乗車になれません。', '御乗車することはできません。'],
      quote: '文化庁 「第五話「間違いやすい敬語（2）～尊敬語あれこれ～」」<br>https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/keigo/chapter5/index.html',
    },
    {
      number: 3,
      question: '「読みやすい」の尊敬語の形はどうなるのでしょうか？',
      picture: 'images/setsumeisyo_woman.png',
      item: ['お読みやすい', 'お読みになりやすい', '尊敬語にできない'],
      quote: '文化庁 「第五話「間違いやすい敬語（2）～尊敬語あれこれ～」」<br>https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/keigo/chapter5/index.html',
    },
    {
      number: 4,
      question: '中学校の担任の加藤先生に向かって，小学校の担任の田中先生の家を訪ねることを話すときに，田中先生を十分に高める気持ちを表せるのはどの言い方でしょうか？',
      picture: 'images/job_teacher_man.png',
      item: ['明日，小学校のときの担任の田中先生のところに伺います。', '明日，小学校のときの担任の田中先生のところに参ります。', '明日，小学校のときの担任の田中先生のところにいらっしゃいます。'],
      quote: '文化庁 「第六話「間違いやすい敬語（3）～謙譲語I VS 謙譲語II」」<br>https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/keigo/chapter6/index.html',
    },
    {
      number: 5,
      question: '取引先の社員から，来週，自分の上司である金子部長と打合せをしたいと予定を尋ねられたときの回答として適切な言い方はどれでしょうか？',
      picture: 'images/akusyu_man_gaikokujin.png',
      item: ['来週，部長の金子は海外にいらっしゃいます。', '来週，部長の金子は海外に伺います。', '来週，部長の金子は海外に参ります。'],
      quote: '文化庁 「第七話「場面で異なる敬語～ウチとソト～」」<br>https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/keigo/chapter7/index.html',
    },
    {
      number: 6,
      question: '図書委員会の仕事で，同級生の委員に文書の作成を頼みたい。適切でない言い方はどれでしょうか？',
      picture: 'images/tosyokan_book_kensaku_woman.png',
      item: ['これ，やってよ。', 'これ，お願いしてもいい？', '悪いけど，これ，お願いします。'],
      quote: '文化庁 「第三話「敬語のTPO～依頼の仕方～」」<br>https://www.bunka.go.jp/seisaku/kokugo_nihongo/kokugo_shisaku/keigo/chapter3/index.html',
    },
  ];

  const quiz = document.getElementById('template');
  let quizQuestioned = [];

  for (let i = 0; i < QUIZ_VALUE.length; i++) {
    let real_i = i;
    for (let j = 0; j >= 0; j++) {
      let r = Math.floor(Math.random() * QUIZ_VALUE.length);
      if (quizQuestioned.includes(r) === false) {
        i = r;
        quizQuestioned.push(i);
        break;
      } else {
        continue;
      }
    }
    
    const QUIZ_CONTENT = quiz.content.cloneNode(true);

    const DATA_QUIZ = QUIZ_CONTENT.querySelector('.js-quiz');
    DATA_QUIZ.setAttribute("data-quiz", i);

    QUIZ_CONTENT.querySelector('.question_title_box').textContent = `Q${real_i+1}`;
    QUIZ_CONTENT.querySelector('.question_title_text').textContent = QUIZ_VALUE[i].question;
    QUIZ_CONTENT.querySelector('.question_pct').innerHTML = ("<img src='" + QUIZ_VALUE[i].picture + "' width=\"400\" height=\"400\">");

    let btnList = [];
    for (let k = 1; k <= 3; k++) {
      for (let j = 0; j >= 0; j++) {
        let r = Math.floor(Math.random() * 3);
        if (btnList.includes(r) === false) {
          QUIZ_CONTENT.querySelector('.answer_list_item_btn_' + k).innerHTML = (QUIZ_VALUE[i].item[r] + "<i class=\"u-icon_arrow\"></i>");
          btnList.push(r);
          const ANSWER_CONTENT = QUIZ_CONTENT.querySelector(`.answer_list_item_btn_${k}`);
          ANSWER_CONTENT.setAttribute("data-answer", r);
          break;
        } else {
          continue;
        }
      }
    }

    if (QUIZ_VALUE[i].quote !== '') {
      QUIZ_CONTENT.querySelector('.quote').innerHTML = '<i class="u-icon_note"></i>' + QUIZ_VALUE[i].quote;
    } else {
      QUIZ_CONTENT.querySelector('.quote').classList.add('quote_hidden');
    }

    i = real_i;

    document.getElementById('temp').appendChild(QUIZ_CONTENT);
  }

  // 回答一覧
  const CORRECT_ANSWERS = [
    {
      index: 0,
      value: '私のお考えを発表します。'
    },
    {
      index: 2,
      value: '御乗車することはできません。'
    },
    {
      index: 1,
      value: 'お読みになりやすい'
    },
    {
      index: 0,
      value: '明日，小学校のときの担任の田中先生のところに伺います。'
    },
    {
      index: 2,
      value: '来週，部長の金子は海外に参ります。'
    },
    {
      index: 0,
      value: 'これ，やってよ。'
    }
  ];

  // すべての問題を取得
  const ALL_QUIZ = document.querySelectorAll('.js-quiz');

  // buttonタグにdisabledを付与
  const setDisabled = answers => {
    answers.forEach(answer => {
      answer.disabled = true;
    })
  }

  // trueかfalseで出力する文字列を出し分ける
  const setTitle = (target, isCorrect) => {
    target.innerText = isCorrect ? '正解！' : '不正解...';
  }
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect');
  }

  // 各問題の中での処理
  ALL_QUIZ.forEach(quiz => {
    const ANSWERS = quiz.querySelectorAll('.js-answer');
    const SELECTED_QUIZ = Number(quiz.getAttribute('data-quiz'));
    const ANSWER_BOX = quiz.querySelector('.js-answerBox');
    const ANSWER_TITLE = quiz.querySelector('.js-answerTitle');
    const ANSWER_TEXT = quiz.querySelector('.js-answerText');

    ANSWERS.forEach(answer => {
      answer.addEventListener('click', () => {
        answer.classList.add('is-selected');

        const selectedAnswer = Number(answer.getAttribute('data-answer'));

        setDisabled(ANSWERS);

        const isCorrect = CORRECT_ANSWERS[SELECTED_QUIZ].index === selectedAnswer;

        ANSWER_TEXT.innerText = CORRECT_ANSWERS[SELECTED_QUIZ].value;
        setTitle(ANSWER_TITLE, isCorrect);
        setClassName(ANSWER_BOX, isCorrect);
      })
    })
  })
}