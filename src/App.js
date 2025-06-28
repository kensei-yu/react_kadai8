import React, { useState } from 'react';

const MAX_LENGTH = {
  name: 20,
  email: 50,
  comment: 200,
};

// フォームの初期状態を定義した定数
const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  comment: '',
};

const FormApp3 = () => {
  // 現在のフォーム入力値を管理するstate
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  // 保存されたフォームデータの一覧を管理するstate。初期値は空の配列[]です。
  const [savedDataList, setSavedDataList] = useState([]);

  // 入力値が変更されたときに呼び出される関数
  const handleChange = (event) => {
    const { name, value } = event.target;
    if (value.length <= MAX_LENGTH[name]) {
      setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  // 保存ボタンがクリックされたときに呼び出される関数
  const handleSave = () => {
    // 現在のformDataをsavedDataListの配列に追加します。
    // スプレッド構文(...)を使って、既存のリストの末尾に新しいデータを追加した新しい配列を作成します。
    setSavedDataList(prevList => [...prevList, formData]);
    
    // フォームの入力内容を初期状態にリセットします。
    setFormData(INITIAL_FORM_STATE);
  };

  return (
    <div>
      {/* ===== フォーム部分と現在の入力内容 ===== */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力フォーム</h2>
        {/* 名前 */}
        <div>
          <label>名前: </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            maxLength={MAX_LENGTH.name}
            placeholder="山田 太郎"
          />
          <span style={{ marginLeft: '10px' }}>
            {formData.name.length} / {MAX_LENGTH.name}
          </span>
        </div>
        {/* メール */}
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
        {/* コメント */}
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
        {/* 保存ボタン */}
        <div style={{ marginTop: '20px' }}>
          <button onClick={handleSave}>保存</button>
        </div>
      </div>

      {/* ===== 保存したもの一覧 ===== */}
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h2>保存したもの一覧</h2>
        {/* savedDataListが空の場合はメッセージを表示 */}
        {savedDataList.length === 0 ? (
          <p>まだ保存されたデータはありません。</p>
        ) : (
          // savedDataListにデータがある場合は、リスト形式で表示
          // .map()関数を使って、配列の各要素を順番に取り出し、JSXの要素に変換します。
          // `item`には各保存データ(オブジェクト)、`index`にはその要素番号が入ります。
          // Reactでリストを表示する際は、各要素を区別するためにユニークな`key`属性が必要です。
          <ul>
            {savedDataList.map((item, index) => (
              <li key={index} style={{ marginBottom: '10px', padding: '5px', borderBottom: '1px solid #eee' }}>
                <p><strong>名前:</strong> {item.name || '未入力'}</p>
                <p><strong>メール:</strong> {item.email || '未入力'}</p>
                <p><strong>コメント:</strong> {item.comment || '未入力'}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FormApp3;