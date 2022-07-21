import Editor from "@toast-ui/editor";

import "@toast-ui/editor/dist/toastui-editor.css";

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      setToastEditor: (el: HTMLElement) => {
        const editorControl = new Editor({
          el,
          height: "500px",
          initialEditType: "markdown",
          previewStyle: "vertical",
        });
        editorControl.getMarkdown();

        return editorControl;
      },
    },
  };
});

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $setToastEditor(el: HTMLElement): Editor;
  }
}
