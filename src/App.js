// ReactからuseStateフックをインポートします。useStateは、コンポーネント内で状態（データ）を管理するために使用します。
import React, { useState } from 'react';

// FormAppコンポーネントを定義します。
const FormAppMin = () => {
  // useStateを使って、入力値を保持するための状態変数`inputValue`と、それを更新するための関数`setInputValue`を宣言します。
  // 初期値は空文字''です。
  const [inputValue, setInputValue] = useState('');

  // テキストボックスの入力値が変更されるたびに呼び出される関数です。
  const handleChange = (event) => {
    // event.target.valueには、入力された最新のテキストが入っています。
    // setInputValue関数を使って、inputValueの状態を更新します。これにより、コンポーネントが再レンダリングされます。
    setInputValue(event.target.value);
  };

  // コンポーネントが画面に表示する内容（JSX）を返します。
  return (
    <div>
      {/* ===== 表示部分 ===== */}
      <div style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力内容の表示</h2>
        {/* inputValueの状態を画面に表示します。 */}
        <p>{inputValue}</p>
      </div>

      {/* ===== フォーム部分 ===== */}
      <div style={{ padding: '10px', border: '1px solid #ccc' }}>
        <h2>入力フォーム</h2>
        {/* テキスト入力ボックスです。 */}
        <input
          type="text"
          // value属性にinputValue状態を紐付けます。
          value={inputValue}
          // onChangeイベントにhandleChange関数を紐付け、入力があるたびに呼び出されるようにします。
          onChange={handleChange}
          placeholder="文字を入力してください"
        />
      </div>
    </div>
  );
};

// このコンポーネントを他のファイルで使えるようにエクスポートします。
export default FormAppMin;