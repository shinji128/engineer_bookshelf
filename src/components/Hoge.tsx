export const Hoge = () => {
  return (
    <>
      <p>ローカル</p>
      <iframe src="http://localhost:3000/embed/9c83a54efd423340813836559cc54bf8fd04e6d26906b01792356a428260f027/chats">
        この部分はインラインフレームを使用してます。
      </iframe>
      <p>ステージング</p>
      <iframe src="https://app.my-ope.net/embed/3a039e0d3772a0991872ac276c08e1f6a88109763aae2dde5eb1ff94b964c1d0/chats">
        この部分はインラインフレームを使用してます。
      </iframe>
    </>
  )
}
