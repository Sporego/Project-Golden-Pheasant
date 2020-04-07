<style>
  #tutorial {
    object-fit: cover;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }
</style>

<svelte:head>
  <title>folding@home</title>
</svelte:head>

<h1>Setup</h1>

<p>

  <a href="https://foldingathome.org/start-folding/">
    Official Download Link | 官方下载渠道
  </a>
  <br />
  <br />
  <a
    id="tutorial"
    href="https://github.com/FoldingAtHome/fah-issues/files/4364298/FAHViewer-091713f412-windows-x86_64.zip"
    download>
    Windows_ViewerFixPatch_(FAHViewer_091713f412_windows_x86_64.zip)
    <br />
    修复补丁
  </a>
  <br />
  ^Extract and ovewrite into install directory to fix Viewer!
  <br />
  ^将下载后的补丁包解压缩并将两个文件拖入folding@home 下载文档覆盖现有文件
  <img alt="Image guide for viewer patch on windows" src="tutorial.png" />
</p>
