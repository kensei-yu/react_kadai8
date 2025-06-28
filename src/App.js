import React, { useState } from 'react';

// 各項目の文字数上限を定数として定義します。
const MAX_LENGTH = {
  name: 20,
  email: 50,
  comment: 200,
};

const FormApp2 = () => {
  // フォームの入力値を管理するstate
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  // 入力値が変更されたときに呼び出される関数
  const handleChange = (event) => {
    const { name, value } = event.target;

    // 入力値が上限文字数を超えないように制限します。
    if (value.length <= MAX_LENGTH[name]) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  return (
    <div>
      {/* ===== 表示部分 ===== */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力内容の表示</h2>
        {/* 三項演算子 `(条件 ? trueの場合 : falseの場合)` を使用しています。
          formData.nameが存在すれば（空文字でなければ）その値を表示し、
          存在しなければ "未入力です" と表示します。
        */}
        <p><strong>名前:</strong> {formData.name || '未入力です'}</p>
        <p><strong>メール:</strong> {formData.email || '未入力です'}</p>
        <p><strong>コメント:</strong> {formData.comment || '未入力です'}</p>
      </div>

      {/* ===== フォーム部分 ===== */}
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力フォーム</h2>
        {/* 名前入力フィールド */}
        <div>
          <label>名前: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            // HTMLの属性で文字数上限を設定することもできますが、今回はJSで制御しています。
            maxLength={MAX_LENGTH.name}
            placeholder="山田 太郎"
          />
          {/* 現在の文字数と上限文字数を表示します。 */}
          <span style={{ marginLeft: '10px' }}>
            {formData.name.length} / {MAX_LENGTH.name}
          </span>
        </div>
        {/* メール入力フィールド */}
        <div style={{ marginTop: '10px' }}>
          <label>メール: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            maxLength={MAX_LENGTH.email}
            placeholder="example@test.com"
          />
          <span style={{ marginLeft: '10px' }}>
            {formData.email.length} / {MAX_LENGTH.email}
          </span>
        </div>
        {/* コメント入力フィールド */}
        <div style={{ marginTop: '10px' }}>
          <label>コメント: </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            maxLength={MAX_LENGTH.comment}
            placeholder="ご意見・ご感想"
          />
          <span style={{ marginLeft: '10px' }}>
            {formData.comment.length} / {MAX_LENGTH.comment}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormApp2;