// ReactからuseStateフックをインポートします。
import React, { useState } from 'react';

// FormAppコンポーネントを定義します。
const FormApp1 = () => {
  // useStateを使って、フォーム全体の入力値をオブジェクトとして管理します。
  // 各プロパティ（name, email, comment）がそれぞれの入力フィールドに対応します。
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    comment: '',
  });

  // いずれかの入力フィールドの値が変更されたときに呼び出される関数です。
  const handleChange = (event) => {
    // event.targetから、どの入力フィールド（name）が、どの値（value）に変更されたかを取得します。
    const { name, value } = event.target;

    // setFormDataを呼び出して、状態を更新します。
    // スプレッド構文(...)を使って既存のformDataオブジェクトを展開し、
    // 変更があったプロパティ（例: name）だけを新しい値（value）で上書きします。
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* ===== 表示部分 ===== */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力内容の表示</h2>
        <p><strong>名前:</strong> {formData.name}</p>
        <p><strong>メール:</strong> {formData.email}</p>
        <p><strong>コメント:</strong> {formData.comment}</p>
      </div>

      {/* ===== フォーム部分 ===== */}
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力フォーム</h2>
        {/* 名前入力フィールド */}
        <div>
          <label>名前: </label>
          <input
            type="text"
            // `name`属性は、どのデータを更新するかを識別するために重要です。
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="山田 太郎"
          />
        </div>
        {/* メール入力フィールド */}
        <div style={{ marginTop: '10px' }}>
          <label>メール: </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="example@test.com"
          />
        </div>
        {/* コメント入力フィールド */}
        <div style={{ marginTop: '10px' }}>
          <label>コメント: </label>
          <textarea
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            placeholder="ご意見・ご感想"
          />
        </div>
      </div>
    </div>
  );
};

export default FormApp1;